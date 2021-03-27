import React from "react";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCards } from "./redux/actions";
import Loader from "./components/Loader";
import Body from "./components/Body";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  if (loading || error) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
