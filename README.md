## Making a plan

1) Make a drawing of your app. Simple "wireframes"
Grid, 9 rows, articles interspersed with images, large text header and button at the bottom

2) Once you have a drawing, name the HTML elements you'll need to realize your vision
Header
Articles
Images
Button
Results area

3) For each HTML element ask: Why do I need this?
Button to initiate state
Results area to inject results

4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
html button, javascript functions (if)

5) Is there some state we need to initialize?
Correct Answers count

6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
On click, button records correct answers

7) Think about how to validate each of your steps
console log: correctAnswers
