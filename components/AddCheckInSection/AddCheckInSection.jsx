import { Box, Typography } from "@mui/material";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
// This small component just displays the heading as CheckIns and bars icon
const AddedCheckInsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 0",
      }}
    >
      {/* Left side text */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Roboto Flex",
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "35.16px",
          color: "rgba(0, 0, 0, 1)",
        }}
      >
        Added CheckIns
      </Typography>

      {/* Right side bars icon */}
      <ListRoundedIcon
        sx={{ width: "24px", height: "24px", padding: "4.03px 2.44px" }}
      />
    </Box>
  );
};

export default AddedCheckInsSection;
