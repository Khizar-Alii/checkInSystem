import  { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AddCheckInModal from "../../components/AddCheckInModal/AddCheckInModal"; 

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      {/* The box that includes the hero image */}
      <Box
        sx={{
          height: { xs: "200px", sm: "279px" },
          position: "relative",
          backgroundImage: "url(../../assets/images/hero2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "14px 17px 40px 0px rgba(0, 0, 0, 0.13)",
          borderRadius: "10px",
        }}
      >
        {/* Text content */}
        <Box
          sx={{
            padding: { xs: "20px", sm: "30px 80px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "18px", sm: "24px", lg: "30px" },
            }}
          >
            Hi! 👋 James Doe
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              marginTop: "10px",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Lorem ipsum dolor sit amet, something important to say here
          </Typography>

          {/* Add Check In Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen} 
            sx={{
              padding: "6.4px 15px",
              borderRadius: "999px",
              width: { xs: "120px", sm: "166px" },
              height: { xs: "40px", sm: "54px" },
              marginTop: "20px",
              textTransform: "capitalize",
              color: "black",
            }}
          >
            Add Check In
          </Button>
        </Box>
      </Box>

      {/* Add Check In Modal */}
      <AddCheckInModal open={openModal} handleClose={handleClose} />
    </>
  );
};

export default HeroSection;