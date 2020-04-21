import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 10,
  },
  media: {
    height: 350,
  },
});

export const IdCard = ({
  picture,
  lastName,
  firstName,
  gender,
  height,
  birth,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
          title={firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2" component="h4">
            <strong>Gender: </strong>
            {gender}
          </Typography>
          <Typography variant="body2" component="h4">
            <strong>Height: </strong>
            {height}
          </Typography>
          <Typography variant="body2" component="h4">
            <strong>Birth: </strong>
            {birth.toString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
