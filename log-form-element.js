export class LogFormElement extends HTMLElement {
	static styleSheet = createStyleSheet(`
		:host {
			display: contents;
		}
	`);

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.adoptedStyleSheets = [this.constructor.styleSheet];
		this.shadowRoot.innerHTML = "<slot></slot>";

		this.addEventListener("submit", this, true);
	}

	handleEvent(event) {
		if (event.type === "submit" && event.target.matches("form")) {
			event.preventDefault();
			const formData = new FormData(event.target);

			console.log(Array.from(formData));
		}
	}

	static define(tagName = "log-form") {
		if (!window.customElements.get(tagName)) {
			window[this.name] = this;
			window.customElements.define(tagName, this);
		}
	}
}

function createStyleSheet(styles) {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(styles);
	return sheet;
}

if (new URL(import.meta.url).searchParams.has("define")) {
	LogFormElement.define();
}
