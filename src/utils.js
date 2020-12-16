export function row(content, styles, classes) {
    return `<div class="row ${classes}" style="${styles}">${content}</div>`;
}
export function col(content, styles, classes) {
    return `<div class="col-sm ${classes}" style="${styles}">${content}</div>`;
}
export function html(content) {
    if (typeof content === 'string') {
        return content;
    }
    return content.toHTML();
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = (key) => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

function getChildrensList(childrens) {
    const htmlChilds = [];
    for (let child of childrens) {
        htmlChilds.push(
            `<li class="childrens-list__item breadcrumbs-item my-2">${child.tagName.toLowerCase()}</li>`
        );
    }
    return htmlChilds.join('');
}

export function formValidate(form) {
    let valide = true;
    if (form.position) {
        form.position.forEach((radio) => {
            if (radio.checked && radio.hasAttribute('disabled')) {
                radio.classList.add('is-invalid');
                return (valide = false);
            }
            radio.classList.remove('is-invalid');
        });
    }

    return valide;
}

export function blockBreadcrumbs(block, site) {
    const html = [];

    if (block !== site) {
        html.push(`
		<li class="breadcrumbs__parent breadcrumbs-item mr-3 my-2">
			${block.parentElement === site ? site.id : block.parentElement.tagName.toLowerCase()}
		</li>`);
    }

    html.push(`
	<li class="breadcrumbs__current breadcrumbs-item text-muted my-2">${
        block === site ? site.id : block.tagName.toLowerCase()
    }</li>`);
    if (block.children.length) {
        html.push(`
		<li class="breadcrumbs__childrens">
			<ul class="breadcrumbs__childrens-list p-0 ml-3">
				${getChildrensList(block.children)}
			</ul>
		</li>`);
    }

    return `
	<ul class="breadcrumbs p-0 d-flex justify-content-center align-items-center" id="sidebar__breadcrumbs">
	${html.join('')}
	</ul>
	`;
}

export function blockCreator() {
    return `
	<form name="creatorElement" id="createForm"> 
		<h5>Вставить новый элемент</h5>
		<div class="form-group">
			<label class="mb-1" for="SelectElement">Элемент для вставки</label>
			<select class="form-control" id="SelectElement" name="type">
				<option>Title</option>
				<option>Text</option>
				<option>Image</option>
			</select>
		</div>
		<div class="form-group form-row" id="tagGroup">
			<label class="col-sm col-form-label" for="value">Тэг</label>
			<div class="col-sm-9">
				<select class="form-control" id="TagElement" name="tag">
					<option>h1</option>
					<option>h2</option>
					<option>h3</option>
					<option>h4</option>
					<option>h5</option>
					<option>h6</option>
				</select>
			</div>
		</div>
		<div class="form-group">
			<label class="mb-1" id="labelValue" for="value">Текст</label>
			<input class="form-control form-control-sm" id="inputValue" name="value" placeholder="value">
		</div>
		<div class="form-group">
			<label class="mb-1" for="styles">Классы</label>
			<input class="form-control form-control-sm" name="classes" placeholder="classes">
		</div>
		<div class="form-group">
			<label class="mb-1" for="styles">Стили</label>
			<input class="form-control form-control-sm" name="styles" placeholder="styles">
		</div>
		<div class="form-group">
			<div class="form-group mb-0">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="block" id="useBlock" >
					<label class="form-check-label" for="useBlock">Обернуть в блок row</label>
				</div>
				<div class="form-group collapse" id="blockGroup">
					<label class="mb-1" for="styles">Стили для блока</label>
					<input class="form-control form-control-sm" name="blockStyles" placeholder="styles">
				</div>
			</div>
			<div class="form-group">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="column" id="useColumns">
					<label class="form-check-label" for="useColumns">Обернуть в колонку</label>
				</div>
				<div class="form-group collapse" id="columnGroup">
					<label class="mb-1" for="styles">Стили колонки</label>
					<input class="form-control form-control-sm" name="columnStyles" placeholder="styles">
				</div>
			</div>
		</div>
		<div class="form-group" id="radios">
			<legend class="col-form-label mb-1" for="styles">Позиция вставки</legend>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="position" id="posDocEnd" value="DocEnd" checked>
				<label class="form-check-label" for="posDocEnd">В конец сайта</label>
				<div class="invalid-feedback">
					Нельзя использовать эту позицию
				</div>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="position" id="posBefore" value="Before" disabled>
				<label class="form-check-label" for="posBefore">Перед элементом</label>
				<div class="invalid-feedback">
					Нельзя использовать эту позицию
				</div>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="position" id="posAfter" value="After" disabled>
				<label class="form-check-label" for="posAfter">После элемента</label>
				<div class="invalid-feedback">
					Нельзя использовать эту позицию
				</div>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="position" id="posInside" value="Inside" disabled>
				<label class="form-check-label" for="posInside">Внутри элемента</label>
				<div class="invalid-feedback">
					Нельзя использовать эту позицию
				</div>
			</div>
		</div>
		<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
		<hr />
	</form>
	`;
}
export function blockRedactor(block) {
    const tagOptions = [];
    const formValue = [];
    switch (true) {
        case /^h\d/i.test(block.tagName):
            for (let i = 1; i < 7; i++) {
                if (i == block.tagName.slice(1)) {
                    tagOptions.push(`<option select>h${i}</option>`);
                } else {
                    tagOptions.push(`<option>h${i}</option>`);
                }
            }

            tagOptions.unshift(`<select class="form-control" name="tag">`);

            formValue.push(`
			<div class="form-group">
				<label class="mb-1" for="value">Текст</label>
				<input class="form-control form-control-sm" name="value" placeholder="value" value="${block.innerHTML}">
			</div>
			`);
            break;
        case /^p/i.test(block.tagName):
            formValue.push(`
			<div class="form-group">
				<label class="mb-1" for="value">Текст</label>
				<input class="form-control form-control-sm" name="value" placeholder="value" value="${block.innerHTML}">
			</div>
			`);

        default:
            tagOptions.unshift(`<select class="form-control" name="tag" disabled>`);
            tagOptions.push(`<option select>${block.tagName.toLowerCase()}</option>`);
            break;
    }

    tagOptions.push(`</select>`);

    return `
	<form name="redactorElement" id="sidebar__redactor">
		<hr />
		<h5>Изменить элемент</h5>
		<div class="form-group form-row">
			<label class="col-sm col-form-label" for="value">Тэг</label>
			<div class="col-sm-9">
				${tagOptions.join('')}
			</div>
		</div>
		${formValue.join('')}
		<div class="form-group">
			<label class="mb-1" for="styles">Классы</label>
			<input class="form-control form-control-sm" name="classes" placeholder="classes" value="${block.classList
                .toString()
                .replace('selected', '')}">
		</div>
		<div class="form-group">
			<label class="mb-1" for="styles">Стили</label>
			<input class="form-control form-control-sm" name="styles" placeholder="styles" value="${block.getAttribute(
                'style'
            )}">
		</div>
		<div class="form-group form-row">
			<div class="col">
			<button type="submit" class="btn btn-primary btn-sm btn-block">Применить</button>
			</div>
			<div class="col">
			<button type="button" value="deleteEl" class="btn btn-danger btn-sm btn-block">Удалить</button>
			</div>
		</div>
		<hr />
	</form>
	`;
}
