import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/redux/graphData/operations";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Row1 = () => {
	const { palette } = useTheme();

	const { data } = useGetKpisQuery();

	const revenueExpenses = useMemo(() => {
		return (
			data &&
			data.kpis[0].monthlyData &&
			data.kpis[0].monthlyData.map(({ month, revenue, expenses }) => {
				return {
					name: month.substring(0, 3),
					revenue: revenue,
					expenses: expenses,
				};
			})
		);
	}, [data]);

	return (
		<>
			<DashboardBox gridArea="a">
				{revenueExpenses && revenueExpenses.length > 0 && (
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							width={500}
							height={400}
							data={revenueExpenses}
							margin={{
								top: 10,
								right: 30,
								left: 0,
								bottom: 0,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="revenue"
								stroke={palette.primary.main}
								fillOpacity={1}
								fill="url(#colorRevenue)"
							/>
						</AreaChart>
					</ResponsiveContainer>
				)}
			</DashboardBox>

			<DashboardBox gridArea="b"></DashboardBox>

			<DashboardBox gridArea="c"></DashboardBox>
		</>
	);
};

export default Row1;
