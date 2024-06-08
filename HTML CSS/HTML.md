## HTML CSS INTERVIEW QUESTIONS AND ANSWER.

### 1. What is HTML?

HTML Stands For Hyper Text MArkup Language. It is the language for creating Web pages. HTML describes the structure of a Web page.

### 2. What is `<!DOCTYPE html>` tag and why it is used?

- The <!DOCTYPE html> declaration defines that this document is an HTML5 document
- The `<!DOCTYPE html>` declaration, introduced in HTML5, is used to indicate that the document is written in HTML5 syntax.

### 3. What is the use of head tag?

- The `<head>` tag is an essential element in HTML documents, typically placed before the `<body>` tag.
- It contains meta-information about the document, such as its title, character encoding, links to external resources like stylesheets and scripts, and other metadata that doesn't directly appear on the web page
- But is important for its proper functioning and search engine optimization.

### 4. What is BOX MODEL?

The box model is a fundamental concept in CSS that describes how elements on a web page are laid out and sized.

Imagine every HTML element as being wrapped inside an invisible box. This box consists of four parts:

1. `Content`: This is the actual content of the HTML element, such as text, images, or other elements.

2. `Padding`: Padding is the space between the content and the border of the box. It's like adding some cushioning around the content. You can think of it as the space inside the box.

3. `Border`: The border is like the edge of the box. It goes around the padding and content, separating the inside of the box from the outside.

4. `Margin`: Margin is the space outside the border. It's like the distance between this box and other nearby boxes or elements. Margin helps to create space between elements on the page.

### 5. Box-Sizing : Border-Box : Content-Box?

| Property     | `content-box`                                                                                                         | `border-box`                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Width/Height | Width/height specified applies only to the content area. Padding and border are added to the specified width/height.  | Width/height specified includes the content area, padding, and border. Padding and border are included in the specified width/height.                |
| Calculation  | Width/height = content width/height + padding + border                                                                | Width/height = specified width/height                                                                                                                |
| Example      | If width = 200px, padding = 10px, border = 2px: Total width = 200px (content) + 20px (padding) + 4px (border) = 224px | If width = 200px, padding = 10px, border = 2px: Total width = 200px (includes padding and border)                                                    |
| Usage        | Useful for maintaining consistent content size across elements. Default behavior in most browsers.                    | Useful for simplifying layout calculations, especially in responsive designs. Often used in modern web development for a more predictable box model. |

### 6. What are Replaced Inline Elements and Non-Replaced Inline Elements?

| Property                 | Replaced Inline Elements                                                                         | Non-Replaced Inline Elements                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Content                  | Generally replaced with an external resource, like an image, video, or form control.             | Contains text or other inline elements without external resources.                                                              |
| Examples                 | `<img>`, `<video>`, `<iframe>`, `<input>`, `<select>`                                            | `<span>`, `<a>`, `<strong>`, `<em>`, `<abbr>`, `<code>`, `<b>`, `<i>`, `<u>`, `<sup>`, `<sub>`, `<strike>`, `<small>`, `<font>` |
| Size                     | The size of the replaced content is determined by its intrinsic dimensions or by CSS properties. | The size of the content is based on its text content or CSS properties.                                                         |
| Layout                   | May affect line height and spacing depending on its size.                                        | Generally doesn't affect line height or spacing.                                                                                |
| Interaction              | Often interactive, such as clickable images or form controls.                                    | Usually not interactive by default, but can be styled to be interactive.                                                        |
| Accessibility            | Must be provided with alternative text for accessibility purposes, using the `alt` attribute.    | Accessibility can be enhanced through semantic markup and proper use of ARIA attributes.                                        |
| Rendering Considerations | Replaced elements may have a fixed aspect ratio.                                                 | Non-replaced elements flow inline with text and other elements.                                                                 |

### 7. What are Difference between Block Level Elements and inline Elements?

| Property          | Block-level Elements                                                                               | Inline Elements                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Display Behavior  | Starts on a new line and takes up the full width available, pushing subsequent elements downwards. | Flows within the content, allowing other elements to sit beside them.                                                           |
| Examples          | `<div>`, `<p>`, `<header>`, `<nav>`, `<section>`, `<footer>`, `<ul>`, `<li>`, `<h1>` to `<h6>`.    | `<span>`, `<a>`, `<strong>`, `<em>`, `<abbr>`, `<code>`, `<b>`, `<i>`, `<u>`, `<sup>`, `<sub>`, `<strike>`, `<small>`, `<font>` |
| Nesting           | Can contain other block-level and inline elements.                                                 | Can contain other inline elements but not block-level elements.                                                                 |
| Width/Height      | Can have both width and height specified.                                                          | Typically only takes up as much width and height as necessary for its content.                                                  |
| Margins & Padding | Can have margins and padding applied on all four sides.                                            | Margins and padding are typically applied horizontally, not affecting vertical layout.                                          |
| Layout            | Often used for major structural elements of a webpage.                                             | Often used for smaller elements within the content flow.                                                                        |
| Example Usage     | Main content sections, headers, footers, and navigation menus.                                     | Styling text, creating links, highlighting phrases, and applying inline styles.                                                 |
| Default Behavior  | Typically stacks vertically, with each element starting on a new line.                             | Flows horizontally within its containing element.                                                                               |

### 8. What are Difference between Async vs Defer Attributes?

| Attribute    | Async                                                                                     | Defer                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Loading      | Executes script asynchronously while HTML parsing continues.                              | Defers script execution until the HTML parsing is complete.                                                 |
| Execution    | Executes as soon as the script is downloaded, even if parsing is not finished.            | Executes after HTML parsing is complete, but before `DOMContentLoaded` event.                               |
| Order        | May execute out of order in relation to other scripts and the DOM.                        | Maintains the order of script execution as they appear in the document.                                     |
| Dependencies | Not suitable for scripts that depend on the DOM or other scripts.                         | Suitable for scripts that depend on the DOM, as they execute after parsing.                                 |
| Usage        | Recommended for non-blocking, independent scripts, such as analytics or tracking scripts. | Recommended for scripts that need access to the DOM or rely on other scripts, but should not block parsing. |

### 9. What are Difference between innerHTML vs textContent ?

| Property    | innerHTML                                                                                                  | textContent                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Content     | Parses content as HTML, allowing for HTML markup and tags.                                                 | Treats content as plain text, ignoring HTML markup and tags.                           |
| Setting     | Completely replaces the content of the element with new HTML markup.                                       | Replaces the text content of the element with the specified text.                      |
| Getting     | Returns the HTML content of the element as a string.                                                       | Returns the text content of the element as a string.                                   |
| Performance | May cause re-parsing of HTML and re-rendering of the entire element and its descendants.                   | Generally faster and more efficient, as it doesn't involve HTML parsing and rendering. |
| Security    | Vulnerable to cross-site scripting (XSS) attacks if used with untrusted data.                              | Safer to use with untrusted data, as it does not interpret HTML.                       |
| Use Cases   | Suitable for dynamically generating and inserting HTML content, such as from user input or AJAX responses. | Suitable for manipulating text content or updating textual information on a webpage.   |

### 10. Why Do we use 'alt' attribute in img tag ?

- The alt attribute specifies an alternate text for an image, if the image cannot be displayed.
- The alt attribute provides alternative information for an image if a user for some reason cannot view it.
- Because of slow connection, an error in the src attribute, or if the user uses a screen reader.

### 11. What are Semantic tags ?

- `Semantic elements = elements with a meaning.`
- A semantic element clearly describes its meaning to both the browser and the developer.

### 12. What are Semantic tags ?

To embed a YouTube video in an HTML document, you can use the `<iframe> `element. Here are the steps to do it:

1. Find the Video on YouTube:
   Go to the YouTube video you want to embed.

2. Get the Embed Code:

- Click on the "Share" button below the video.
- Click on the "Embed" option. A box will appear with the embed code.
- Copy the entire iframe code provided in the box.

3. Embed in HTML:
   Paste the copied code into your HTML document where you want the video to appear.

### 13. What are Difference between `div` and `span` tags ?

| Property/Feature | `<div>`                                            | `<span>`                                           |
|------------------|----------------------------------------------------|----------------------------------------------------|
| Display Type     | Block-level element                                | Inline element                                    |
| Usage            | Used for grouping and structuring larger sections of content | Used for styling or grouping smaller parts of text or inline content |
| Layout Behavior  | Starts on a new line and takes up the full width available | Flows within the content, allowing other elements to sit beside it |
| Common Uses      | Wrapping sections, creating layout structures, applying CSS styles to blocks of content | Styling parts of text, applying CSS styles to small parts of content, wrapping text for JavaScript manipulation |
| CSS Styling      | Can have width, height, margin, and padding specified, affects layout | Generally styled with font, color, and other text-related properties, does not affect layout significantly |
| Nesting          | Can contain block-level and inline elements       | Can only contain inline elements or text           |
| Example          | `<div class="container">Content here</div>`       | `<span class="highlight">Highlighted text</span>`  |
 
### 13. What are Difference between `margin` and `padding` ?

| Property        | Margin                                          | Padding                                         |
|-----------------|-------------------------------------------------|-------------------------------------------------|
| Definition      | The space outside an element's border.          | The space inside an element's border, around the content. |
| Location        | Surrounds the border of an element.             | Lies between the content and the border of an element. |
| Effect on Layout| Creates space between the element and other elements. | Increases the space within the element, pushing the content inward. |
| Background Color| Does not include the element's background color or other styles. | Includes the element's background color and styles. |
| Collapsing      | Margins can collapse, meaning the adjoining margins of two elements may combine into a single margin. | Padding does not collapse; it always remains as specified. |
| Influence       | Can influence the layout by pushing other elements away. | Does not influence the position of other elements but increases the size of the element. |
| CSS Properties  | `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `margin` | `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `padding` |
| Shorthand       | `margin: 10px 15px 10px 15px;` (top, right, bottom, left) | `padding: 10px 15px 10px 15px;` (top, right, bottom, left) |
| Negative Values | Can be set to negative values to pull elements closer together. | Cannot be set to negative values; must be zero or positive. |

### 14. Why Does Scrollbar occurs ?
- A scrollbar appears when a child element's content exceeds the dimensions (width and/or height) of its parent container. 
 
### 15. What is Specificity
- If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

- Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.