import { row, css, col } from '../utils';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
        this.hash = value.toString()
            ? value.toString().charCodeAt(0) * Date.now()
            : Date.now();
        console.log(Date.now(), this.hash);
        // this.hash = model.length;
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
        const { styles } = this.options;
        if (typeof this.value == 'object') {
            return row(this.value.toHTML(), css(styles));
        }
        return row(this.value, css(styles));
    }
}
export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { tag = 'h1', column, styles } = this.options;
        console.log(tag);
        const html = `<${tag} style="${css(styles)}" data-hash="${this.hash}" >${
            this.value
        }</${tag}>`;
        if (column) return col(html);
        return html;
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, column } = this.options;
        const html = `<p style="${css(styles)}" data-hash="${this.hash}">${
            this.value
        }</p>`;
        if (column) return col(html);
        return html;
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles } = this.options;
        const html = this.value.map(col).join('');
        return row(html, css(styles));
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { styles, alt, column } = this.options;
        const html = `<img src="${this.value}" alt="${alt}" style="${css(styles)}">`;
        if (column) return col(html);
        return html;
    }
}
