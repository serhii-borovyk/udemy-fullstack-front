import axios from 'axios';
import {GET_ERRORS, GET_PROJECTS} from "./types";

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

export const getProjects = () => async dispatch => {
    const res = await axios.get(proxy + "/project/all");
    dispatch ({
        type: GET_PROJECTS,
        payload: res.data
    })
};
