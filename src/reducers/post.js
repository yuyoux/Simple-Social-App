// no side effects
const post = (state = {}, action) => {
  switch (action.type) {
    case "GET_POST_START": {
      // generate and return updated state
      // to put in store
      return {
        ...state
      };
    }

    case "GET_POST_SUCCEEDED": {
      return {
        ...state,
        postlist: action.list
      };
    }

    case "GET_POST_FAILURE": {
      return {
        ...state
      };
    }

    case "GET_COMMENT_START": {
      // generate and return updated state
      // to put in store
      return {
        ...state
      };
    }

    case "GET_COMMENT_SUCCEEDED": {
      return {
        ...state,
        commentlist: action.list
      };
    }

    case "GET_COMMENT_FAILURE": {
      return {
        ...state
      };
    }

    case "SUBMIT_COMMENT_START": {
      // generate and return updated state
      // to put in store
      return {
        ...state
      };
    }

    case "SUBMIT_COMMENT_SUCCEEDED": {
      return {
        ...state,
        flag: action.flag
      };
    }

    case "SUBMIT_COMMENT_FAILURE": {
      return {
        ...state,
        flag: action.flag
      };
    }

    case "SUBMIT_POST_START": {
      // generate and return updated state
      // to put in store
      return {
        ...state
      };
    }

    case "SUBMIT_POST_SUCCEEDED": {
      return {
        ...state,
        flag: action.flag
      };
    }

    case "SUBMIT_POST_FAILURE": {
      return {
        ...state,
        flag: action.flag
      };
    }

    default:
      return state;
  }
};
export default post;
