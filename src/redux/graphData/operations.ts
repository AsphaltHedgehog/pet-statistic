import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosResponse } from "axios";
import { IPassedQuizzes } from "@/redux/graphData/slice";

interface UserInfo {
	name: string;
	email: string;
	_id: string;
	avatarURL: string;
	favorite: string[];
	passedQuizzes?: IPassedQuizzes[];
	averageSuccess?: string;
	average: number;
	totalQuestions: number;
	totalAnswers: number;
}
interface IResponse {
	code: number;
	data: { user: UserInfo };
	status: string;
}

export const getUserThunk = createAsyncThunk<UserInfo, void>("getUserInfo", async (_, thunkApi) => {
	try {
		const { data }: AxiosResponse<IResponse> = await quizApi.get("user/info");
		return data.data.user;
	} catch (error) {
		if (error instanceof Error && typeof error.message === "string") {
			return thunkApi.rejectWithValue(error.message);
		}
		return thunkApi.rejectWithValue("An unknown error occurred");
	}
});
