export interface IGetKpisResponse {
	_id: string;
	id: string;
	__v: string;
	totalProfit: number;
	totalRevenue: number;
	totalExpenses: number;
	expensesByCategory: IExpensesByCategory;
	monthlyData: IMouth[];
	dailyData: IDay[];
}

export interface IExpensesByCategory {
	salaries: number;
	supplies: number;
	services: number;
}

export interface IMouth {
	_id: string;
	id: string;
	mouth: string;
	revenue: number;
	expenses: number;
	nonOperationalExpenses: number;
	operationalExpenses: number;
}

export interface IDay {
	_id: string;
	id: string;
	date: string;
	revenue: number;
	expenses: number;
}
