import { Box, Button, IconButton,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CurrencyRupeeRounded, Padding } from '@mui/icons-material';
import Table from "../components/Table/table.jsx"
import Modalpopup from '../components/AdditemPopup.jsx';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Product() {
  const [data,setData]=useState()
  const [updatedata, setUpdateData] = useState([]);
  const [page, setPage] = useState(0);
  const [curPage, setCurPage] = useState(0);
  
  
  const [totalpage,settotal]=useState(0)
  const [error, setError] = useState(false);

      const UpdateItem = async(items) => {
        try {
          items?.map((item) =>
            axios.put("http://16.170.247.231:3003/items", [item])

          )
          // toast.success("Item updated successfully!");;
        } catch (error) {
          
        }
      };

  useEffect(()=>{
    function getUniqueProducts(data) {
      const uniqueIds = {};
      const uniqueProducts = [];

      data.forEach((product) => {
        if (!uniqueIds[product.id]) {
          uniqueIds[product.id] = true;
          uniqueProducts.push(product);
        }
      });

      return uniqueProducts;
    }
    const fetchData = async () => {
     
     
      try {
        const res =await axios.get(`http://16.170.247.231:3003/items/${page}`);
        const data1 = res.data.items;
        settotal(Math.floor(res.data.totalCount / 3));
        setData(res.data.items);
        const updatedData=[...updatedata,...data1]
        const uniqeData = getUniqueProducts(updatedData);
        setUpdateData(uniqeData);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    
      }
    fetchData()
    

  },[page])
const handlePagination=(val)=>{
  if(val=="inc" && page<totalpage ){
    setPage(prev=>prev+1)
    if(curPage<=totalpage){
    setCurPage((prev) => prev + 1);
    }
  }else if(val=="dec"&&page>0){
    setPage((prev) => prev - 1);
    
  }

}
  return (
    <Box
      sx={{
        padding: "30px 20px 20px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",

          width: "90%",
        }}
      >
        <Typography variant="h4">Products</Typography>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          padding: "20px",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1000px",
        }}
      >
        <Box sx={{ alignSelf: "flex-end" }}>
          <Modalpopup />
        </Box>
        <Table data={updatedata} setData={setUpdateData} page={page} />
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          sx={{ marginTop: "20px", maxWidth: "1000px" }}
        >
          <Box display="flex" gap="20px">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#635BFF", color: "white" }}
              onClick={() => handlePagination("dec")}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#635BFF", color: "white" }}
              onClick={() => handlePagination("inc")}
            >
              Next
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#635BFF", color: "white" }}
            onClick={() => UpdateItem(updatedata)}
          >
            {" "}
            Submit Changes
          </Button>
        </Box>
      </Box>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
   
        rtl={false}

      /> */}
    </Box>
  );
}

export default Product