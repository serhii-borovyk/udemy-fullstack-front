import {DELETE_PROJECT, GET_PROJECT, GET_PROJECTS, ON_INPUT_CHANGE} from "../actions/types";

const initialState = {
    projects: [],
    project: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(p => p.projectIdentifier !== action.payload)
            };
        case ON_INPUT_CHANGE:
            const {name, value} = action.payload;
            state.project[name] = value;
            return {
                ...state,
                project: {...state.project}
            };
        default:
            return state;
    }

};