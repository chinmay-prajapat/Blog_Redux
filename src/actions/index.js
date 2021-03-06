import jsonPlaceholder from "../Apis/jsonPlaceholder";
import _ from "lodash";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
};
