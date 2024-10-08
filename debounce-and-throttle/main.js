/*
    onClick = have the counter for button pressed 
    and have the counter for triggered times. 

    How the counter will be incremented ?
     - pressedCount: incremented with every press
     - triggerCount: incremented with every debounce

*/

const DEBOUNCE_BUTTON_PRESSED = document.querySelector('#clickCount');
const DEBOUNCE_ACTION_TRIGGERED = document.querySelector('#debounceCount');
const DEBOUNCE_BUTTON = document.querySelector('#debounceButton');

let debounceBtnPressedCount = 0;
let debounceBtnTriggerCount = 0;

DEBOUNCE_BUTTON.addEventListener('click', () => {
    DEBOUNCE_BUTTON_PRESSED.innerHTML = `Debounce Button Pressed ${++debounceBtnPressedCount} Times`;
    debounceCount();
})

const debounceCount = myDebounce(() => {
    DEBOUNCE_ACTION_TRIGGERED.innerHTML = `Debounce button triggered ${++debounceBtnTriggerCount} Times`
}, 800)

function myDebounce(cb, delay) {
    let timeOutId;
    return function(...args) {
        if(timeOutId) {
            clearTimeout(timeOutId);
        }
        
        timeOutId = setTimeout(() => {
                        cb(args);
                    }, delay)
    }
}

/**
 *  Increment the button press and throttle count
 * 
 *  How to increment click count and throttle count?
 *   - clickCount = with every button click
 *   - throttleCount = with every throttle 
 * 
 */


const THROTTLE_BUTTON_PRESSED = document.querySelector('#throttleButtonPressed');
const THROTTLE_ACTION_TRIGGERED = document.querySelector("#throttleActionTriggered");
const THROTTLE_BUTTON = document.querySelector('#throttleButton');

let throttleBtnClickCount = 0;
let throttleBtnTriggerCount = 0;

THROTTLE_BUTTON.addEventListener('click', () => {
    THROTTLE_BUTTON_PRESSED.innerHTML = `Throttle Button Pressed ${++throttleBtnClickCount} Times`;
    callThrottleCount();
})

let callThrottleCount = myThrottle(() => {
    THROTTLE_ACTION_TRIGGERED.innerHTML = `Throttle Button Triggered ${++throttleBtnTriggerCount} Times`;
}, 1000)

function myThrottle(cb, delay) {
    let isThrottle = false;
    return function() {
        if(!isThrottle) {
            isThrottle = true;
            cb()
            setTimeout(() => {
                isThrottle = false;
            }, delay)
        }
    }
}