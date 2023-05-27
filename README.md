# About

Request Binder is an observability tool which provides a simple UI for inspecting webhooks. With one click, users can generate a URL which they can use to subscribe to a webhook producer. Webhooks are streamed in real-time and the request headers and payload can be displayed.

Visit the live app at [requestbinder.com](https://requestbinder.com/)


# Server Setup and Configuration

1. navigate to the `backend` directory and run `npm install`

2. create a `.env` file, and declare the `PORT` variable with the desired port.

3. setup postgres with the following steps
  - ensure postgres is running in the background
  - run `createdb request_binder`
  - while still in the `backend` directory, connect to the database with `psql -d request_binder`
  - execute the DDL statements with `\i data/postgres_scripts/db_schema.sql`
  - close `psql`, and add the following postgres connection string to `.env` with your own postres authentication info.
      `POSTGRES_URI=postgresql://username:password@localhost:5432/request_binder`
      note: the password might be optional depending on your postgres configuration.

4. setup MongoDB with the following steps
  - ensure that mongod is running in the background
  - connect to mongo with `mongosh`
  - execute `use request-binder` to create the database
  - close `mongosh`, and the following postgres connection string to `.env` with your own mongod authentication info.
    `MONGODB_URI=mongodb://username:password@localhost:27017/request-binder?authSource=admin`
  - while still in the `backend` directory execute `npm run setupdb`. This creates an index on the database which will improve performance of some queries. 

5. start the app server with `npm start`
