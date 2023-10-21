import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.180.131.89/",
  }),
  tagTypes: ["mainServices", "subServices", "package"],
  endpoints: () => ({}),
})
