import { useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";

const BoxHeader = () => {
	const { palette } = useTheme();
	return <FlexBetween color={palette.grey[400]}></FlexBetween>;
};

export default BoxHeader;
