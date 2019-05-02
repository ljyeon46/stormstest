import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextButtons from '../PageTemplate/Buttons';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5D6064', //메인회색
    },
    secondary: {
      main: '#ECECEC', //탭아래색
      contrastText: '#5D6064', //알림배너 글씨색
    },
   },
});



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    fontsize : 22,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },

});

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            STORMS
          </Typography>
          <TextButtons/>
          <div className={classes.grow} />
          <div>
              <Badge className={classes.margin} badgeContent={10} color="secondary">
                <MailIcon />
              </Badge>
            </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);