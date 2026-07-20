# Portfolio — React + Vite + Tailwind

This is a personal portfolio project built using React, Vite, and Tailwind CSS. It uses React Router for navigation between multiple pages, while the Navbar, Hero, and Footer components remain shared across the application.

## Project Structure

```text
src/
  components/
    Navbar.jsx     -> Common navigation bar for all pages
    Hero.jsx       -> Shared Hero component (Full version on Home, Compact version on inner pages)
    Footer.jsx     -> Common footer for all pages
    Layout.jsx     -> Wraps Navbar + Footer + page content using Outlet
  pages/
    Home.jsx
    About.jsx
    Education.jsx
    Projects.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx          -> Defines all application routes
  main.jsx         -> Application entry point (BrowserRouter)
```

## Getting Started

1. Open the project folder in Visual Studio Code.
2. Install the project dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the application in your browser:

```
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

## Features

- Multi-page navigation using React Router.
- Shared Navbar, Hero, and Footer components.
- Smooth page transitions without page reloads.
- Responsive design built with Tailwind CSS.
- Easy customization of colors, fonts, and design tokens through `tailwind.config.js`.
- Placeholder images can be replaced with your own photos and assets.

## Dark / Light Mode

- A theme toggle button (Sun/Moon icon) is available in the top-right corner of the Navbar.
- The selected theme is saved in `localStorage`, so it remains the same after refreshing or reopening the website.
- On the first visit, the application follows the system's preferred color scheme (`prefers-color-scheme`). If no preference is detected, Dark Mode is used by default.
- Theme logic is implemented in `src/components/Navbar.jsx`, while the color variables are defined in `src/index.css`.

## Resume Download

- A **Download Resume** button is available in both the Navbar and the Home page Hero section.
- The sample resume file is located at:

```
public/Prince_Sharma_Resume.pdf
```

Replace this file with your own resume while keeping the same filename, or update the button's `href` accordingly.

## Backend Integration (Contact Form + PostgreSQL)

The Contact page is connected to a Node.js + Express + PostgreSQL backend located inside the `backend/` folder.

### Setup Instructions

1. Navigate to the backend folder:

```bash
cd backend
```

2. Follow the instructions in `backend/README.md` to:
   - Install dependencies
   - Configure PostgreSQL
   - Create the `.env` file
   - Start the backend server

3. In the frontend project, copy:

```
.env.example
```

to

```
.env
```

and set:

```env
VITE_API_URL=http://localhost:5000
```

4. Submitted contact messages are stored in the PostgreSQL `messages` table.

5. Developers can view submitted messages on the hidden `/admin` page by entering the `ADMIN_KEY` configured in `backend/.env`.

## Running the Project

Run both the frontend and backend in separate terminals.

### Frontend

```bash
npm run dev
```

Runs on:

```
http://localhost:5173
```

### Backend

```bash
cd backend
npm run dev
```

Runs on:

```
http://localhost:5000
```

## Author

**Prince Sharma**

Software Engineer | Full Stack Developer

Thank you for visiting my portfolio!
