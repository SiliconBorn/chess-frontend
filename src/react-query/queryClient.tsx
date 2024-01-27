import { QueryClient } from "@tanstack/react-query";

const createQueryClient = () => {
  let queryClient: null | QueryClient = null;

  if (!queryClient) {
    queryClient = new QueryClient();
  }

  return queryClient;
};

export const getQueryClient =():QueryClient=> createQueryClient();
