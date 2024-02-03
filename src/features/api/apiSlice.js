import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.weatherapi.com/v1/",
  }),
  endpoints: (builder) => ({
    getWeatherInfo: builder.query({
      query: (searchTerm) =>
        `http://api.weatherapi.com/v1/forecast.json?key=3d3cd37a5717427196574703240302&q=${searchTerm}`,
    }),
  }),
});

export const { useGetWeatherInfoQuery } = apiSlice;
