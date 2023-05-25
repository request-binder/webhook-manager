import postgres from 'postgres';

const sql = postgres(<string>process.env.POSTGRES_URI)

export const getAllEndpoints = async () => {
  const endpoints = await sql`
    SELECT * FROM endpoint;
  `;

  return endpoints.map(endpoint => endpoint.endpoint)
};

export const endpointExists = async (endpoint: string) => {
  const record = await sql`
    SELECT endpoint FROM endpoint
    WHERE endpoint = ${ endpoint }
  `;

  return record.length >= 1;
};

export const createEndpoint = async (endpoint: string) => {
  return await sql`
    INSERT INTO endpoint (endpoint)
    VALUES (${ endpoint })
  `;
};