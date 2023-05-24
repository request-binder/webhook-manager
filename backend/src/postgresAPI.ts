import postgres from 'postgres';

// import { LocationDetails } from './types'; 

const sql = postgres(<string>process.env.POSTGRES_URI)
// const sql = postgres('postgresql://hernandodelgado@localhost:5432/request_binder')

export const getAllEndpoints = async () => {
  console.log('this ran');
  console.log(await sql<String[]>`
    SELECT * FROM endpoint;
  `);
};