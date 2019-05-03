import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root:{
    flexGrow:1,
  },
  card: {
    margin: '70px  0  0  30px',
    maxWidth: 400,
  },
  nextcard: {
    margin: '70px  0  0  30px',
    maxWidth: 400,
  },
  calender : {
    margin: '70px  0  0  30px',
    height: 400,
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

});

class RecipeReviewCard extends React.Component {
  state = { 
    
   expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.root} spacing={8} justify="center">
         <Grid item xs={12} sm={3}>
        <Card className={classes.card} >
          <CardHeader
            title="STORMS 작동률"
            subheader="98%"
          />
          <CardContent>
            <Typography component="p">
              그래프넣기
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>자세히보기도표</Typography>
            </CardContent>
          </Collapse>
        </Card>
       </Grid>

       <Grid item xs={12} sm={3}>
        <Card className={classes.nextcard}>
          <CardHeader
            title="고객증감률"
            subheader="+8%"
          />
          <CardContent>
            <Typography component="p">
            자세히보기도표
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
            </CardContent>
          </Collapse>
        </Card>
       </Grid>

       <Grid item xs={12} sm={3}>
        <Card className={classes.nextcard}>
          <CardHeader
            title="예측적중률"
            subheader="65%"
          />
          <CardContent>
            <Typography component="p">
              자세히보기도표
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
            </CardContent>
          </Collapse>
        </Card>
       </Grid>

       <Grid item xs={12} sm={3}>
        <Card className={classes.calender}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="일정"
            subheader="현재시간"
          />
          <CardContent>
            <Typography component="p">
              캘린더
            </Typography>
          </CardContent>
        </Card>
       </Grid>

      </Grid>
    </div> 
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);