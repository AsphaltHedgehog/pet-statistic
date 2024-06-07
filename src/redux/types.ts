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
  cratedAt: string;
  updatedAt: string;
}

export interface IExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface IMouth {
  _id: string;
  id: string;
  month: string;
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

export interface IGetProductsResponse {
  _id: string;
  id: string;
  __v: string;
  price: number;
  expense: number;
  transactions: Array<string>;
  cratedAt: string;
  updatedAt: string;
}
