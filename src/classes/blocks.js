import { row, css, col, html } from '../utils';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('toHTML не реализован');
    }
}

export class DefaultBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.namel = 'def';
    }

    toHTML() {
        const { styles, classes = '' } = this.options;
        return row(this.value.map(html).join(''), css(styles), classes);
    }
}
export class ColumnBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.namel = 'col';
    }

    toHTML() {
        const { styles, classes = '' } = this.options;
        return col(this.value.map(html).join(''), css(styles), classes);
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.namel = 'title';
    }

    toHTML() {
        const { tag = 'h1', columns, styles, classes = '' } = this.options;
        const innerHTML = this.value.map((content) => {
            if (typeof content === 'string') {
                return `<${tag} class="${classes}" style="${css(
                    styles
                )}">${content}</${tag}>`;
            }
            return content.toHTML();
        });

        if (columns) return col(innerHTML.join(''));
        return innerHTML.join('');
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.namel = 'text';
    }

    toHTML() {
        const { styles, columns, classes = '' } = this.options;
        const innerHTML = this.value.map((content) => {
            if (typeof content === 'string') {
                return `<p class="${classes}" style="${css(styles)}">${content}</p>`;
            }
            return content.toHTML();
        });

        if (columns) return col(innerHTML.join(''));
        return innerHTML.join('');
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, alt, columns, classes = '' } = this.options;
        const innerHTML = `<img class="${classes}" src="${
            this.value
        }" alt="${alt}" style="${css(styles)}">`;
        if (columns) return col(innerHTML);
        return innerHTML;
    }
}
