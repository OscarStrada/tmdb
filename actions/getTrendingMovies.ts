import { endpoints } from "@/constants/endpoints";

const getTrendingMovies = async () => {
  try {
    const response = await fetch(endpoints.trendingMovies);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getTrendingMovies;
