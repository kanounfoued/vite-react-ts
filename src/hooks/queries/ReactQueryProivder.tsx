import { ReactNode } from "react";
import { captureException } from "@sentry/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async (error) => {
      captureException(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: async (error) => {
      captureException(error);
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

type Props = {
  children: ReactNode;
};

export default function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
