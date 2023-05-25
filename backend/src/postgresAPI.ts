import postgres from 'postgres';

const sql = postgres(<string>process.env.POSTGRES_URI)

export const getAllEndpoints = async () => {
  console.log(await sql<String[]>`
    SELECT * FROM endpoint;
  `);
};

export const endpointExists = async (endpoint: string) => {
  const record = await sql`
    SELECT endpoint FROM endpoint
    WHERE endpoint = ${ endpoint }
  `;

  return record.length >= 1;
};