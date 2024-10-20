import { Box, Typography, Avatar, ButtonBase } from "@mui/material";
import DetailsModal from "../DetailsModal/DetailsModal"
import {useState} from "react"

  // Check-in card which displays image and label on top of the image, then below it shows checkInName, date, owner name, and avatar
const CheckInCard = ({ checkIn }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Open the details modal when the card is clicked
  const handleCardClick = () => {
    setShowDetailsModal(true); 
  };

  return (
    // Main box
    <ButtonBase
    onClick={handleCardClick}
      sx={{
        width: { xs: "313px", sm: "310px", lg: "290px" },
        height: "324px",
        boxShadow: "14px 17px 40px 0px rgba(0, 0, 0, 0.13)",
        borderRadius: "20px",
        position: "relative",
        padding: "20px",
        marginBottom: "20px",
        textAlign: "left",
        display: "block",
        cursor: 'pointer'
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={checkIn?.image}
        alt="CheckIn"
        sx={{
          width: { xs: "271px", sm: "271px", lg: "248px" },
          height: "160px",
          borderRadius: "18px",
          objectFit: "cover",
          position: "absolute",
          top: "24px",
          left: "21px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      {/* Checked In label */}
      <Typography
        sx={{
          position: "absolute",
          top: "30px",
          right: "30px",
          backgroundColor: "primary.main",
          color: "white",
          padding: "4px 8px",
          borderRadius: "30px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Checked In
      </Typography>

      {/* CheckIn Name */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto Flex",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "24px",
          color: "black",
          marginTop: "180px",
        }}
      >
        {checkIn?.title}
      </Typography>

      {/* CheckIn Date */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Roboto Flex",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "19px",
          color: "rgba(113, 128, 150, 1)",
          padding: "10px 0",
        }}
      >
        {checkIn?.date}
        {/* Format the date */}
      </Typography>

      {/* Owner Avatar and Name */}
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
        <Avatar
          alt="Owner Avatar"
          src={checkIn?.avatar || "../../assets/images/checkIns/avatar.png"}
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Roboto Flex",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18.75px",
            color: "rgba(113, 128, 150, 1)",
            marginLeft: "10px",
          }}
        >
          Owner: {checkIn?.owner}
        </Typography>
      </Box>
       {/* Details Modal */}
       <DetailsModal
        showDetailsModal={showDetailsModal}
        setShowDetailsModal={setShowDetailsModal}
        checkIn = {checkIn}
      />
    </ButtonBase>
  );
};

export default CheckInCard;
