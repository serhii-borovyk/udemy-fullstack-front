import {GET_PROJECT, GET_PROJECTS, ON_INPUT_CHANGE} from "../actions/types";

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
        case ON_INPUT_CHANGE:
            const {project} = state;
            const {name, value} = action.payload;
            project[name] = value;
            return {
                ...state
            };
        default:
            return state;
    }

};