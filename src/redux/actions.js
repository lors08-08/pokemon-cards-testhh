export function loadCards() {
  return (dispatch) => {
    dispatch({ type: "cards/load/start" });
    fetch("https://api.pokemontcg.io/v1/cards")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cards/load/succeed",
          payload: json.cards,
        });
      })
      .catch(() => {
        dispatch({
          type: "cards/load/error",
        });
      });
  };
}
