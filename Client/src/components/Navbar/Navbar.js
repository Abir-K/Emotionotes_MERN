import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import emotionoteslogo from '../../images/emotionoteslogo.png';
import emotionotestext from '../../images/emotionotestext.png';

const Navbar = () => {
    const classes = useStyles();
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const logout = () =>{
        dispatch({ type: 'LOGOUT'});

        navigate("/");

        setUser(null);
    }
    useEffect(() => {
        const token = user?.token;
        
        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/"className={classes.brandContainer} >
          <img src={emotionotestext} alt="icon" height="50px" />
          <img className={classes.image} src={emotionoteslogo} alt="icon" height="65px" />
      </Link>
      <Toolbar className={classes.toolbar}>
         {user ? (
             <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
             </div>
         ) : (
             <Button className={classes.signIn} component={Link} to = "/auth" variant="contained" >Sign In</Button>
         )}
      </Toolbar>
    </AppBar>
   );
};

export default Navbar;
