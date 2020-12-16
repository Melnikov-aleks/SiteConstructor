export class Site {
    constructor(selector, redactorCallback) {
        this.elem = document.querySelector(selector);
        this.redactor = redactorCallback;
    }
    render(model) {
        this.elem.innerHTML = '';
        model.forEach((block) => {
            this.elem.insertAdjacentHTML('beforeend', block.toHTML());
        });

        this.redactor();

        this.elem.addEventListener('click', this.redactor);
        this.elem.addEventListener('mouseover', this.borderHover);
        this.elem.addEventListener('mouseout', this.borderHover);
    }

    borderHover(event) {
        if (event.target === this) return;
        switch (event.type) {
            case 'mouseover':
                event.target.classList.add('mouseOver');
                break;
            case 'mouseout':
                event.target.classList.remove('mouseOver');
                break;
        }
    }

    borderSelect(select) {
        if (this.lastSelect) {
            this.lastSelect.classList.remove('selected');
        }

        select.classList.remove('mouseOver');
        if (select === this.elem) return;
        select.classList.add('selected');
        this.lastSelect = select;
    }
}
