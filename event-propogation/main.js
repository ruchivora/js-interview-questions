/**
 * 1. What is event propogation?
 *  - It is a js concept, which determines how
 *    the events are passed across the DOM when 
 *    triggered.
 * 
 * 2. What is event bubbling? 
 *  - When an event is triggered then the event 
 *    is executed for the target element and then
 *    its propogated up the DOM tree.
 * 
 * 3. What is event trickling/capturing?
 *  - It's the process where the event triggered 
 *    is propogated from the parent to the target
 *    element. It's propogated down the DOM tree.
 * 
 * 4. What is the default form event propogation?
 *  - The default is event bubbling
 * 
 * 5. What is the difference between event.target Vs 
 *    event.currentTarget Vs this.tagName ?
 *  - event.target: gives the element where the event was
 *                  originally triggered.
 * 
 *    event.currentElement: gives the element where the event
 *                          is currently present while propogating
 *    
 *    this.tagName: This is same as event.currentElement
 * 
 */

/* Event Bubbling */

document.querySelector('.button').addEventListener('click', () => {
    alert("From Button Click");
})

document.querySelector('.child-div').addEventListener('click', () => {
    alert('From Child Div');
})

document.querySelector('.parent-div').addEventListener('click', ()=> {
    alert('From Parent Div');
})

/* Event Trickling/Capturing */

document.querySelector('.parent-div-1').addEventListener('click', () => {
    alert('From Parent Div')
}, {
    capture: true
})

document.querySelector('.child-div-1').addEventListener('click', () => {
    alert('From Child Div')
}, {
    capture: true
})

document.querySelector('.button-1').addEventListener('click', () => {
    alert("From Button Click")
}, {
    capture: true
})

/* Event.target Vs Event.CurrentTarget Vs this.TagName */

document.querySelector('.parent-div-11').addEventListener('click', func)

document.querySelector('.child-div-11').addEventListener('click', func)

document.querySelector('.button-11').addEventListener('click', func)

function func(event) {
    alert('target' + event.target.tagName + ' currentTarget' + event.currentTarget.tagName + ' tagName' + this.tagName)
}


/** Stop event Bubbling */

document.querySelector('.button-12').addEventListener('click', (event) => {
    alert("From Button Click");
    event.stopPropagation();
})

document.querySelector('.child-div-12').addEventListener('click', (event) => {
    alert('From Child Div');
    event.stopPropagation()
})

document.querySelector('.parent-div-12').addEventListener('click', (event) => {
    alert('From Parent Div');
    event.stopPropagation()
})

/* Event Delegation */
document.querySelector('.parent-container').addEventListener('click', (event) => { 
    alert('clicked on ' + event.target.className)
})


/** modal open*/

document.querySelector('.modal-btn').addEventListener('click', () => {
    document.querySelector('.modal-container').style.display = 'block'
})

document.querySelector('.modal').addEventListener('click', () => {
    document.querySelector('.modal-container').style.display = 'none'
})



