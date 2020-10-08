export function row(content, styles) {
    return `<div class="row" style="${styles}">${content}</div>`;
}
export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = (key) => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

export function blockCreator() {
    return `
	<form name="creatorElement">
		<h5>Вставить новый элемент</h5>
		<div class="form-group">
			<label for="SelectElement">Элемент для вставки</label>
			<select class="form-control" id="SelectElement" name="type">
				<option>Block</option>
				<option>Text</option>
				<option>Title</option>
				<option>Image</option>
				<option>Columns</option>
				<option>ColumnsElement</option>
			</select>
		</div>
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="checkbox" name="useCol" id="useColumns">
			<label class="form-check-label" for="useColumns">Use columns</label>
		</div>
		<div class="form-group">
			<label for="value">3ha4enie</label>
			<input class="form-control form-control-sm" name="value" placeholder="value">
		</div>
		<div class="form-group">
			<label for="styles">Stili</label>
			<input class="form-control form-control-sm" name="styles" placeholder="styles">
		</div>
		<div class="form-group">
			<label for="styles">Pozition vstavki</label>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="position" id="posDocEnd" value="docEnd" checked>
				<label class="form-check-label" for="posDocEnd">V konce doc</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="position" id="posBefore" value="before">
				<label class="form-check-label" for="posBefore">Pered elementom</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="position" id="posAfter" value="after">
				<label class="form-check-label" for="posAfter">Posle elementa</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="position" id="posInside" value="inside">
				<label class="form-check-label" for="posInside">Vnytri elementa</label>
			</div>
		</div>
		<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
	</form>
	<hr />
	`;
}
export function blockRedactor(block) {
    console.log(typeof block);
    return `
	<form name="redactorElement">
		<h5>Изменить элемент</h5>
		<div class="form-group">
			<label for="SelectElement">Элемент для изменения</label>
			<select class="form-control" id="SelectElement" name="type">
				<option>Text</option>
				<option>Title</option>
				<option>Image</option>
				<option>Columns</option>
				<option>ColumnsElement</option>
			</select>
		</div>
		<div class="form-group">
			<input class="form-control form-control-sm" name="value" placeholder="value">
		</div>
		<div class="form-group">
			<input class="form-control form-control-sm" name="styles" placeholder="styles">
		</div>
		<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
	</form>
	<hr />
	`;
}
