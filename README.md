# Log Form Element

[![JSR](https://jsr.io/badges/@knowler/log-form-element)](https://jsr.io/@knowler/log-form-element)

Wrap a `<form>` element with this `<log-form-element>` and it’ll prevent the
default submission and log the form data to the console instead. [See the demo on CodePen](https://codepen.io/knowler/pen/zYembKY).

```js
import { LogFormElement } from "https://esm.sh/gh/knowler/log-form-element/log-form-element.js?raw";

LogFormElement.define();
```

```html
<log-form>
	<form>
		<label>
			<input type="checkbox" name="some-feature">
			Enable some feature
		</label>
		<button>Submit</button>
	</form>
</log-form>
```
