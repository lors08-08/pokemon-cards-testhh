export function loadCards() {
  return (dispatch) => {
    dispatch({ type: "cards/load/start" });
    fetch("https://api.pokemontcg.io/v1/cards")
      .then((response) => response.json())
      .then((json) => {
        const n = 15;
        const shuffled = json.cards.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, n);
        dispatch({
          type: "cards/load/succeed",
          payload: selected,
        });
      })
      .catch(() => {
        dispatch({
          type: "cards/load/error",
        });
      });
  };
}
