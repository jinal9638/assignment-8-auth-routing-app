# Multi-Page Authentication App – Routing, Protected Navigation & Testing

A robust, multi-page React application built with **React Router v6**, **Context API** for global state management and persistent user authentication, and comprehensive unit/integration testing using **React Testing Library** and **Jest**.

---

## Live Demo & Repository

* **Live Deployment:** []
* **GitHub Repository:** []

---

## Project Overview & Objectives

This project implements industry-standard architecture for a modern web application:
1. **Client-Side Routing:** Dynamic parameter extraction, active link state feedback, nested routes, and fallback 404 pages using `react-router-dom`.
2. **Global Authentication Flow:** Centralized user authentication managed via `AuthContext` with client-side form validation and session persistence via `localStorage`.
3. **Protected Route Navigation:** Conditional access guard components that preserve navigation intent and redirect unauthenticated users to the Login route.
4. **Comprehensive Component & Integration Testing:** Unit tests for interactive components and end-to-end authentication flow simulations using React Testing Library.

---

## Tech Stack & Key Libraries

* **Frontend Library:** React 18
* **Routing:** React Router v6 (`BrowserRouter`, `Routes`, `Route`, `Navigate`, `NavLink`, `useParams`)
* **State Management:** React Context API (`createContext`, `useContext`)
* **Testing Framework:** Jest & React Testing Library (`@testing-library/react`, `@testing-library/user-event`)
* **Build System:** `react-scripts` (Create React App configuration)

---

## Project Folder Structure

Auth_Routing_App_Jinal/
├── package.json
├── README.md
├── screenshots/               # Application UI screenshots (Desktop, Tablet, Mobile)
└── src/
    ├── components/
    │   ├── Counter.js         # Interactive counter component (Part C requirement)
    │   ├── Navbar.js          # Navigation bar with dynamic active routes and logout trigger
    │   └── ProtectedRoute.js  # Access guard wrapper for authenticated routes
    ├── context/
    │   └── AuthContext.js     # Global auth state manager (login, signup, logout, persistence)
    ├── pages/
    │   ├── About.js           # Public about page
    │   ├── Dashboard.js       # Protected user dashboard
    │   ├── Home.js            # Home landing page with counter demo
    │   ├── Login.js           # Validated authentication form
    │   ├── NotFound.js        # Fallback 404 page
    │   ├── OrderDetails.js    # Dynamic route displaying order params (/order/:orderId)
    │   ├── Profile.js         # Dynamic route displaying user profile params (/profile/:userId)
    │   └── Signup.js          # Registration form with password match validation
    ├── tests/
    │   ├── AuthFlow.test.js   # Asynchronous authentication flow & context integration tests
    │   ├── Counter.test.js    # Unit tests for button events and state boundary limits
    │   └── ProtectedRoute.test.js # Access verification & redirection unit tests
    ├── App.js                 # Primary application router layout
    ├── App.css                # Fully responsive custom styling across breakpoints
    ├── App.test.js            # Layout rendering integration test
    ├── index.js               # Application entry point
    └── setupTests.js          # Jest configuration & log suppression setup