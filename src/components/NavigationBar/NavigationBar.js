import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import logo from './Logo.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({
  root: {
    width: '100%',
    height :50,
    background :'#ffffff',
  },
  toolbar :{
    marginLeft :100,
    marginRight :100,
    color : '#ffffff',
  },
  grow: {
   flexGrow: 1,
 },
  menuButton: {
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    marginTop: -8,
    paddingBottom: -6,
    display :'flex',
    borderRadius: theme.shape.borderRadius,
    border :'solid',
    borderColor: '#000000',
    borderWidth :'thin',
    marginLeft: 50,
    width: '70%',

  },
  citybutton: {
    display: 'inline-block',
    marginTop :6,
    background :'#f0f0f0',
    borderRadius : 2,
    padding :'5px 14px',
    fontSize :'12px',
    width :'18%',
    textAlign:'left',
    cursor: 'pointer',
    color :'#4d4d4d',
    height :'25px',
    position :'relative',
    top :'1px',
    left :'4px',
  },
  typography :{
    fontSize :10,
  },
  inputRoot: {
    color: '#0000000',
    width: '100%',
    marginLeft : 50,
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft :-200,
    width: '100%',
  },
  menuitems:{
    '&:hover': {
      backgroundColor: '#000000',
      color :'#ffffff'
    },
  }
});

class NavigationBar extends React.Component{
  state ={
    cityanchor :null,
  }

  handleCityListClose = () => {
      this.setState({ cityanchor: null });

    };

    handleCitylistOpen = event => {
        this.setState({ cityanchor: event.currentTarget });
      };

  render(){
    const { classes } =this.props;
    const { cityanchor } = this.state;
    const isListOpen = Boolean(cityanchor);
    const rendercityMenu = (
          <Menu
            anchorEl={cityanchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isListOpen}
            onClose={this.handleCityListClose}
          >
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Ahemdabad</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Banglore</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Chandigarh Tricity</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Chennai</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Delhi NCR</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Dubai</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Hyderabad</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Jaipur</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Kolkata</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Mumbai</MenuItem>
            <MenuItem className={classes.menuitems} onClick={this.handleCityListClose}>Pune</MenuItem>
          </Menu>
        );



    return (
      <div >
      <AppBar position="fixed" className={classes.root}>
      <Toolbar className ={classes.toolbar}>
      <Typography className={classes.title} variant="h6" color="primary" noWrap>
      <img alt=' ' src ={logo } height ='35px' width ='140px'/>
      </Typography>

      <div className={classes.search}>
        <div  className={classes.citybutton} onClick={this.handleCitylistOpen} >
        delhi ncr
        </div>
        <input
        placeholder="Enter your locality here"
        style={{    marginLeft: '2%',
                    top: '3px',
                    width: '40%',
                    display: 'inline-block',
                    height: '34px',
                    border: 'none',
                    borderRight: '1px solid #ccc',
                    fontSize: '12px',
                    color: '#666',
                  }
                }
        />
        <input
        placeholder="Search for a services"
        style ={{
           marginLeft: '2%',
          top: '3px',
          width: '40%',
          display: 'inline-block',
          height: '34px',
          border: 'none',
          fontSize: '12px',
          color: '#666',
        }
      }
        />
      </div>
      <div className={classes.grow}/>

      <IconButton className={classes.menuButton}  aria-label="Open drawer">
      <MenuIcon />
      </IconButton>
      </Toolbar>
      </AppBar>
      {rendercityMenu}
      </div>
    );
  }
}


NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
