import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
 

const styles = theme => ({
  button: {
    margin: '0  30px  0  30px',    
    fontSize: 17,
    color : grey[50],
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
     <div style={{ margin: '0  0  0  50px' }}> 
      <Button className={(classes.button)}>메 인</Button>
      <Button className={(classes.button)}>알 림</Button>
      <Button className={(classes.button)}>통계예측</Button>
      <Button className={(classes.button)}>좌표관리</Button>
      <Button className={(classes.button)}>고객관리</Button>

    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);