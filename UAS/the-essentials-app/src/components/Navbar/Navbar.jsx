import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'

import logo from '../../Assets/E.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div>
            <AppBar position = "fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="28px" className={classes.image}/>
                        𝘌 𝘴 𝘴 𝘦 𝘯 𝘵 𝘪 𝘢 𝘭 𝘴
                    </Typography>
                    <div className={classes.grow} />

                    <div className={classes.button}>
                        <IconButton component={Link} to="/about" aria-label="Show Cart Items" color="inherit">
                            <Typography>About</Typography>
                        </IconButton>
                    </div>

                    <div className={classes.button}>
                        <IconButton component={Link} to="/Login" aria-label="Show Cart Items" color="inherit">
                            <Typography>Login</Typography>
                        </IconButton>
                    </div>

                    <div className={classes.button}>
                        <IconButton component={Link} to="/Register" aria-label="Show Cart Items" color="inherit">
                            <Typography>Register</Typography>
                        </IconButton>
                    </div>


                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div> )}

                    

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
