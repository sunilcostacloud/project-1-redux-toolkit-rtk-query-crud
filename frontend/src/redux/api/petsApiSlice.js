import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";

export const petsApiSlice = createApi({
  reducerPath: "petsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
