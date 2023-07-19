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

  return 0;
};

export const formatCurrency = (
  number: number,
  locale: string,
  currency: string
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(number);
};

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
