# Log Form Element

[![JSR](https://jsr.io/badges/@knowler/log-form-element)](https://jsr.io/@knowler/log-form-element)

Wrap a `<form>` element with this `<log-form>` and it’ll prevent the
default submission and log the form data to the console instead.

[See the demo](https://knowler.github.io/log-form-element/demo).

## Usage

The element is published on JSR (which can be used as an NPM registry) or you
can use a CDN like esm.sh to import the module.

By default, the module exports the class for you to define yourself. The class
has a `define()` method which can be used to easily define the element either
using a default tag name of `log-form` or whatever one you pass it.

```javascript
import { LogFormElement } from "https://esm.sh/jsr/@knowler/log-form-element";

LogFormElement.define();
```

You can also add a `?define` search param to the module’s URL which it’ll use to
automatically register the custom element using the default tag name. If you are
using a CDN, you might need to add a `?raw` param so that the `define` param
applies to module URL itself.

```html
<script type=module src="https://esm.sh/jsr/@knowler/log-form-element?raw&define"></script>
```

Once the element is registered. You can wrap `<form>` elements with it and then
open your console to debug submission.

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
