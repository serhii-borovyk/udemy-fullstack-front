import React, {Component} from 'react';
import {connect} from "react-redux";
import {getProject, onInputChange, updateProject} from "../../actions/projectActions";
import PropTypes from "prop-types"
import * as classnames from "classnames";

class UpdateProject extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    handleChange = e => {
        this.props.onInputChange(e.target.name, e.target.value)
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.updateProject(this.props.project);
    };

    render() {
        const {errors, project} = this.props;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Project form</h5>
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg", {
                                               "is-invalid": errors.projectName
                                           })}
                                           placeholder="Project Name"
                                           name="projectName"
                                           value={project.projectName}
                                           onChange={this.handleChange}/>
                                    {errors.projectName && (
                                        <div className="invalid-feedback">{errors.projectName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg", {
                                               "is-invalid": errors.projectName
                                           })}
                                           placeholder="Unique Project ID"
                                           name="projectIdentifier"
                                           value={project.projectIdentifier}
                                           onChange={this.handleChange}
                                           disabled
                                    />
                                    {errors.projectIdentifier && (
                                        <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <textarea className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.projectName
                                    })}
                                              placeholder="Project Description"
                                              name="description"
                                              value={project.description}
                                              onChange={this.handleChange}/>
                                    {errors.description && (
                                        <div className="invalid-feedback">{errors.description}</div>
                                    )}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="startDate"
                                           value={project.startDate}
                                           onChange={this.handleChange}/>
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="endDate"
                                           value={project.endDate}
                                           onChange={this.handleChange}/>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProject.propTypes = {
    updateProject: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    project: state.project.project
});

export default connect(mapStateToProps, {getProject, updateProject, onInputChange})(UpdateProject)
