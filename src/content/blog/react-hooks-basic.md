---
title: A Guide to Essential React Hooks useState, useEffect, and useRef
excerpt: Understand the fundamentals of React's useState, useEffect, and useRef hooks with practical examples.
publishDate: "November 10 2024"
tags:
  - react
  - javascript
  - html5
seo:
  image:
    src: "/images/react-hooks-basic/react-hooks-basic.svg"
    alt: Basic react hooks
---

React's hooks API allows functional components to manage state, handle side effects, and interact with the DOM more effectively. Three of the most commonly used hooks `useState`, `useEffect`, and `useRef` are essential tools in any React developer's toolkit. In this guide, we will explore each of these hooks, explaining how they work and providing examples to demonstrate their practical use.

<img src="/images/react-hooks-basic/react-hooks-basic.svg" alt="basic react hooks" />

### 1. `useState`: Managing component state

`useState` lets you add and manage state within functional components. Instead of defining state in a class, `useState` provides a simpler way to declare state variables directly within the component function.

#### Basic syntax

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, `count` is a state variable initialized to `0`, and `setCount` is a function to update `count`. Each button click increments the count, causing the component to re-render with the updated value.

### 2. `useEffect`: Handling side effects

`useEffect` is useful for managing side effects like data fetching, manual DOM manipulation, or setting up subscriptions. It runs after the component renders and whenever its dependencies change.

#### Basic syntax

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty array to run effect only on mount

  return <p>Timer: {seconds} seconds</p>;
}
```

Here, `useEffect` sets up an interval timer when the component mounts and cleans it up when the component unmounts. The empty array as the second argument ensures the effect runs only once on mount.

### 3. `useRef`: Accessing DOM elements and persisting value

`useRef` creates a reference to DOM elements or mutable values that persist across renders. It doesn’t trigger re-renders, making it ideal for cases like managing focus, holding mutable values, or integrating with third-party libraries.

#### Basic syntax

```javascript
import React, { useRef } from 'react';

function TextInputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

In this example, `inputRef` stores a reference to the input element, allowing us to focus it directly with the `focusInput` function.

### Practical use cases for each hook:
1. `useState`: Managing state at component level.
2. `useEffect`: Managing side effects like fetching data, adding subscriptions and event listeners.
3. `useRef`: Storing references to DOM elements or values across renders without trigerring re-renders.