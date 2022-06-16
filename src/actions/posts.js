import {
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT_POST,
} from "../actionType/actions";

export const postAdministrativeDocuments = (newPost) => {
  return (dispatch) => {
    dispatch({ type: CREATE_POST, payload: newPost });
  };
};

//   export const postAdministrativeDocuments = (document, callbackFun) => {
//     return (dispatch) => {
//       dispatch(fetchStart());
//       crudApp
//         .post("documents", document)
//         .then(data => {
//           if (data.status === 200 || data.status === 201) {
//             dispatch(fetchSuccess("New document was added successfully."));
//             dispatch({ type: POST_ADMINISTRATIVE_DOCUMENTS, payload: data.data });
//             if (callbackFun) callbackFun(data.data);
//           } else {
//             dispatch(
//               fetchError("Il y a eu un problème. Merci de réessayer.")
//             );
//           }
//         })
//         .catch(error => {
//           dispatch(fetchError("Il y a eu un problème. Merci de réessayer"));
//         });
//     };

//   };

export const setCurrentPost = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_POST, payload: data });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST, payload: id });
  };
};

export const editPost = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_POST, payload: data});
  };
};
