import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/redux/graphData/operations";

const Row2 = () => {
	const { data } = useGetProductsQuery();
	console.log("data:", data);

	return (
		<>
			<DashboardBox gridArea="d"></DashboardBox>
			<DashboardBox gridArea="e"></DashboardBox>
			<DashboardBox gridArea="f"></DashboardBox>
		</>
	);
};

export default Row2;
