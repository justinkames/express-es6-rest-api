export default class Todo {
	constructor(title, description, id=false) {
		this.title = title;
		this.description = description;

		if (id !== false) {
			this.id = id;
		}

	}
}
