<<<<<<< HEAD
# Portfolio — React + Vite + Tailwind

Ye ek personal portfolio project hai jisme React Router se multiple pages link kiye gaye hain, aur Navbar + Hero + Footer sabhi pages me common (shared) rehte hain.

## Structure

```
src/
  components/
    Navbar.jsx     -> top navigation (common on every page)
    Hero.jsx        -> shared hero component (full variant on Home, compact variant on inner pages)
    Footer.jsx      -> footer (common on every page)
    Layout.jsx      -> wraps Navbar + Footer + page content (Outlet)
  pages/
    Home.jsx
    About.jsx
    Education.jsx
    Projects.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx           -> all routes defined here
  main.jsx          -> entry point (BrowserRouter)
```

## Kaise chalayein (VS Code me)

1. Is folder ko VS Code me open karo.
2. Terminal open karo aur dependencies install karo:

   ```bash
   npm install
   ```

3. Dev server start karo:

   ```bash
   npm run dev
   ```

4. Browser me `http://localhost:5173` open karo — site live dikh jayegi.

## Production build

```bash
npm run build
npm run preview
```

## Notes

- Navigation links: Home, About Us, Education, Projects, Contact Us — sab React Router (`react-router-dom`) se link hain, click karne par page reload hue bina switch hote hain.
- Colors, fonts aur design tokens `tailwind.config.js` me define hain — inhe easily customize kar sakte ho.
- Saari images abhi dummy/placeholder SVG hain — inhe apni real photos/images se replace kar sakte ho.

## Dark / Light mode

- Navbar (top-right) me ek sun/moon icon button hai — click karke theme switch ho jaata hai.
- Chosen theme `localStorage` me save hoti hai, so refresh/next visit par bhi wahi theme load hogi.
- Pehli visit par agar koi saved preference nahi hai, to system/browser ki preference (`prefers-color-scheme`) follow hoti hai, warna default dark hai.
- Theme logic `src/components/Navbar.jsx` me hai aur colors `src/index.css` ke `:root` / `html.light` CSS variables se control hote hain.

## Resume Download

- Navbar (desktop + mobile) aur Home page ke Hero section me "Download Resume" / "Resume" button hai.
- Dummy resume PDF `public/Prince_Sharma_Resume.pdf` me hai — isko apni real resume se replace kar sakte ho (same file name rakhna, ya button ka `href` update kar dena).

## Backend + PostgreSQL (Get in Touch form)

Contact page ka form ab ek real backend API (Node + Express + PostgreSQL) ko data bhejta hai, jo `backend/` folder me hai.

1. `cd backend`, phir `backend/README.md` follow karo — PostgreSQL setup, `.env` config, `npm install`, `npm run dev`.
2. Root portfolio folder me `.env.example` ko `.env` me copy karo (`VITE_API_URL=http://localhost:5000`) taaki frontend backend ko sahi URL par call kare.
3. Form submit hone par data `messages` table me PostgreSQL me store hota hai.
4. Developer submitted messages `/admin` page par dekh sakta hai (Navbar me link nahi hai — sirf developer ke liye) — admin key daalni hogi jo `backend/.env` me `ADMIN_KEY` set ki hai.

Dono — frontend (`npm run dev`, port 5173) aur backend (`npm run dev`, port 5000) — alag terminal me chalane honge.
=======
# Portfolio
Pofile prince sharma
>>>>>>> a300cabe45ac16e1501b6a7f2e110190df879232
