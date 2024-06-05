import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetKpisResponseData } from "../types";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: "main",
	tagTypes: ["Kpis"],
	endpoints: (build) => ({
		getKpis: build.query<IGetKpisResponseData, void>({
			query: () => "kpi/",
			providesTags: ["Kpis"],
		}),
	}),
});

export const { useGetKpisQuery } = api;
