import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    border: 'none',
    margin: '5px',
    width: 90,
    height: 42,
    borderRadius: 6,
    font: '17px sans-serif',
    textTransform: 'capitalize',
    cursor: 'pointer',
    color: 'white',
    backgroundSize: '150%',
    transition: '0.4s',
    backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  signIn: {
    border: 'none',
    margin: '5px',
    width: 100,
    height: 45,
    borderRadius: 10,
    font: '17px sans-serif',
    textTransform: 'capitalize',
    cursor: 'pointer',
    color: 'white',
    backgroundSize: '150%',
    transition: '0.4s',
    backgroundImage: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)',
  },
}));