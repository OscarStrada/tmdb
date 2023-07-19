const getPersonById = async (id: string) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
  const queries = `api_key=${API_KEY}`;
  const url = `${API_BASE_URL}/person/${id}?${queries}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getPersonById;
