import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


function ContainedButtons(props) {
    const { classes } = props;
       return (
      <div>
        <Button variant="contained" className={classes.button } onClick={() => {
            alert('추가하시겠습니까?')
        }}>
          추 가  
        </Button>
        <Button variant="contained" className={classes.button}  onClick={() => {
            alert('삭제하시겠습니까?')
        }}>
        삭  제
        </Button>
        </div>
  );
}
ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
export default withStyles(styles)(ContainedButtons);