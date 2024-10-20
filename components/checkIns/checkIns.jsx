import { Box, Typography, CircularProgress } from "@mui/material";
import AddedCheckInsSection from "../AddCheckInSection/AddCheckInSection.jsx";
import { getAllCheckIns } from "../../config/firebaseFunctions.js";
import { useEffect, useState } from "react";
import CheckInCard from "../CheckInCard/CheckInCard.jsx";
import AddCheckInModal from "../AddCheckInModal/AddCheckInModal";

function CheckIns() {
  const [checkInsList, setCheckInsList] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchCheckIns();
  }, []);

  const fetchCheckIns = async () => {
    const checkIns = await getAllCheckIns();
    setCheckInsList(checkIns);
    setLoading(false);
  };

  // Function to add new check-in to the state
  const handleNewCheckIn = (newCheckIn) => {
    setCheckInsList((prev) => [newCheckIn, ...prev]); // Add new check-in to the top
  };

  return (
    <>
      <AddedCheckInsSection />

      {/* Pass handleNewCheckIn function to AddCheckInModal */}
      <AddCheckInModal onAddCheckIn={handleNewCheckIn} />

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "150px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <CircularProgress />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Roboto Flex",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "30px",
              color: "rgba(0, 0, 0, 0.7)",
              marginTop: "10px",
            }}
          >
            Loading Check-Ins...
          </Typography>
        </Box>
      ) : checkInsList.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "150px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Roboto Flex",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "30px",
              color: "rgba(0, 0, 0, 0.7)",
              marginBottom: "10px",
            }}
          >
            No Check-Ins Available
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto Flex",
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(113, 128, 150, 1)",
            }}
          >
            Something beautiful is waiting for you. Check back later!
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "center", lg: "flex-start" },
            gap: "10px",
          }}
        >
          {checkInsList.map((checkIn, index) => (
            <CheckInCard key={index} checkIn={checkIn} />
          ))}
        </Box>
      )}
    </>
  );
}

export default CheckIns;