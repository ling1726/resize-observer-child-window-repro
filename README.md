# Child window and iframe Resize observer repro

This repository hosts two examples of Resize Observer usage in different frame contexts.
Examples are all implemented using vanilla javascript and HTML.

## Usage

1. Install nodejs - https://nodejs.org/en/download
2. Clone the repository
3. In each directory run `npm install`
4. In each directory run `npm run dev`
5. Visit deployed pages 

## Iframe

This example renders a resizable div in the iframe. The resizable div is observed by a ResizeObserver
created in the parent window.

### Expected Result

The ResizeObserver triggers its callback when the div inside the iframe is resized

### Actual Result

The same as the expected result

## Child window

This example renders a resizable div in the iframe. The resizable div is observed by a ResizeObserver
created in the parent window.

### Expected Result
The ResizeObserver triggers its callback when the div inside the child window is resized

### Actual Result
The ResizeObserver is triggered initially, but does not trigger again when the div inside the child window is resized