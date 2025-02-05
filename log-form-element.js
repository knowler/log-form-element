/* @ts-self-types="./log-form-element.d.ts" */
export class LogFormElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" }).innerHTML = "<style>:host { display: contents; }</style><slot></slot>";
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

if (new URL(import.meta.url).searchParams.has("define")) LogFormElement.define();
