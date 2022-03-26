import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1 className='mb-4'>Questions</h1>
            <h3>1. How react works?</h3>
            <p>React is a JavaScript library that allows user to create interactive web pages. React maintain a tree under the hood. This tree is called Virtual Dom. Normally, when user make changes to the DOM, and browser has to re-render each and every elements on the page. Thinking of scale, A app would have multiple state changes. So browser unnecessary cycling to complete the DOM whereas a single element's state has changed. That's why react has Virtual DOM. In React when user changes some state, React compare those changes with it's virtual dom and update the real dom.</p>

            <h3>2. What is the difference between props and state?</h3>
            <p>Props are the properties that are passed to the component. State is the data that is stored in the component. Props are immutable. State is mutable. Props are read-only. State can be modified. Props can accessed by child component. But state can not accessed by child component. Props are used to communicate between components. States can used for rendering dynamic changes. Props can change in child component. But state can not change in child component.</p>
        </div>
    );
};

export default Questions;