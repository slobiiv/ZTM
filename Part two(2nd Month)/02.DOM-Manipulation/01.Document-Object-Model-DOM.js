/* 
By adding JavaScript to our web pages we now have the power that we never had with HTML and CSS:
  - Change all the HTML elements in the page,
  - Change all the HTML attributes in the page, 
  - Change all the CSS styles on the page,
  - Remove existing HTML elements and attributes, 
  - Add new HTML elements and attributes 
  - JavaScript can also react to existing HTML events in the page 
  - JavaScript can create its own HTML events on the page.
*/

/* Parent od document is window */

/* 
A web browser has a window object that has a property 'document', that specifies what should get displayed.
To decide what to get displayed the document object model reads the HTML and CSS and then JavaScript that is read
line by line by something like a JavaScript engine -In Google Chrome that's the V-8 engine - reads through it.
And if it ever needs to change anything, JavaScript can speak with the DOM and modify the HTML and CSS.
*/