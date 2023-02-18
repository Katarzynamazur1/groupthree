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
        <div style={{columns:2, margin: 20, justifyItems:"center"}}>
            <div style={{margin:2}}>
                <Typography variant='h2' sx={{fontSize:20, textAlign:"center"}}>Exchange your money!
                </Typography>
                <Link to='/'>
                    <Fab color="success" sx={{mt:2, alignContent:"center"}}>
                        <CurrencyExchangeIcon/>
                    </Fab>
                </Link>
            </div>
            <div style={{margin:2}}>
                <Typography variant='h2' sx={{fontSize:20, textAlign:"center"}}>Kup nam kawę :)
                </Typography>
                <Link to='/Thanks'>
                    <Fab color="success" sx={{mt:2,  alignContent:"center"}}> 
                        <CoffeeIcon /> 
                    </Fab>
                </Link>
            </div>
        </div>
        </>
  )
}

export default HomePage