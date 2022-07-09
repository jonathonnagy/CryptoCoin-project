import React, { useEffect, useState } from "react";
import InputNumber from "react-input-number";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import http from "axios";
import { useAuth } from "../providers/auth";

const useStyles = makeStyles({
  input: {
    backgroundColor: "white",
  },
});

const MyPortfolio = ({ coinData, coinInfo }) => {
  const [quantity, setQuantity] = useState("");
  const [pricePerCoin, setPricePerCoin] = useState("");
  const [fee, setFee] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [transactions, setTransactions] = useState([]);

  const { user } = useAuth();
  const classes = useStyles();

  const addTransaction = async () => {
    try {
      const response = await http.post(
        "http://localhost:4000/api/user/add-transaction",
        { quantity, pricePerCoin, fee, buyDate, user, coinId: coinData.id }
      );
      console.log(response.data.message);
      getTransactions();
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const getTransactions = async () => {
    try {
      const response = await http.get(
        "http://localhost:4000/api/user/get-transactions",
        { params: { coinId: coinData.id, userId: user.userId } }
      );
      // console.log(response.data.coins[0].portfolio)
      setTransactions(response.data.coins[0].portfolio);
    } catch (error) {
      console.log(error);
    }
  };


 const totalQuantity = transactions.map(e => Number(e.quantity)).reduce((prev, curr) => prev + curr,0)
 const totalFee = transactions.map(e =>Number(e.fee)).reduce((prev, curr) => prev + curr,0)

 const balance = totalQuantity * Math.floor(coinInfo.quote?.USD.price * 100) / 100 + totalFee


  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h2>Portfolio</h2>

      <div className="portfolio-wrapper">
        <div className="portfolio-input">
          <p>Add Transaction </p>
          <label htmlFor="quantity">Quantity: </label>
          <InputNumber
            step={0.01}
            value={quantity}
            onChange={setQuantity}
            placeholder="0.00"
            id="quantity"
          />
          <label htmlFor="pricePerCoin">Price Per Coin: </label>
          <InputNumber
            step={0.01}
            value={pricePerCoin}
            onChange={setPricePerCoin}
            placeholder="0.00$"
            id="pricePerCoin"
          />
          <label htmlFor="fee">Fee: </label>
          <InputNumber
            step={0.01}
            value={fee}
            onChange={setFee}
            placeholder="0.00$"
            id="fee"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date buyed"
              value={buyDate}
              onChange={(newValue) => {
                setBuyDate(newValue.toISOString().substring(0, 10));
              }}
              renderInput={(params) => <TextField {...params} />}
              InputProps={{
                className: classes.input,
              }}
            />
          </LocalizationProvider>
          <Button variant="contained" onClick={addTransaction}>
            Add
          </Button>
        </div>
        <div className="portfolio-data">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Quantity</TableCell>
                  <TableCell align="right">Price Per Coin ($)</TableCell>
                  <TableCell align="right">Fee ($)</TableCell>
                  <TableCell align="right">Date buyed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.quantity}
                    </TableCell>
                    <TableCell align="right">{row.price_per_coin} $</TableCell>
                    <TableCell align="right">{row.fee} $</TableCell>
                    <TableCell align="right">{row.date_buyed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h2>Total quantity: {totalQuantity} {coinData.symbol} </h2>
            <h2>Balance: {balance} $</h2>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;