import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Modal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DetailsModal = ({ showDetailsModal, setShowDetailsModal, checkIn }) => {
  const handleClose = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    setShowDetailsModal(false);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <Modal
      open={showDetailsModal}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '340px', sm: '600px', lg: "699px" },
          height: { xs: '350px', sm: '400px', lg: "460px" },
          padding: { xs: '8px 16px', sm: '13px 20px', lg: '16px 24px' },
          borderRadius: '20px',
          backgroundColor: 'white',
          boxShadow: '14px 17px 40px rgba(0, 0, 0, 0.13)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '10px', sm: '13px', lg: "16px" }
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto Flex',
              fontSize: '16px',
              fontWeight: 500,
              color: 'black',
            }}
          >
            Detail
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Body */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: { xs: '10px', sm: '13px', lg: "16px" },
            gap: { xs: '10px', sm: '13px', lg: "16px" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Booking ID Input */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: 6 }}>
              <Typography sx={{ fontSize: { xs: '11px', sm: '13px', lg: "16px" } }}>Booking ID</Typography>
              <TextField
                variant="outlined"
                defaultValue="12345678"
                sx={{
                  width: { xs: '80px', sm: '100px', lg: "150px" },
                  height: { xs: '20px', sm: '25px', lg: "30px" },
                  padding: '0px',
                  '& .MuiInputBase-root': {
                    height: { xs: '20px', sm: '25px', lg: "30px" },
                  },
                }}
              />
            </Box>

            {/* Square Inputs for Rooms and Guests */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: 8 }}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', lg: "16px" } }}>Rooms</Typography>
              <TextField
                variant="outlined"
                defaultValue="4"
                sx={{
                  width: '40px',
                  height: '40px',
                  padding: '0px',
                  marginLeft: '10px',
                  '& .MuiInputBase-root': {
                    height: '40px',
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', lg: "16px" } }}>Number of Guests</Typography>
              <TextField
                variant="outlined"
                defaultValue="4"
                sx={{
                  width: '40px',
                  height: '40px',
                  padding: '0px',
                  marginLeft: '10px',
                  '& .MuiInputBase-root': {
                    height: '40px',
                  },
                }}
              />
            </Box>

            {/* Date Input */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: 6 }}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', lg: "16px" } }}>Booked Date</Typography>
              <TextField
                type="date"
                defaultValue={today}
                inputProps={{ min: today }} // Disable past dates
                sx={{
                  width: { xs: '90px', sm: '130px', lg: "150px" },
                  height: { xs: '20px', sm: '35px', lg: "50px" },
                  padding: '0px',
                  marginLeft: '10px',
                  '& .MuiInputBase-root': {
                    height: { xs: '20px', sm: '35px', lg: "50px" },
                  },
                }}
              />
            </Box>
          </Box>

          {/* Image Section */}
          <Box
            component="img"
            src={checkIn?.image}
            alt="Check In"
            sx={{
              width: { xs: '100px', sm: '200px', lg: "256px" },
              height: { xs: '60px', sm: '130px', lg: "134px" },
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Box>

        {/* Footer with OK and Close buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: { xs: '100px', sm: '20px', lg: "16px" },
            right: { xs: '15px', sm: '20px', lg: "24px" },
            gap: '8px',
          }}
        >
          <Button variant="contained" onClick={handleClose}>OK</Button>
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DetailsModal;