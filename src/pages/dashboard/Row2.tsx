import { useTheme } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";
import BoxHeader from "@/components/boxHeader/BoxHeader";
import { useGetProductsQuery } from "@/redux/graphData/operations";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Row2 = () => {
	const { palette } = useTheme();
	const { data } = useGetProductsQuery();
	console.log("data:", data);

	return (
		<>
			<DashboardBox gridArea="d">
				<BoxHeader title="Profit and Revenue" sideText="+4%" />
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
						<YAxis yAxisId="right" orientation="right" tickLine={false} style={{ fontSize: "10px" }} axisLine={false} />
						<Tooltip />
						<Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />
						<Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
						<Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
					</LineChart>
				</ResponsiveContainer>
			</DashboardBox>
			<DashboardBox gridArea="e"></DashboardBox>
			<DashboardBox gridArea="f"></DashboardBox>
		</>
	);
};

export default Row2;
