import axios from "axios";
import { API_Address } from "../common/config";

export function getPostList() {
  return async dispatch => {
    dispatch({
      type: "GET_POST_START"
    });

    try {
      const url = API_Address + "/posts";
      const response = await axios({
        url: url,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      });
      dispatch({
        type: "GET_POST_SUCCEEDED",
        list: response.data
      });
    } catch (err) {
      dispatch({
        type: "GET_POST_FAILURE",
        error_message: err.response.data.message
      });
    }
  };
}

export function getCommentList({ data }) {
  return async dispatch => {
    dispatch({
      type: "GET_COMMENT_START"
    });

    try {
      const url = API_Address + `/posts/${data.id}/comments`;
      const response = await axios({
        url: url,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      });
      dispatch({
        type: "GET_COMMENT_SUCCEEDED",
        list: response.data
      });
    } catch (err) {
      dispatch({
        type: "GET_COMMENT_FAILURE",
        error_message: err.response.data.message
      });
    }
  };
}

export function submuitComment({ data }) {
  return async dispatch => {
    dispatch({
      type: "SUBMIT_COMMENT_START"
    });

    try {
      const url = API_Address + `/posts/${data.id}/comments`;
      let params = {};
      if (data.name) {
        params.name = data.name;
      }
      if (data.email) {
        params.email = data.email;
      }
      if (data.newComent) {
        params.body = data.newComent;
      }
      const response = await axios({
        url: url,
        method: "post",
        data: {
          ...params
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      dispatch({
        type: "SUBMIT_COMMENT_SUCCEEDED",
        flag: "success"
      });
    } catch (err) {
      dispatch({
        type: "SUBMIT_COMMENT_FAILURE",
        flag: "fail",
        error_message: err.response.data.message
      });
    }
  };
}

export function submuitPost({ data }) {
  return async dispatch => {
    dispatch({
      type: "SUBMIT_POST_START"
    });

    try {
      const url = API_Address + `/posts`;
      let params = {};
      if (data.content) {
        params.body = data.content;
      }
      if (data.title) {
        params.title = data.title;
      }
      if (data.userId) {
        params.userId = data.userId;
      }
      const response = await axios({
        url: url,
        method: "post",
        data: {
          ...params
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      dispatch({
        type: "SUBMIT_POST_SUCCEEDED",
        flag: "success"
      });
    } catch (err) {
      dispatch({
        type: "SUBMIT_POST_FAILURE",
        flag: "fail",
        error_message: err.response.data.message
      });
    }
  };
}
