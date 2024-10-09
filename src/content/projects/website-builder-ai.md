---
title: AI Website Builder.
description: Integrating AI to enhance functionality of a website builder, allowing users to update copy, style etc using natural
  language commands or adding screenshots.
publishDate: "September 15 2024"
isFeatured: true
seo:
  image:
    src: "/images/projects/ai-website-builder/website-builder.png"
    alt: AI website builder
---

<img src="/images/projects/ai-website-builder/website-builder-empty.png" alt="website builder" />

# Building a Drag-and-Drop Website Builder with AI Integration

Imagine having a tool that allows you to build a website effortlessly, where you can simply drag and drop elements into place,
customize them with precision, and preview your creation across devices—all without writing a single line of code. The goal
was to build a solution close to this.

## Key Features of the Website Builder

- **Drag-and-Drop elements**:
  Users can drag elements like text boxes, images, links, or columns onto the page, positioning them effortlessly with a few clicks.
  
- **Customizable elements**:
  Once an element is placed, users can modify it to fit their vision. Whether it’s tweaking the text, adjusting the layout,
  or changing the style, the builder allows for both quick edits and fine-tuned customization.

- **Support for multiple elements**: The tool currently supports various elements like text, containers, columns, links, and images.
  It’s built in a way that we can easily extend the list of supported elements in the future.

- **Granular style control**:
  Users can manually customize the styles, giving them complete control over how each part of the website looks and behaves.

- **Undo/Redo functionality**: 
  The builder supports undo and redo operations, as the user makes changes to the design.

## Integrating AI in the workflow:

Here’s where things get exciting! While the current user flow allows users to manually edit their elements—like adjusting text or
fixing typos—we’re introducing AI to automate some of these tasks. By leveraging large language models, we’re turning everyday tasks
into seamless, natural-language-driven experiences.

- **Natural language commands**:
  Imagine adding text to a webpage and asking the AI to translate it, change its tone, or even rewrite
  the copy entirely—all by typing out a simple command. Instead of manually updating elements, users can let AI handle it, saving time and effort.

- **Granular AI control**:
  The AI doesn’t just make broad changes; users can apply edits at the element level, meaning that specific sections of the website can be
  customized based on unique user commands.

## What AI Can Do Right Now

- **Text translation & editing**:
  The AI can translate text, change its tone, or even rewrite content altogether—all without ever leaving the builder.

- **Styling text using natural language**:
  Need the text to be bold or red? Just ask. Users can instruct the AI to style elements in real-time, whether it’s changing colors,
  adding emphasis, or tweaking alignment. This is powered by the `Gemini 1.5 Flash` language model, which understands commands like "make this text bold" or "turn this text red."

- **Styling using screenshots**:
  The `Gemini 1.5 Flash` model supports text and image input. The user can provide screenshot of an element's design and instruct the AI to
  make the element look like the image. Currently in this version simpler designs are supported.

## Demo
Try the live demo at [https://websitebuilderx.vercel.app](https://websitebuilderx.vercel.app).

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="https://www.loom.com/embed/faee8e376beb40fba632533cd5bb4c22?sid=b5bef9b3-2b9c-47dc-99de-fd1a99c21a4b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

[Youtube video](https://youtu.be/bBC1yFSy3m4)

This is just an brief introduction to the tool, I will be writing about it in details in the upcoming posts.

Do check out the demo, I’d love to hear your feedback.
