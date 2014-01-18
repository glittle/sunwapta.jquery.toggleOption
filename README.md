# Toggle Dropdown Options

## Description

A jQuery plugin that hides and shows `<option>` elements in a `<select>`.

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
    $('#mySelect').hideOption(value); 
    $('#mySelect').showOption(value);
    $('#mySelect').toggleOption(value, show);
    
    // value is a string - the text value of the option
    // show is a boolean - if true, option will be shown, if false, option will be hidden
```

## Discussion:

Use `hideOption()` when you want to hide an `<option>` from the `<select>` element.  

Then use `showOption()` to show it again.  The `<option>` will be re-inserted into the same location in the `select` as it was at before - the sort order of the options is maintained.

You can also use `toggleOption()` to make the option toggle - if it is showing, it will be hidden, and vice-versa.

It works in all browsers.

## Technical Notes:

*   It does not matter if you call `hideOption` when it is already hidden, or `showOption` when it is already shown.

*   All the options must be present in the DOM before `hideOption` or `toggleOption` is first called.  If new 

*   This can be used a number of elements at the same time.
```JavaScript
    $('#firstSelect, .MainSelects').hideOption('add');  // will remove all <option value="add">....</option> from the matched <select> elements.
```

*   If you have added jQuery `data` values to the `option`, they are not lost when `hideOption` and `showOption` are 
used.
```JavaScript
    $('#pickYear option[value=2014]').data('holidays', 9);  // store a value into data

    $('#pickYear').hideOption('2014');  // hide it
    $('#pickYear option[value=2014]').length == 0; // it's really gone!

    $('#pickYear').showOption('2014');  // show it
    $('#pickYear').showOption('2014').data('holidays') == 9;  // true - the value is still there
```

*   When `hideOption` is called, [detach()][http://api.jquery.com/detach/] is used to remove the `option` from the DOM.  It is later attached with `after()`, `before()`, or `prepend()` as needed.

## Why is this Needed?

In some browsers, options can be hidden using CSS, as shown here, but **that does not work** in some browsers, like Internet Explorer!
```HTML
    <select id="colors">
      <option>Choose a color...</option>
      <option value="red">Red</option>
      <option style="display:none" value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
```
Using this plug-in works everywhere and is very simple to use.




