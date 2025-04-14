# useState Practice Project

## Objective

The goal of this project is to practice using the `useState` hook in React to manage form input values. Your task is to add state in the component in the example folder, so the user can enter values into the fields and see 

## Hints

1.  **Import `useState`:** Import the `useState` hook from React.
2.  **Create state variables:** For each input field (name, email, password), create a separate state variable using `useState`.
3.  **Connect state variables to input fields:** Connect each state variable to its corresponding input field using the `value` and `onChange` attributes.
4.  **Handle form submission:** Include these state values in the 

## Example

Refer to the `/completed/src/App.js` file for a completed example.

## Refactor

If you implemented this with three separate state variables, refactor it to use one that is an object with three properties. You'll probably find the [spread operator](https://www.w3schools.com/react/react_es6_spread.asp) useful. If you already solved this with an object, then refactor it to use multiple state variables. One solution to this is shown in `completed/src/App2.js`. 

Generally, combining state in one object is good for related data that you work with simultaneously, like a form. 

