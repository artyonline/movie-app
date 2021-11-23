import axios from "axios";
const apiUrl = "http://localhost:5000/api/";

export const upsertWishList =
  ({ movieId, userId }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}wishlist`, {
        userId,
        movieId,
      });
      if (response.status === 200) {
        dispatch({
          type: "SET_SUCCESS",
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: "ERROR",
        data: e,
      });
    }
  };

export const getWishlist = (userId) => async (dispatch) => {
  const response = await axios.get(`${apiUrl}wishlist?id=${userId}`);
  console.log("getWishlist: ", response);
  dispatch({
    type: "SET_WISHLIST",
    data: response.data,
  });
};
