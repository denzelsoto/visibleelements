# VisibleElements

VisibleElements is lightweight jQuery plugin that allows users to check if the element is currently inside the viewport. The plugin simply adds a class to the specified element if it's currently visible on the viewport. This allows more flexibily since there are no specified styles and does not manipulate the DOM structure.

## Demo

[VisibleElements](http://staging.denzelsoto.com/web-development/plugins/visibleelements/)

Options
-------

Default options:

```js
{
    // [number] Add offset from the top of the element
    offsetTop		: null,
    
    // [number] Add offset from the bottom of the element
    offsetBottom	: null,
    
    // [string] Allows use of custom class
    customClass		: 'onScreen',
    
    // [boolean] Removes the class when the elements leaves the screen upwards
    removeAfter  	: false,
    
    // [boolean] If set to true, the plugin will only run once
    runOnce  		: false,
}
```

Initialize
----------

```js
$('.element').visibleElements();

// Initialize with options
$('.element').visibleElements({
  offsetTop	: null,
  offsetBottom	: null,
  customClass	: 'onScreen',
  removeAfter	: false,
  runOnce	: false
});

// Initialize with methods
$('.element').visibleElements({
	isOnScreen : function(){
		// Call a function when element is on screen
	}
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
