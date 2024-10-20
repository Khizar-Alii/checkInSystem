import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  IconButton,
  Button,
  CircularProgress, // Import CircularProgress for the loading indicator
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebaseConfig.js";
import { uploadCheckInToFirebase } from "../../config/firebaseFunctions.js";

// Modal styles
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "525px" },
  bgcolor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const AddCheckInModal = ({ open, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [title, setTitle] = useState(""); // State for title
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Function to upload the image to Firebase storage
  const uploadImgToFirebase = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    setLoading(true); // Set loading to true when upload starts

    const fileName = Date.now().toString() + ".jpg";
    const imgRef = ref(storage, "check-in/" + fileName);

    try {
      const snapshot = await uploadBytes(imgRef, selectedFile);
      console.log("File Uploaded...");

      const downloadUrl = await getDownloadURL(imgRef);
      console.log("File available at:", downloadUrl);

      if (title === "") {
        alert("Please First Select the title");
        setLoading(false); // Stop loading if title is empty
        return;
      }

      const success = await uploadCheckInToFirebase({ title, image: downloadUrl });

      if (success) {
        console.log("Check-in added successfully.");
        handleClose(); // Close modal on success
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false); // Stop loading in the end
    }
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && validateFileType(file)) {
      setSelectedFile(file);
      setImageError(null); // Clear any previous errors
    } else {
      setSelectedFile(null);
      setImageError("Please select a valid image file (jpg, jpeg, png)");
    }
  };

  // Validate selected file type
  const validateFileType = (file) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    return allowedTypes.includes(file.type);
  };

  // Handle area click to trigger hidden file input
  const handleAreaClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {/* Modal Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            sx={{
              fontFamily: "Roboto Flex",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18.75px",
              textAlign: "left",
              color: "black",
            }}
          >
            Add Check In
          </Typography>
          <IconButton onClick={handleClose} sx={{ width: "16px", height: "16px" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Modal Body */}
        <Box sx={{ mt: 2 }}>
          {/* Title Label */}
          <Typography sx={{ fontFamily: "Roboto Flex", fontSize: "16px", fontWeight: 500, textAlign: "left", color: "black", mb: 1 }}>
            Title
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Enter title"
            value={title} // Bind the value to title state
            onChange={(e) => setTitle(e.target.value)} // Update title state
            sx={{ borderRadius: "2px 0px 0px 0px", color: "rgba(0, 0, 0, 0.87)" }}
          />

          {/* Upload Image Section */}
          <Typography sx={{ fontFamily: "Roboto Flex", fontSize: "16px", fontWeight: 500, textAlign: "left", color: "black", mt: 2, mb: 1 }}>
            Upload Image
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: "167px",
              border: "1px dashed rgba(0, 0, 0, 0.12)",
              borderRadius: "6px 0px 0px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={handleAreaClick}
          >
            <UploadIcon fontSize="large" />
            <Typography sx={{ fontFamily: "Roboto Flex", fontSize: "16px", fontWeight: 400 }}>
              {selectedFile ? selectedFile.name : "Click or drag file to this area to upload"}
            </Typography>
            {imageError && (
              <Typography sx={{ fontFamily: "Roboto Flex", fontSize: "14px", color: "red" }}>
                {imageError}
              </Typography>
            )}
            <Typography sx={{ fontFamily: "Roboto Flex", fontSize: "14px", fontWeight: 400, color: "rgba(180, 180, 180, 1)" }}>
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other banned files.
            </Typography>
          </Box>

          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept=".jpg,.jpeg,.png" // Restrict file types
            onChange={handleFileChange}
          />
        </Box>

        {/* Modal Footer */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: "15px" }}>
          {/* Cancel Button */}
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ width: "75px", height: "32px", padding: "4px 15px", borderRadius: "30px", textTransform: "capitalize" }}
          >
            Cancel
          </Button>

          {/* Add Button or Loading Indicator */}
          {loading ? (
            <CircularProgress size={24} /> // Show loading spinner
          ) : (
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "59px", height: "32px", padding: "4px 15px", borderRadius: "30px", textTransform: "capitalize" }}
              onClick={uploadImgToFirebase} // Call the upload function
            >
              Add
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default AddCheckInModal;