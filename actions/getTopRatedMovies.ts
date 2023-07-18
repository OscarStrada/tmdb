import { endpoints } from "@/constants/endpoints";

const getTopRatedMovies = async () => {
  try {
    const response = await fetch(endpoints.topRatedMovies);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getTopRatedMovies;
