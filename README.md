# Log Form Element

Wrap a `<form>` element with this and it’ll prevent the default
submission and log the form data to the console instead.

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
