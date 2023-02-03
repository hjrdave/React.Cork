/**This hook was generated by ChatGBT with some tweaks */

import React, { useState, useEffect, CSSProperties } from "react";

type AnimationType = "fadeIn" | "translate" | "scale";

interface Options {
    type: AnimationType;
    delay?: number;
    duration?: number;
    style?: CSSProperties;
    disabled?: boolean;
}

const useAnimate = ({ type, delay = 0, duration = 1, style, disabled }: Options) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (!disabled) {
            const timeoutId = setTimeout(() => setAnimate(true), delay * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, []);

    let animation: CSSProperties = {};
    const animateTypes = {
        ["fadeIn"]: {
            opacity: 1,
            transition: `opacity ${duration}s`,
        },
        ["translate"]: {
            transform: "translate(0, 0)",
            transition: `transform ${duration}s`,
        },
        ["scale"]: {
            transform: "scale(1)",
            transition: `transform ${duration}s`,
        }
    }
    if (animate) {
        animation = animateTypes[type];
    }

    return { style: { ...style, ...animation } };
};

export default useAnimate;

//Example
/**
 import React from "react";
import useAnimate from "./useAnimate";

const MyComponent = () => {
  const { style } = useAnimate({ type: "fadeIn", delay: 2, duration: 2 });

  return <div style={style}>Hello World</div>;
};

export default MyComponent;

 */

//Docs
/**
 Documentation
useAnimate Hook
This hook takes in an AnimationProps object as an argument and returns a style object that can be applied to a React component. The animation will start after the specified delay (in seconds) and will have the specified duration (in seconds).

AnimationProps interface

interface AnimationProps {
  type: AnimationType;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
}

type: Required. Type of animation to apply. Can be one of "fadeIn", "translate", or "scale".
delay: Optional. Delay in seconds before starting the animation. Default is 0.
duration: Optional. Duration of the animation in seconds. Default is 1.
style: Optional. Additional styles to apply to the component.
Return value
useAnimate returns an object with a single property, style, which is a CSSProperties object that can be applied to a React component.

Example
Here's an example of how to use the useAnimate hook:
import React from "react";
import useAnimate from "

 */