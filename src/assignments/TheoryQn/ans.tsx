import React from 'react'
import NavBar from '../../components/navBar/NavBar'
const Ans = () => {
  return (
    <>
    <NavBar />
    <div className='container l'>
        <h3>Day1</h3>
        <p>-That we can directly read from React official Document</p>
        <a  href='https://reactjs.org/docs/hello-world.html'>Link</a>
    </div>

    <div className='container l'>
         <h3>Day2</h3>
         <ol>
            <li className='l'>JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</li>
            <li className='l'>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders</li>
            <li className='l'>Props are arguments passed into React components, We use props in React to pass data from one component to another from parent to child</li>
            <li className='l'>Class based components- These components are simple classes (made up of multiple functions that add functionality to the application)</li>
            <li className='l'>Functional based components-A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</li>
            <li className='l'>Virtual Dom - The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation and the algorithm is diffing algorithm.</li>
            <li className='l'>Both JS and JSX are interchangeable but JSX makes the code easier to understand for users. JSX is popularly used in React, as it makes the job of building an application much easier. If you are using Js then you have to use DOM manuplation and inbuilt JS methods which could be quite complicated</li>
            <li className='l'>It's a syntax extension that allows HTML with JavaScript mixed together. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.</li>
            <li className='l'>Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.</li>
            <li className='l'>JSX is not a valid JavaScript as they are embedded in HTML elements. As JSX is combination of HTML and JavaScript it is not supported by Browsers. Therefore browser would not compile the code and would give errors</li>
            <li className='l'>State is reactJs objects which contains data about component like vatriables, consts, and every other informations</li>
            <li className='l'>Yes, you can. But, you need to face the following consequences.
            <ul>
                <li>Instead of using React, you'll be writing custom codes over React.</li>
                <li>your app will behave abnormal or even crash</li>
                <li>You'll lose control of state across components.</li>
                <li>Instead of using React, you'll be writing custom codes over React.</li>
            </ul>
            </li>
            <li className='l'>Either by using setState function in class based components or by using hooks</li>
            <li className='l'>Props are immutable,a component is not allowed to change its props, it is responsible for the props of its child components down the component tree</li>
            <li className='l'>props can be any JavaScript data type from integers over objects to arrays. Functions too</li>
         </ol>
    </div>
    <div className='className l'>
        <h3>Day3</h3>
        <p>Component with various types of input fields</p>

        <div>
        <label>Text :</label>
        <input type='text' />
        </div>

        <div>
        <label>file :</label>
        <input type='file' />
        </div> 

        <div>
        <label>Date :</label>
        <input type="date" />
        </div>
        
         <div>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>   
      </select>
        </div>

        <div>
        <input type='radio' name='same'/>
        <input type='radio' name='same'/>
        <input type='radio' name='same'/>
        </div>

        <div>
        <label htmlFor="points">Points (between 0 and 10):</label>
        <input type="range" id="points" name="points" min="0" max="10" />
        </div>

        <div>
            <label>Email :</label>
            <input type='email' />
        </div>
        
        <div>
            <label>Password :</label>
            <input type='password' />
        </div>
        
        
    </div>
    
    </>
  )
}

export default Ans;