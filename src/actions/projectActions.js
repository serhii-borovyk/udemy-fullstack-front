import axios from 'axios';
import {DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS, ON_INPUT_CHANGE} from "./types";

const proxy = "http://localhost:8080/api";

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post(proxy + "/project", project);
        console.log(res.data);
        history.push("/dashboard")
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const updateProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post(proxy + "/project", project);
        console.log(res.data);
        history.push("/dashboard")
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get(proxy + "/project/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
};

export const getProject = (id, history) => async dispatch => {
    try {
        const res = await axios.get(proxy + "/project/" + id);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })
    } catch (e) {
        history.push('/dashboard')
    }
};

export const deleteProject = (id) => async dispatch => {
    console.log("DELETE PROJECT ACTION", id);
    await axios.delete(proxy + "/project/" + id);
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    })
};

export const onInputChange = (name, value) => dispatch => {
    dispatch({
        type: ON_INPUT_CHANGE,
        payload: {
            name,
            value
        }
    })
};


