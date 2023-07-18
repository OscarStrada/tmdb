import { endpoints } from "@/constants/endpoints";

const getUpcomingMovies = async () => {
  try {
    const response = await fetch(endpoints.upcomingMovies);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getUpcomingMovies;
