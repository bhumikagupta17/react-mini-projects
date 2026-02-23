# 🔐 Mini-Project 02: Password Generator

A quick, interactive password generator built to practice state management and optimization hooks in React. 

## 🎯 Project Goal
The main focus of this mini-project was to learn how to manage multiple pieces of state (length, numbers, special characters) and trigger side-effects automatically while keeping the app performant.

## ✨ What it does
* Generates a random password instantly whenever a user changes the slider or toggles a checkbox.
* Allows custom password lengths from 6 to 100 characters.
* Includes a fully functional "Copy to Clipboard" feature that visually selects the text.
* Styled rapidly using Tailwind CSS.

## 🧠 React Concepts Practiced

This project heavily relies on four core React Hooks:

* **`useState`**: Used to track the password length, whether numbers/characters are allowed, and the final generated password string.
* **`useCallback`**: Used to wrap the `passwordGenerator` and `copyPasswordtoClipboard` functions. This memoizes (caches) the functions so they don't get recreated on every single render, optimizing performance.
* **`useEffect`**: Listens for changes to the length, number toggle, or character toggle. Whenever one of those changes, it automatically fires the `passwordGenerator` function to update the UI.
* **`useRef`**: Used to grab a direct reference to the `<input>` element. When the copy button is clicked, this allows the app to programmatically highlight (select) the text inside the input field for better user feedback.
