import { endpoints } from "@/constants/endpoints";

const getPopularMovies = async () => {
  try {
    const response = await fetch(endpoints.popularMovies);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getPopularMovies;
