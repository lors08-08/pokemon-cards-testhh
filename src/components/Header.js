import React from "react";
import CachedIcon from "@material-ui/icons/Cached";
import styles from "./Header.module.css";
import { Fab } from "@material-ui/core";

function Header() {
  return (
    <div className={styles.header}>
      <Fab
        onClick={() => {
          window.location.reload();
        }}
        color="primary"
        aria-label="add"
      >
        <CachedIcon fontSize="large" />
      </Fab>
    </div>
  );
}

export default Header;
