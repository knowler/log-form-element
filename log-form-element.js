const logFormElementStyleSheet = new CSSStyleSheet();
await logFormElementStyleSheet.replace(`
	:host { display: contents; }
`);

export class LogFormElement extends HTMLElement {
	get form() { return this.querySelector(":scope > form"); }

	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: "open" });
			this.shadowRoot.adoptedStyleSheets = [logFormElementStyleSheet];
			this.shadowRoot.innerHTML = "<slot></slot>";
		}
		this.form?.addEventListener("submit", this);
	}

	handleEvent(event) {
		if (event.type === "submit") {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);

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

