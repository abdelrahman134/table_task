import {
    Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import axios from "axios";

const Modalpopup = () => {
  const [open, openchange] = useState(false);
    const [itemData, setItemData] = useState({
      name: "",
      model: "",
      Price: "",
      brand: "",
      color: "",
    });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        console.log(itemData);
      };

      const handleAddItem = async() => {
        try {
      await axios.post("http://16.170.247.231:3003/items", itemData);
      
    //   toast.success("Item added successfully!");
        setItemData({
          name: "",
          model: "",
          Price: "",
          brand: "",
          color: "",
        });

    } catch (error) {

    //   toast.error("Error adding item: " + error);

    }
    closepopup()
      };
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  return (
    <div style={{ textAlign: "right" }}>
      <Button
        onClick={functionopenpopup}
        variant="contained"
        sx={{ backgroundColor: "#635BFF", color: "white" }}
      >
        Add Item
      </Button>
      <Dialog
        // fullScreen
        open={open}
        onClose={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Add Item{" "}
          <IconButton onClick={closepopup} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{" "}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={itemData.name}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Model"
              name="model"
              value={itemData.model}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Price"
              name="Price"
              value={itemData.price}
              onChange={handleInputChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="brand"
                value={itemData.brand}
                onChange={handleInputChange}
                label="Brand"
              >
                <MenuItem value={"PRAGA"}>PRAGA</MenuItem>
                <MenuItem value={"LIOBARD"}>LIOBARD</MenuItem>
                <MenuItem value={"SOVAGE"}>SOVAGE</MenuItem>
                <MenuItem value={"TOMMY"}>TOMMY</MenuItem>
              </Select>
            </FormControl>
            <Box display="flex" gap="10px" alignItems="center">
              <Typography>Color :</Typography>
              <input
                style={{ width: "40px", border: "none", height: "30px" }}
                type="color"
                placeholder="color"
                name="color"
                value={itemData.color}
                onChange={handleInputChange}
              />
            </Box>
            <Button color="primary" variant="contained" onClick={handleAddItem}>
              Add Item
            </Button>{" "}
          </Stack>
        </DialogContent>
      </Dialog>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}


      /> */}
    </div>
  );
};

export default Modalpopup;
