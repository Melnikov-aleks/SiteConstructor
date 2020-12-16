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
    }

    toHTML() {
        const { styles, classes = '' } = this.options;
        return row(this.value.map(html).join(''), css(styles), classes);
    }
}
export class ColumnBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, classes = '' } = this.options;
        return col(this.value.map(html).join(''), css(styles), classes);
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { tag = 'h1', styles, classes = '' } = this.options;
        const innerHTML = this.value.map((content) => {
            if (typeof content === 'string') {
                return `<${tag} class="${classes}" style="${css(
                    styles
                )}">${content}</${tag}>`;
            }
            return content.toHTML();
        });

        return innerHTML.join('');
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, classes = '' } = this.options;
        const innerHTML = this.value.map((content) => {
            if (typeof content === 'string') {
                return `<p class="${classes}" style="${css(styles)}">${content}</p>`;
            }
            return content.toHTML();
        });

        return innerHTML.join('');
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, classes = '' } = this.options;
        const innerHTML = `<img class="${classes}" src="${this.value}" style="${css(
            styles
        )}">`;

        return innerHTML;
    }
}
