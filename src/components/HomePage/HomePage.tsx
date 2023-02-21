import React from "react";
import Typography from "@mui/material/Typography";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Button from "@mui/material/Button";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="div"
        sx={{ fontSize: 40, textAlign: "center", mt: 2 }}
      >
        Witaj w <br /> TWOIM kantorze
      </Typography>
      <div>
        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          <Link to="/exchange">
            <Fab color="success" sx={{ margin: 2 }}>
              <CurrencyExchangeIcon />
            </Fab>
          </Link>
          <Typography
            variant="h2"
            sx={{ fontSize: 20, textAlign: "left", marginTop: 3.5 }}
          >
            Exchange your money!
          </Typography>
        </div>
        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          <Link to="/thx">
            <Fab color="success" sx={{ margin: 2 }}>
              <CoffeeIcon />
            </Fab>
          </Link>
          <Typography
            variant="h2"
            sx={{ fontSize: 20, textAlign: "left", marginTop: 3.5 }}
          ></Typography>
        </div>
      </div>
    </>
  );
};

export default HomePage;
