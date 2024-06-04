import DashboardBox from "@/components/DashboardBox";
import BoxHeader from "@/components/boxHeader/BoxHeader";
import { useGetKpisQuery } from "@/redux/graphData/operations";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Line,
	CartesianGrid,
	Legend,
	LineChart,
} from "recharts";

const Row1 = () => {
	const { palette } = useTheme();

	const { data } = useGetKpisQuery();

	const revenueExpenses = useMemo(() => {
		return (
			data &&
			data.kpis[0].monthlyData.map(({ month, revenue, expenses }) => {
				return {
					name: month.substring(0, 3),
					revenue: revenue,
					expenses: expenses,
				};
			})
		);
	}, [data]);

	const revenueProfit = useMemo(() => {
		return (
			data &&
			data.kpis[0].monthlyData.map(({ month, revenue, expenses }) => {
				return {
					name: month.substring(0, 3),
					revenue: revenue,
					profit: (revenue - expenses).toFixed(2),
				};
			})
		);
	}, [data]);

	return (
		<>
			<DashboardBox gridArea="a">
				<BoxHeader title="Revenue and Expenses" subtitle="top line represents revenue" sideText="+4%" />
				{revenueExpenses && revenueExpenses.length > 0 && (
					<ResponsiveContainer width="100%" height="100%" maxHeight={392}>
						<AreaChart
							width={500}
							height={400}
							data={revenueExpenses}
							margin={{
								top: 15,
								right: 25,
								left: -10,
								bottom: window.innerWidth > 1199 ? 10 : 60,
							}}
						>
							<defs>
								<linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
									<stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
								</linearGradient>
								<linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
									<stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
								</linearGradient>
							</defs>

							<XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
							<YAxis
								tickLine={false}
								style={{ fontSize: "10px" }}
								axisLine={{ strokeWidth: "0" }}
								domain={[8000, 23000]}
							/>
							<Tooltip />
							<Area
								type="monotone"
								dataKey="revenue"
								dot={true}
								stroke={palette.primary.main}
								fillOpacity={1}
								fill="url(#colorRevenue)"
							/>
							<Area
								type="monotone"
								dataKey="expenses"
								dot={true}
								stroke={palette.primary.main}
								fillOpacity={1}
								fill="url(#colorExpenses)"
							/>
						</AreaChart>
					</ResponsiveContainer>
				)}
			</DashboardBox>

			<DashboardBox gridArea="b">
				<BoxHeader title="Profit and Revenue" sideText="+4%" />
				{revenueExpenses && revenueExpenses.length > 0 && (
					<ResponsiveContainer width="100%" height="100%" maxHeight={392}>
						<LineChart
							width={500}
							height={400}
							data={revenueProfit}
							margin={{
								top: 20,
								right: 0,
								left: -10,
								bottom: window.innerWidth > 1199 ? -20 : 35,
							}}
						>
							<CartesianGrid vertical={false} stroke={palette.grey[800]} />
							<XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
							<YAxis yAxisId="left" tickLine={false} style={{ fontSize: "10px" }} axisLine={false} />
							<YAxis
								yAxisId="right"
								orientation="right"
								tickLine={false}
								style={{ fontSize: "10px" }}
								axisLine={false}
							/>
							<Tooltip />
							<Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />
							<Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
							<Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
						</LineChart>
					</ResponsiveContainer>
				)}
			</DashboardBox>

			<DashboardBox gridArea="c"></DashboardBox>
		</>
	);
};

export default Row1;
