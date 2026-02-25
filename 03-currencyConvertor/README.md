# 💱 React Currency Converter

A dynamic, real-time currency converter application built with React and Tailwind CSS. This project demonstrates how to fetch live data from an external API, manage complex state across multiple components, and build reusable UI elements.

## ✨ Features
* **Real-Time Exchange Rates:** Fetches live currency data using the `@fawazahmed0/currency-api`.
* **Custom React Hook:** Implements a custom `useCurrencyInfo` hook to separate the API fetching logic from the UI components.
* **Reusable UI Components:** Utilizes a highly reusable `InputBox` component for both the "From" and "To" input fields.
* **Currency Swap:** A convenient swap button to instantly reverse the conversion direction.
* **Responsive Design:** Styled with Tailwind CSS for a clean, modern, and fully responsive glassmorphism interface.

## 🛠️ Tech Stack
* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **API Integration:** Fetch API

## 🧠 What I Learned
Building this project was a great exercise in advancing my React skills, specifically focusing on:
1.  **Custom Hooks:** Abstracting the `useEffect` and `fetch` logic into a dedicated `useCurrencyInfo` hook made the main `App.jsx` much cleaner and easier to read.
2.  **Prop Drilling & Event Handling:** Successfully passing state, currency options, and state-updating functions (like `onAmountChange` and `onCurrencyChange`) down to child components and ensuring they communicate perfectly.
3.  **Data Handling:** Safely mapping over API data dynamically to generate dropdown menus and handling edge cases like empty inputs or delayed API responses.
