1. The difference between getElementById, getElementsByClassName, querySelector and querySelectorAll is their method of return.
getElementById returns a single element with a unique ID. getElementsByClassName returns a HTML collection of all elements with specific class name. quarySelector returns  only first element and quarySelectorAll returns all elements which are matched.

2. I create a new element by using document.createElement("tag") and  insert a new element by using appendChild().

3. Event Bubbling is an event on a child element first runs on the child , then bubbles up to its parent elements sequentially. it works like, when an event happens on a child element, the browser first triggers the handler on that exact element. Then step by step the event automatically travels upward through its parent all the way up to document unless it's stopped.

4. Event Delegation is a technique that uses event bubbling to handle events more efficiently. instead of attaching individual listeners to many child elements we attach one listener to their parent and determine the event target using event.target.
It is useful because it improves performance , works for dynamically added child elements and code is cleaner and easier to maintain.

5. The difference between preventDefault() and stopPropagation() methods is beloow:
preventDefault() stops the browser's default action for the event and stopPropagation() stops the event from bubbling up to parent elements.