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

## Syntax:

```JavaScript
    $('#mySelect').hideOption(valueName); 
    $('#mySelect').showOption(valueName);
    $('#mySelect').toggleOption(valueName, show);
    
    // valueName is the value of the option
    // show is a boolean - if true, option will be shown, if false, option will be hidden
```

## Discussion:

Use `hideOption()` when you want to hide an `<option>` from the `<select>` element.  

Then use `showOption()` to show it again.  The `<option>` will be re-inserted into the same location in the `select` as it was at before.

You can also use `toggleOption()` to make the option toggle - if it is showing, it will be hidden, and vice-versa.

It works in all browsers.

## Technical Discussion

When `hideOption` is used, this plugin will physically remove the `<option>` element from the DOM.

If you have added jQuery `data` values to the `option`, they are not lost when `hideOption` and `showOption` are 
used.  (Internally, this uses `[detach][http://api.jquery.com/detach/]` to remove the `option`.)

It does not matter if you call `hideOption` when it is already hidden, or `showOption` when it is already shown.

This can be used a number of elements at the same time.  For example:
```JavaScript
    $('#firstSelect, .MainSelects').hideOption('add');  // will remove all `<option value="add">....</option>` from the matched `<select>` elements.
```





