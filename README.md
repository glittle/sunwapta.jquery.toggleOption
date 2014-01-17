# Toggle Dropdown Options

## Description

A jQuery plugin that hides and shows &lt;option> element in a &lt;select>.

## Usage

Sample HTML:

```HTML
    <select id="colors">
      <option>Choose a color...</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
```

JavaScript:

```JavaScript
    $('#colors option').length == 4; // true

    $('#colors').hideOption('green');
    $('#colors option').length == 3; // true

    $('#colors').showOption('green');
    $('#colors option').length == 4; // true
```

## Discussion:

When `hideOption` is used, this plugin will physically remove the `<option>` element from the DOM.

When `showOption` is used to show it again, the `<option>` is re-inserted into the same location in the list.

If you have added jQuery `data` values to the `option`

It works in all browsers.
    