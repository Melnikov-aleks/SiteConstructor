import { Sidebar } from './sidebar';
import { Site } from './site';

export class App {
    constructor(model) {
        this.model = model;
    }
    init() {
        const findElemInModel = (elem) => {
            const adress = [];
            while (elem !== site.elem) {
                let elemParent = elem.parentElement;

                for (let i = 0; i < elemParent.children.length; i++) {
                    if (elemParent.children[i] === elem) {
                        adress.unshift(i);
                    }
                }

                elem = elemParent;
            }

            let elParent = this.model;

            for (let i = 0; i < adress.length - 1; i++) {
                if (typeof elParent[adress[i]] === 'object') {
                    elParent = elParent[adress[i]].value;
                } else {
                    elParent = elParent[adress[i]];
                }
            }

            const index = adress[adress.length - 1];
            let el = null;

            el = elParent[index];

            return { el, elParent, index };
        };

        const redactorCallback = (event) => {
            let element = null;
            if (event && event.target) {
                element = event.target;
                site.borderSelect(element);
                this.elem = findElemInModel(element);
            }
            sidebar.setStateRadio(element, site.elem);
            sidebar.showBreadcrumbs(element, site.elem);
            sidebar.showRedactor(element, site.elem);
        };

        const insideModel = (newBlock) => {
            switch (newBlock.position) {
                case 'docEnd':
                    this.model.push(newBlock.block);
                    break;
                case 'inside':
                    this.elem.el.value.push(newBlock.block);
                    break;
                case 'before':
                    for (let i = this.elem.elParent.length; i > this.elem.index; i--) {
                        this.elem.elParent[i] = this.elem.elParent[i - 1];
                    }

                    this.elem.elParent[this.elem.index] = newBlock.block;
                    break;
                case 'after':
                    for (
                        let i = this.elem.elParent.length;
                        i > this.elem.index + 1;
                        i--
                    ) {
                        this.elem.elParent[i] = this.elem.elParent[i - 1];
                    }

                    this.elem.elParent[this.elem.index + 1] = newBlock.block;

                    break;
                case 'instead':
                    newBlock.options ? (this.elem.el.options = newBlock.options) : false;
                    newBlock.value ? (this.elem.el.value = newBlock.value) : false;
                    break;
            }
        };
        const updateCallbeck = (newBlock) => {
            insideModel(newBlock);

            site.render(this.model);
        };

        const site = new Site('#site', redactorCallback);
        const sidebar = new Sidebar('#panel', updateCallbeck, redactorCallback);

        site.render(this.model);
    }
}
