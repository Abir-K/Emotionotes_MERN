import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [ formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) =>{
       e.preventDefault();

       if(isSignup){
           dispatch(signup(formData,navigate))
       } else{
           dispatch(signin(formData,navigate))
       }
    };

    const handleChange = (e) =>{
        setFormData({ ... formData, [ e.target.name]: e.target.value});
    };

    const switchMode = () =>{
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
       const result = res?.profileObj;
       const token = res?.tokenId;

       try {
          dispatch({type: 'AUTH', data: { result, token } });
          navigate("/"); 
       } catch (error) {
           console.log(error);
       }
    };

    const googleFailure = () => {
        console.log('Unsuccessful Login :( Try Later');
    };

    return (
       <Container component="main" maxWidth="xs">
           <Paper className={classes.paper} elevation={3}>
               <Avatar className={classes.avatar}>
                   <LockOutlinedIcon />
               </Avatar>
               <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
               <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2}>
                       {
                           isSignup && (
                               <>
                                   <Input name= "firstName" label="First Name" handleChange = {handleChange} autoFocus half />
                                   <Input name= "lasttName" label="Last Name" handleChange = {handleChange} half />
                               </>
                           )}
                           <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                           <Input name="password" label="Password" handleChange={handleChange} type="email" type= {showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                           {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                   </Grid>
                   <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                       {isSignup ? 'Sign Up' : 'Sign In' }
                   </Button>
                   <GoogleLogin 
                       clientId= "120108347913-nvhmdjbjpgto1pft8f4vbeejrk1m71kp.apps.googleusercontent.com"
                       render={(renderProps) => (
                           <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                               Sign In With Google
                           </Button>
                       )}
                       onSuccess={googleSuccess}
                       onFailure={googleFailure}
                       cookiePolicy="single_host_origin"
                   />
                   <Grid container justify="flex-end">
                       <Grid item>
                           <Button onClick={switchMode}>
                               { isSignup ? 'Already Member ! Sign In' : 'Not Member ? Sign Up'}
                           </Button>
                       </Grid>
                   </Grid>
               </form>
           </Paper>
       </Container>
    );
};

export default Auth;
