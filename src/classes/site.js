export class Site {
    constructor(selector, redactorCallback) {
        this.elem = document.querySelector(selector);
        this.redactor = redactorCallback;
    }
    render(model) {
        this.elem.innerHTML = '';
        console.log(model);
        model.forEach((block) => {
            this.elem.insertAdjacentHTML('beforeend', block.toHTML());
        });

        this.elem.addEventListener('click', this.redactor);
    }
}
