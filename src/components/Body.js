import React from "react";
import { useSelector } from "react-redux";
import styles from "./Body.module.css";
import CardInfo from "./CardInfo";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { useHistory, useParams } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Body() {
  const history = useHistory();
  const cardId = useParams().id;

  const cards = useSelector((state) => state.items);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  const n = 15;
  const shuffled = cards.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, n);

  return (
    <div className={styles.table}>
      {selected.map((card) => {
        return (
          <CardInfo
            open={open}
            handleClickOpen={() => setOpen(true)}
            key={card.id}
            card={card}
          />
        );
      })}

      {cards.map((card) => {
        if (cardId === card.id) {
          return (
            <div key={card.id}>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <img alt="img" src={card.imageUrlHiRes} />
              </Dialog>
            </div>
          );
        } else return null;
      })}
    </div>
  );
}

export default Body;
