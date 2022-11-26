import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* Question 1 */}
            <div className='p-10 '>
                <div className='text-xl font-bold bg-neutral text-white p-3'>
                    <h1>What are the different ways to manage a state in a React application?</h1>
                </div>
                <div className='bg-base-200 p-8 text-lg'>
                    React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. <br />

                    React state management is basically half of a React app. It includes all the data. The other half is the presentation including the HTML, CSS, and formatting. State and state management is relied on by presentation part of the app. The only time a React app will re-rendered is when state changes. <br />
                    In React apps, there are several ways to handle the state.We can use URL to store some data.React Router is a great tool to handle routes and manage the params.
                    The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                    The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc. <br />
                    The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components and the fifth option is to compute the new state based on the available state and we do not need to declare a state at all.
                </div>

            </div>
            <div className='p-10 mb-3'>
                <div className='text-xl font-bold bg-neutral text-white p-3'>
                    <h1> How does prototypical inheritance work?</h1>
                </div>
                <div className='bg-base-200 p-8 text-lg'>
                    Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. <br />
                    There are several ways to specify the Prototype of an object, which are listed in a later section. For now, we will use the __proto__ syntax for illustration. It's worth noting that the __proto__: ... syntax is different from the obj.__proto__ accessor: the former is standard and not deprecated.

                    In an object literal like a: 1, b: 2, __proto__: c, the value c (which has to be either null or another object) will become the Prototype of the object represented by the literal, while the other keys like a and b will become the own properties of the object. This syntax reads very naturally, since Prototype is just an "internal property" of the object.
                </div>

            </div>
            <div className='p-10 mb-3'>
                <div className='text-xl font-bold bg-neutral text-white p-3'>
                    <h1> What is a unit test? Why should we write unit tests?</h1>
                </div>
                <div className='bg-base-200 p-8 text-lg'>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br />
                    A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. <br />

                    Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.
                </div>

            </div>
            <div className='p-10 mb-3'>
                <div className='text-xl font-bold bg-neutral text-white p-3'>
                    <h1> 4 React vs. Angular vs. Vue?</h1>
                </div>
                <div className='bg-base-200 p-8 text-lg'>
                    Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. <br />
                    Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You. <br />
                    Vue JS is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object. Vue has two-way binding and uses a virtual DOM. <br />

                    However, All three have their perks- Angular is robust and time-tested, React is flexible and quick, Vue is simple and high-performing.
                </div>

            </div>
        </div>
    );
};

export default Blogs;