---
title: A Beginner's Guide to CSS @property for custom variables
excerpt: Learn how to use the CSS @property at-rule to define custom properties.
publishDate: "September 15 2024"
tags:
  - css
  - html5
isFeatured: true
seo:
  image:
    src: "/images/hello-world/profile.jpg"
    alt: hello world image
---

CSS is evolving with time and newer features are getting added to it make it easier to implment most commonly used functionality. Today we will see once such feature which makes css even more powerful.

The `@property` (at-rule) allows developers to define custom properties. In this post, we'll take a look at what `@property` is, why it's useful, and how to use it with some practical examples.

### What is the @property At-Rule?

CSS custom properties (variables) have been around for a while, and they let you store and reuse values like colors, font sizes, or any other styling values. However, until recently, they lacked advanced features such as defining types, default values. This is especially useful if we want to implement complex animations (more on that in upcoming posts).

The `@property` rule represents a custom property registration directly in stylesheet without having to run any js.

### Basic syntax

```css
@property --my-custom-property {
  syntax: "<color>";
  inherits: false;
  initial-value: red;
}
```

- `syntax`: Defines the expected data type of the property. In this case, it's a color (\<color\>), but it can be any valid CSS data type like \<length\>, \<number\>, or \<percentage\>.
- `inherits`: Determines whether the property value should be inherited by child elements. It can be set to true or false.
- `initial-value`: Sets a default value for the property when none is provided.

### When to use `@property`

- When you need to animate or transition a custom property to ensure smooth behavior.
- To enforce data types (like colors, lengths, or numbers) to avoid bugs from invalid values.
- To set default values for custom properties to maintain consistent styles when values are missing.
- Control inheritance of custom properties between parent and child elements.

#### Read more

- [MDN docs `@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)
