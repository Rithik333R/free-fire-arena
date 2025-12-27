import axios from "./axios";

export const getTournaments = () =>
  axios.get("/tournaments");
