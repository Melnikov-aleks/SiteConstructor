import './styles/main.scss';
import { model } from './model';
import { App } from './classes/app';
// import { templates } from './templates';
//firebase
console.log(model);
new App(model).init();
