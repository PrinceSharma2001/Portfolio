# Portfolio Backend — Node + Express + PostgreSQL

Stores submissions from the site's "Get in touch" form in PostgreSQL,
and gives the developer a way to view them.

## 1. Install PostgreSQL

Install PostgreSQL locally (or use any hosted Postgres). Then create a database:

```bash
psql -U postgres
CREATE DATABASE portfolio_db;
\q
```

The `messages` table itself is created automatically the first time you
start the server (see `db.js`), or you can run `schema.sql` manually:

```bash
psql -U postgres -d portfolio_db -f schema.sql
```

## 2. Configure environment variables

```bash
cd backend
cp .env.example .env
```

Edit `.env` and fill in your PostgreSQL username/password/database name,
and set your own `ADMIN_KEY` (a secret only you know, used to view messages).

## 3. Install dependencies & run

```bash
npm install
npm run dev     # auto-restarts on file changes
# or
npm start
```

The API will run at `http://localhost:5000` by default.

## API Endpoints

### `POST /api/contact`
Called by the frontend contact form. Body:
```json
{ "name": "John Doe", "email": "john@example.com", "message": "Hi!" }
```

### `GET /api/messages`
For the developer only. Requires header:
```
x-admin-key: <your ADMIN_KEY from .env>
```
Returns all stored messages, newest first. Example:
```bash
curl -H "x-admin-key: your_admin_key_here" http://localhost:5000/api/messages
```

You can also view these in the frontend at `/admin` (enter the same
admin key there — it's not linked in the navbar, it's for you only).

## Connecting the frontend

In the `portfolio/` root (frontend) folder, create a `.env` file:
```
VITE_API_URL=http://localhost:5000
```
The Contact page and Admin page will use this to reach the backend.
