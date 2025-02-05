/**
 * A custom element that logs form submissions to the console instead of its
 * default action.
 */
export declare class LogFormElement extends HTMLElement {
	/**
	 * Registers the custom element in the `window`’s custom element registry as
	 * `log-form` or the supplied tag name. Also, adds the class to the `window`.
	 * This method is idempotent and will not attempt to register the element if
	 * it’s already been done.
	 * @param {string} [tagName="log-form"] - the tag name to register the custom element as.
	 */
	static define(tagName?: string): void;
}
