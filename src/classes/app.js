import { Sidebar } from './sidebar';
import { Site } from './site';

export class App {
    constructor(model) {
        this.model = model;
    }
    init() {
        const site = new Site('#site', redactorCallback);

        site.render(this.model);

        const updateCallbeck = (newBlock) => {
            this.model.push(newBlock);
            site.render(this.model);
        };
        const sidebar = new Sidebar('#panel', updateCallbeck);

        function redactorCallback() {
            if (this.lastSelect) {
                this.lastSelect.classList.remove('selected');
            }
            let select = null;
            if (event.target.tagName.search(/^H\d/) !== -1) {
                select = event.target.parentElement;
            } else {
                select = event.target;
            }

            console.log(event.target.tagName.search(/^H\d/));
            console.log(event);
            select.classList.add('selected');
            this.lastSelect = select;
            sidebar.showRedactor(select);
        }
    }
}
