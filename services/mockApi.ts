import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { ProductLabels } from "../types";
import { IProduct } from "../types/IProduct";

interface IGetProductsArguments {
	page?: number;
	limit?: number;
	[ProductLabels.DEFAULT]?: true;
	[ProductLabels.DISCOUNT]?: true;
	[ProductLabels.HIT]?: true;
	[ProductLabels.NEW_TASTE]?: true;
	[ProductLabels.SOON]?: true;
}

export const mockApi = createApi({
	reducerPath: "mockApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_MOCKAPI_URL || "https://636cc86dab4814f2b26e197a.mockapi.io",
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], IGetProductsArguments>({
			query: ({ page = 1, limit = 10, ...restParams }) => {
				const restParamsEntries = Object.entries(restParams);
				const activeFilter = restParamsEntries.find((item) => item[1]);

				if (activeFilter) {
					return {
						url: "/products_pasta",
						params: { page, limit, [activeFilter[0]]: true },
					};
				}

				return {
					url: "/products_pasta",
					params: { page, limit },
				};
			},
		}),
		getProduct: builder.query<IProduct, { id: IProduct["id"] | undefined }>({
			query: ({ id }) => `/products_pasta/${id ? id : ""}`,
		}),
		getPagesQuantity: builder.query<number, Omit<IGetProductsArguments, "page">>({
			query: ({ limit, ...restParams }) => {
				const paramsEntries = Object.entries(restParams);
				const activeFilter = paramsEntries.find((item) => item[1]);

				if (activeFilter) {
					return {
						url: "/products_pasta",
						params: { [activeFilter[0]]: true },
					};
				}

				return {
					url: "/products_pasta",
				};
			},
			transformResponse: (response: IProduct[], _, { limit = 6 }) => {
				const pagesQuantity = Math.ceil(response.length / limit);
				return pagesQuantity;
			},
		}),
	}),
});

// Export hooks for usage in functional components
export const {
	useGetProductsQuery,
	useGetProductQuery,
	useGetPagesQuantityQuery,
	util: { getRunningQueriesThunk },
} = mockApi;

// export endpoints for use in SSR
export const { getProducts, getProduct, getPagesQuantity } = mockApi.endpoints;
