export interface Publication {
  title: string;
  venue: string;
  year: number;
  abstract: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Deep neural networks for rank-consistent ordinal regression based on conditional probabilities",
    venue: "Pattern Analysis and Applications",
    year: 2023,
    abstract:
      "A novel rank-consistent method for ordinal regression in neural networks using conditional probabilities, ensuring monotonicity across output classes.",
    url: "https://doi.org/10.1007/s10044-023-01181-9",
  },
];
