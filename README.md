# webhook-manager

# backend

1. npm install
2. setup .env

```
(PORT=3001)
MONGODB_URI=mongodb://username:password@localhost:27017/webhook-manager?authSource=admin
```
3. setup postgres with the following steps
  - navigate to `backend` directory
  - ensure postgres is running in the background
  - run `createdb request_binder`
  - connect to the database through psql with `psql -d request_binder`
  - run the DDL statements with `\i data/postgres_scripts/db_schema.sql`
  - edit the following template URI with your postgres connection info, and add the template to `.env`
      `POSTGRES_URI=postgresql://username:password@localhost:5432/request_binder`
      note: the password might be optional depending on your local postgres configuration.
4. npm run setupdb
5. npm run dev

# frontend
1. npm install
2. npm run dev
