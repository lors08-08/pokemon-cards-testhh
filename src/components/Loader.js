import React from "react";
import { CircularProgress } from "@material-ui/core";
import styles from "./Header.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <CircularProgress size={"5em"} />
    </div>
  );
}

export default Loader;
