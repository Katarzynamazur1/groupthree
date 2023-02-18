import React from 'react'; 
import Typography from "@mui/material/Typography";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Button from "@mui/material/Button";
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <Typography variant='h1' component='div' mt={2} sx={{fontSize:40, textAlign:"center"}}>
Witaj w <br /> TWOIM kantorze
        </Typography>
        <div style={{alignContent:"center"}}>
        <Typography>Exchange your money!</Typography>
            <Link to='/'>
                <Button variant="contained" sx={{}} startIcon={<CurrencyExchangeIcon />} />
            </Link>
        <Typography>Kup nam kawę :)</Typography>
            <Link to='/Thanks'>
                <Button variant="contained" sx={{}} startIcon={<CoffeeIcon/>} />
            </Link>
        </div>
        </>
  )
}

export default HomePage