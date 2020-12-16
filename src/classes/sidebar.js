import { blockCreator, blockRedactor, blockBreadcrumbs, formValidate } from '../utils';
import { TextBlock, TitleBlock, DefaultBlock, ImageBlock, ColumnBlock } from './blocks';

export class Sidebar {
    constructor(selector, updateCallbeck) {
        this.elem = document.querySelector(selector);
        this.update = updateCallbeck;

        this.init();
    }

    init() {
        this.elem.insertAdjacentHTML('afterbegin', this.templateCreator);
        this.elem.insertAdjacentHTML(
            'beforeend',
            `<button type="button" id="deleteBtn" value="deleteAll" class="btn btn-danger btn-sm btn-block">Удалить все</button>`
        );

        this.elem.addEventListener('submit', this.add.bind(this));
        this.elem.addEventListener('click', this.delete.bind(this));

        this.elem.addEventListener('change', this.showSet.bind(this));
    }

    showRedactor(block, site) {
        while (this.elem.querySelector('#sidebar__redactor')) {
            this.elem.querySelector('#sidebar__redactor').remove();
        }
        if (block && block !== site) {
            this.elem
                .querySelector('#deleteBtn')
                .insertAdjacentHTML('beforebegin', blockRedactor(block));
        }
    }
    showBreadcrumbs(block, site) {
        while (this.elem.querySelector('#sidebar__breadcrumbs')) {
            this.elem.querySelector('#sidebar__breadcrumbs').remove();
        }
        if (block) {
            this.elem
                .querySelector('#createForm')
                .insertAdjacentHTML('afterend', blockBreadcrumbs(block, site));
            this.elem
                .querySelector('.breadcrumbs')
                .addEventListener('click', breadcrumbsEventHandler);
            this.elem
                .querySelector('.breadcrumbs')
                .addEventListener('mouseover', breadcrumbsEventHandler);
            this.elem
                .querySelector('.breadcrumbs')
                .addEventListener('mouseout', breadcrumbsEventHandler);
        }

        function breadcrumbsEventHandler(event) {
            switch (true) {
                case !event.target.classList.contains('breadcrumbs-item'):
                    break;
                case event.target.classList.contains('breadcrumbs__parent'):
                    let myEvent = new MouseEvent(event.type, {
                        bubbles: true,
                        cancelable: true,
                    });
                    block.parentElement.dispatchEvent(myEvent);
                    break;
                case event.target.classList.contains('breadcrumbs__current'):
                    break;
                case event.target.classList.contains('childrens-list__item'):
                    const elemParent = event.target.parentElement;
                    for (let i = 0; i < elemParent.children.length; i++) {
                        if (elemParent.children[i] === event.target) {
                            let myEvent = new MouseEvent(event.type, {
                                bubbles: true,
                                cancelable: true,
                            });
                            block.children[i].dispatchEvent(myEvent);
                        }
                    }
                    break;
            }
        }
    }

    get templateCreator() {
        return blockCreator();
    }

    delete(event) {
        if (
            !event ||
            !event.target ||
            (event.target.value !== 'deleteAll' && event.target.value !== 'deleteEl')
        )
            return;
        const newBlock = { action: event.target.value };
        this.update(newBlock);
    }

    add(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newBlock = {};
        const options = {};

        if (!formValidate(event.target)) return;

        formData.has('styles') ? (options.styles = formData.get('styles')) : false;
        formData.has('tag') ? (options.tag = formData.get('tag')) : false;
        formData.has('classes') ? (options.classes = formData.get('classes')) : false;

        switch (formData.get('type')) {
            case 'Text':
                newBlock.block = new TextBlock([formData.get('value')], options);
                break;
            case 'Title':
                newBlock.block = new TitleBlock([formData.get('value')], options);
                break;
            case 'Image':
                newBlock.block = new ImageBlock([formData.get('value')], options);
                break;
        }

        if (formData.get('column')) {
            newBlock.block = new ColumnBlock([newBlock.block], {
                styles: formData.get('columnStyles'),
            });
        }

        if (formData.get('block')) {
            newBlock.block = new DefaultBlock([newBlock.block], {
                styles: formData.get('blockStyles'),
            });
        }

        newBlock.action = formData.get('position') ?? 'Instead';

        if (!formData.has('type')) {
            newBlock.options = options;
            formData.has('value') ? (newBlock.value = [formData.get('value')]) : false;
        }

        this.update(newBlock);

        event.target.reset();

        this.showSet(event);
    }

    showSet(event) {
        const form = event.target.form ?? event.target;

        formValidate(form);

        if (form.name === 'redactorElement' || form.name === 'delete') return;

        if (form.type.value === 'Image') {
            form.querySelector('#labelValue').innerHTML = 'Изображение';
            form.querySelector('#inputValue').placeholder = 'src';
        } else {
            form.querySelector('#labelValue').innerHTML = 'Текст';
            form.querySelector('#inputValue').placeholder = 'value';
        }
        if (form.type.value === 'Title')
            form.querySelector('#tagGroup').classList.remove('collapse');
        else form.querySelector('#tagGroup').classList.add('collapse');

        if (form.block.checked)
            form.querySelector('#blockGroup').classList.remove('collapse');
        else form.querySelector('#blockGroup').classList.add('collapse');

        if (form.column.checked)
            form.querySelector('#columnGroup').classList.remove('collapse');
        else form.querySelector('#columnGroup').classList.add('collapse');
    }

    setStateRadio(element, site) {
        if (element && element.tagName) {
            switch (true) {
                case element === site:
                    this.elem.querySelector('#posBefore').setAttribute('disabled', '');
                    this.elem.querySelector('#posAfter').setAttribute('disabled', '');
                    this.elem.querySelector('#posInside').setAttribute('disabled', '');
                    break;
                case element.tagName.toLowerCase() === 'div':
                    this.elem.querySelector('#posBefore').removeAttribute('disabled');
                    this.elem.querySelector('#posAfter').removeAttribute('disabled');
                    this.elem.querySelector('#posInside').removeAttribute('disabled');
                    break;
                case element.tagName.toLowerCase() === 'p':
                case /^h\d/i.test(element.tagName):
                    this.elem.querySelector('#posBefore').removeAttribute('disabled');
                    this.elem.querySelector('#posAfter').removeAttribute('disabled');
                    this.elem.querySelector('#posInside').setAttribute('disabled', '');
                    break;

                default:
                    this.elem.querySelector('#posBefore').setAttribute('disabled', '');
                    this.elem.querySelector('#posAfter').setAttribute('disabled', '');
                    this.elem.querySelector('#posInside').setAttribute('disabled', '');
                    break;
            }
        } else {
            this.elem.querySelector('#posBefore').setAttribute('disabled', '');
            this.elem.querySelector('#posAfter').setAttribute('disabled', '');
            this.elem.querySelector('#posInside').setAttribute('disabled', '');
        }
    }
}
