# React Router v6 & Tailwind CSS Project

A sleek, responsive React application built to master routing using **React Router DOM v6**. This project demonstrates how to build a multi-page application with a persistent layout, dynamic routing, and optimized data fetching.

## 🚀 Features

* **Advanced Routing:** Built using `createBrowserRouter` and `RouterProvider` for modern React routing.
* **Persistent Layouts:** Uses `<Outlet />` to keep the Header and Footer pinned while swapping out page content.
* **Dynamic Routes:** Extracts URL parameters (e.g., `/user/:userid`) to render dynamic user pages.
* **Optimized Data Fetching:** Utilizes React Router's `useLoaderData` and `loader` functions to fetch GitHub API data *before* the component even renders, eliminating loading states.
* **Responsive Design:** Fully styled from scratch using **Tailwind CSS**.

## 🛠️ Tech Stack

* **React** (Bootstrapped with Vite)
* **React Router DOM** (v6+)
* **Tailwind CSS**
* **GitHub REST API**

## 🧠 Concepts Learned / Practiced

1. Setting up a Router Provider and creating routes from elements.
2. Using `Link` and `NavLink` instead of `<a>` tags to prevent page reloads.
3. Catching 404 errors and understanding routing limits.
4. Replacing `useEffect` with React Router `loaders` for API calls.