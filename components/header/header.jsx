import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        height: { xs: "56px", sm: "64px" },
        borderRadius: "20px",
        boxShadow: "14px 17px 40px 0px rgba(112, 144, 176, 0.08)",
        mx: "auto",
        my: { xs: "10px", sm: "20px" },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo box */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: { xs: "30px", sm: "40px" }, 
            height: { xs: "30px", sm: "40px" }, 
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            justifyContent: "center",
            borderRadius: "6px",
            border: "1px dashed white",
            color: "white",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "10px", sm: "12px" }, 
            }}
          >
            Logo
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "10px", sm: "15px" } }}>
          {/* Feedback Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "90px", sm: "110.16px" }, 
              height: "40px",
              padding: "6.4px 15px",
              borderRadius: "999px",
              textTransform: "capitalize",
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            Feedback
          </Button>

          {/* Bell Icon */}
          <IconButton
            sx={{
              width: "23.19px",
              height: "24px",
              padding: "0.21px 2.9px",
            }}
          >
            <NotificationsNoneIcon sx={{ color: "grey" }} />
          </IconButton>

          {/* Info Icon */}
          <IconButton
            sx={{
              width: "23.19px",
              height: "24px",
            }}
          >
            <InfoOutlinedIcon sx={{ color: "grey" }} />
          </IconButton>

          {/* Avatar with dropdown arrow */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Profile Picture"
              src="../../assets/images/avatar.png"
              sx={{
                width: { xs: "24px", sm: "30px" }, 
                height: { xs: "24px", sm: "30px" },
                borderRadius: "999px",
              }}
            />
            <IconButton sx={{ padding: "2.2px" }}>
              <ArrowDropDownIcon sx={{ width: "10px", height: "12px" }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;