import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/redux/graphData/operations";
import BoxHeader from "@/shared/boxHeader/BoxHeader";

const Row3 = () => {
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("data:", transactionsData);

  return (
    <>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
