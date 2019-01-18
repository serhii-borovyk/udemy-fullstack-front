import React, {Component} from 'react';
import ProjectItem from "./project/ProjectItem";
import {CreateProjectButton} from "./project/CreateProjectButton";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                            <CreateProjectButton/>
                            <br/>
                            <hr/>
                            {this.props.projects && this.props.projects
                                .map(p => <ProjectItem key={p.id} project={p}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    projects: state.project.projects
});

export default connect(mapStateToProps, {getProjects})(Dashboard);