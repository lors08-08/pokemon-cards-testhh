import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    marginLeft: 30,
    padding: 10,
    boxShadow:"none"
  },
}));

function CardInfo({ card, handleClickOpen }) {
  const classes = useStyles();
  const history = useHistory();

  const openCard = (card) => {
    history.push(`details/${card.id}`);
    handleClickOpen();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => openCard(card)}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="500"
          image={card.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <ul>
              <li>
                nationalPokedexNumber:<b>{card.nationalPokedexNumber}</b>
              </li>
              <li>
                types:<b>{card.types}</b>
              </li>
              <li>
                supertype:<b>{card.supertype}</b>
              </li>
              <li>
                subtype:<b>card.subtype</b>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardInfo;
