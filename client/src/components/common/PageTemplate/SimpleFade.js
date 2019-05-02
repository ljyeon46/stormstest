import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Treeview from './Treeview';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleFade extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <div className={classes.container}>
          <Fade in={checked}>
            <Paper elevation={8} className={classes.paper}>
                <Treeview/>
            </Paper>
          </Fade>
        </div>
      </div>
    );
  }
}

SimpleFade.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleFade);