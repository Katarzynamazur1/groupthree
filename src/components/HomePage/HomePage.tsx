import React from 'react'; 
import Typography from "@mui/material/Typography";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Button from "@mui/material/Button";
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';

const HomePage = () => {
  return (
    <>
        <Typography variant='h1' component='div' mt={2} sx={{fontSize:40, textAlign:"center"}}>
Witaj w <br /> TWOIM kantorze
        </Typography>
        <div style={{alignContent:"center", margin: 20}}>
        <Typography variant='h2' sx={{fontSize:20, my:2}}>Exchange your money!</Typography>
            <Link to='/'>
                <Fab color="success" >
                    <CurrencyExchangeIcon/>
                </Fab>
            </Link>
        <Typography variant='h2' sx={{fontSize:20, my:2}}>Kup nam kawę :)</Typography>
            <Link to='/Thanks'>
                <Fab color="success"> <CoffeeIcon /> </Fab>
            </Link>
        </div>
        </>
  )
}

export default HomePage