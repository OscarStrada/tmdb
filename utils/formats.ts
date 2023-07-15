export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

export const getReleaseYear = (date: string | undefined) => {
  if (date) {
    const releaseDate = new Date(date);
    return releaseDate.getFullYear();
  }

  return null;
};

export const getScoreInPercentage = (voteAverage: number | undefined) => {
  if (voteAverage) {
    return Math.round(voteAverage) * 10;
  }

  return null;
};
