import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetKpisResponse, IGetProductsResponse } from "../types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Product"],
  endpoints: (build) => ({
    getKpis: build.query<IGetKpisResponse, void>({
      query: () => "kpi/",
      providesTags: ["Kpis"]
    }),
    getProducts: build.query<Array<IGetProductsResponse>, void>({
      query: () => "product/",
      providesTags: ["Product"]
    })
  })
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
