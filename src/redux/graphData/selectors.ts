import { RootState } from "@/redux/store";

export const selectGetGraphData = (state: RootState) => state.graphData.data;
export const selectGraphDataError = (state: RootState) => state.graphData.error;
export const selectGraphDataIsLoading = (state: RootState) => state.graphData.isLoadingUser;
