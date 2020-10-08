import { blockCreator, blockRedactor } from '../utils';
import { TextBlock, TitleBlock, DefaultBlock, ImageBlock, ColumnsBlock } from './blocks';

export class Sidebar {
    constructor(selector, updateCallbeck) {
        this.elem = document.querySelector(selector);
        this.update = updateCallbeck;

        this.init();
    }

    init() {
        this.elem.insertAdjacentHTML('beforeend', this.templateCreator);
        this.elem.addEventListener('submit', this.add.bind(this));
    }

    showRedactor(block) {
        this.elem.insertAdjacentHTML('beforeend', blockRedactor(block));
    }

    get templateCreator() {
        return blockCreator();
    }
    get templateRedactor() {
        return blockRedactor();
    }

    add(event) {
        event.preventDefault();

        console.log(typeof event.target, event.target);

        const name = event.target.type.value;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        const tag = ''; //event.target.tag.value;
        const position = event.target.position.value;
        const useCol = event.target.useCol.checked;

        console.log(`name: ${name}
		value: ${value}
		styles: ${styles}
		position: ${position}
		useCol: ${useCol}`);

        // console.log(options);

        // console.log(tag);

        let newBlock = '';

        //hhhhr

        switch (name) {
            case 'Block':
                newBlock = new DefaultBlock(value, { styles });
                break;
            case 'Text':
                newBlock = new TextBlock(value, { styles });
                break;
            case 'Title':
                newBlock = new TitleBlock(value, { styles, tag });
                break;
            case 'Image':
                newBlock = new TextBlock(value, { styles });
                break;
            case 'Columns':
                newBlock = new TextBlock(value, { styles });
                break;
        }

        this.update(newBlock);

        event.target.value.value = '';
        event.target.styles.value = '';
    }
}
