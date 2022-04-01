import { setAlert } from "./alertAction";

import {
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "../actionTypes/profileActionTypes";
import { HTTPS_METHODS, restClient } from "../../utils/restClient";

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  try {

    const res = await restClient({
      method: HTTPS_METHODS.GET,
      url: "/api/profile",
    });

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await restClient({
      method: HTTPS_METHODS.GET,
      url: `api/profile/user/${userId}`,
    });
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Get github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = restClient({
      method: HTTPS_METHODS.GET,
      url: `api/profile/github/${username}`,
    });
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  // dispatch({type: CLEAR_PROFILE});

  try {
    const res = await restClient({
      method: HTTPS_METHODS.GET,
      url: "api/profile/me",
    });
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Create or update profile
export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const res = await restClient({
        method: HTTPS_METHODS.POST,
        url: "/api/profile",
        body: formData,
      });
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? "Profile updated" : "Profile Created", "success")
      );

      if (!edit) {
        navigate("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusTest, status: err.response.state },
      });
    }
  };

// Add experience
export const addExperiece = (formData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = restClient({
      method: HTTPS_METHODS.PUT,
      url: "/api/profile/experience",
      body: formData,
    });
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience added", "success"));
    navigate("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.state },
    });
  }
};

// Add education
export const addEducation = (formData, navigate) => async (dispatch) => {
  try {
    const res = await restClient({
      method: HTTPS_METHODS.PUT,
      url: "/api/profile/education",
      body: formData,
    });
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education added", "success"));
    navigate("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.state },
    });
  }
};

// Delete experince
export const deleteExperince = (id) => async (dispatch) => {
  try {
    const res = await restClient({
      method: HTTPS_METHODS.DELETE,
      url: `api/profile/experience/${id}`,
    });
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Experince removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  console.log("hi");
  try {
    const res = await restClient({
      method: HTTPS_METHODS.DELETE,
      url: `api/profile/education/${id}`,
    })
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Education removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Delete account
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Want to delete account ? ")) {
    try {
      const res = await restClient({
        method: HTTPS_METHODS.DELETE,
        url: `api/profile`,
      })
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: DELETE_ACCOUNT,
      });

      dispatch(setAlert("You account has been permanantly deleted", "success"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusTest, status: err.response.status },
      });
    }
  }
};
