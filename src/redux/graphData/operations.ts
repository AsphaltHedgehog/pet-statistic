import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetKpisResponse, IGetProductsResponse, IGetTransactionsResponse } from "../types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<IGetKpisResponse, void>({
      query: () => "kpi/",
      providesTags: ["Kpis"]
    }),
    getProducts: build.query<Array<IGetProductsResponse>, void>({
      query: () => "product/",
      providesTags: ["Products"]
    }),
    getTransactions: build.query<Array<IGetTransactionsResponse>, void>({
      query: () => "transaction/",
      providesTags: ["Transactions"]
    })
  })
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
