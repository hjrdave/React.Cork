
# React.Cork

A React based library for hooks and utilities.

[![npm version](https://badge.fury.io/js/react-cork.svg)](https://badge.fury.io/js/react-cork) ![example workflow](https://github.com/hjrdave/React.Cork/actions/workflows/npm-publish.yml/badge.svg) 
## useAnimate
The useAnimate hook is a cusThis will apply a fade-in animation to the component with a red color.tom hook in React that provides a simple way to animate components using CSS transitions. It takes an object of options as an argument and returns an object with the style property.

### Arguments
options (object): An object that contains the following properties:
type (string): A string that specifies the type of animation to be applied. Valid values are "fadeIn", "translate", or "scale".
delay (number, optional): An optional number that specifies the delay (in seconds) before the animation starts. The default value is 0.
duration (number, optional): An optional number that specifies the duration (in seconds) of the animation. The default value is 1.
style (object, optional): An optional object that contains additional CSS properties to be applied to the animated component.
disabled (boolean, optional): An optional boolean that disables the animation if set to true. The default value is false.

### Return Value
The useAnimate hook returns an object with the style property, which is an object that contains the CSS properties to be applied to the animated component.

### Usage
To use the useAnimate hook in a React component, you need to import it and call it inside the component. Here's an example:

```jsx
import React from "react";
import useAnimate from "./useAnimate";

const MyComponent = () => {
const { style } = useAnimate({
    type: "fadeIn",
    delay: 1,
    duration: 2,
    style: { color: "red" },
    disabled: false,
});

return <div style={style}>Hello World!</div>;
};
```

In this example, the useAnimate hook is called with an options object that specifies the type of animation ("fadeIn"), the delay before the animation starts (1 second), the duration of the animation (2 seconds), and an additional CSS style ({ color: "red" }). The disabled property is set to false, which means that the animation will be enabled.

The useAnimate hook returns an object that contains the style property, which is an object that contains the CSS properties to be applied to the animated component. In this case, the style object will contain the following properties:

```javascript
{
  opacity: 1,
  transition: "opacity 2s",
  color: "red"
}
```

This will apply a fade-in animation to the component with a red color.

## useClipboard
The useClipboard hook is a custom hook in React that provides a simple way to copy content to the clipboard. It returns an object containing a function to copy content to the clipboard, the current state of the copy button, and a ref to the content that is being copied.

### Return Value
The useClipboard hook returns an object containing the following properties:

`copyToClipboard (function):` A function that takes an optional string as an argument and copies it to the clipboard. If no argument is provided, it will copy the content of the contentRef ref.
copyState (string): The current state of the copy button. It can be either "Copy" or "Copied!" depending on whether the content has been successfully copied to the clipboard or not.
contentRef (ref): A ref that should be attached to the content that needs to be copied to the clipboard. If no ref is provided, the copyToClipboard function will attempt to copy an empty string.
Usage
To use the useClipboard hook in a React component, you need to import it and call it inside the component. Here's an example:

```jsx
import React from "react";
import useClipboard from "./useClipboard";

const MyComponent = () => {
  const { copyToClipboard, copyState, contentRef } = useClipboard();

  return (
    <div>
      <p ref={contentRef}>Copy this text to clipboard</p>
      <button onClick={() => copyToClipboard()}> {copyState} </button>
    </div>
  );
};
```

In this example, the useClipboard hook is called and returns an object that contains the copyToClipboard function, the copyState string, and the contentRef ref.

The contentRef ref is attached to the p element that contains the text to be copied to the clipboard. When the copyToClipboard function is called by clicking the button element, it will attempt to copy the text contained in the contentRef ref to the clipboard. If successful, the copyState string will be updated to "Copied!".

Note that the copyToClipboard function can also take an optional string argument to copy any content to the clipboard. For example, you could call copyToClipboard("hello world") to copy the string "hello world" to the clipboard instead of the content in the contentRef ref.

## useDataAttributes
The useDataAttributes hook is a custom hook in React that allows you to observe changes to a specific data attribute of a target element and returns its value.

### Arguments
The useDataAttributes hook takes a single argument:

``dataAttribute (string):`` The name of the data attribute that you want to observe.
Return Value
The useDataAttributes hook returns an object containing the following properties:

``data (any):`` The current value of the observed data attribute. This value is initially set to an empty array, but will be updated with the new value whenever the observed data attribute changes.
Usage
To use the useDataAttributes hook in a React component, you need to import it and call it inside the component. Here's an example:

```jsx
import React from "react";
import useDataAttributes from "./useDataAttributes";

const MyComponent = () => {
  const { data } = useDataAttributes("my-data-attribute");

  return (
    <div id="my-data-attribute" data-my-data-attribute={JSON.stringify(data)}>
      ...
    </div>
  );
};
```

In this example, the useDataAttributes hook is called with the argument "my-data-attribute", which is the name of the data attribute that we want to observe. It returns an object containing the data property, which is initially an empty array.

The target element is selected using the standard getElementById function with the id equal to the dataAttribute.

The target element is then rendered with the data attribute and its value. Whenever the value of the data property changes, the data-my-data-attribute.