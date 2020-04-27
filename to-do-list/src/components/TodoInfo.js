import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class TodoInfo extends Component {
    render() {

        const {title,Completed} = this.props;
        const {DeleteTask,EditTask,CompleteTodo} = this.props;

        return (
            <li className="list-group-item d-flex justify-content-between my-3 bg-transparent text-white">

                {/*Show Description*/}
                <span>
                    {Completed ? <h6><del>{title}</del></h6> : <h6>{title}</h6>}
                </span>

                <div className="icons">
                    {/*Edit*/}
                    {Completed ? null :

                        <span className="text-success mx-3"
                              onClick={EditTask}
                        >
                            <i className="fa fa-pencil-square-o"></i>
                        </span>
                    }

                    {/*Completed*/}
                    {Completed ? 'Completed !!!' :
                        <span className="text-info mx-3"
                              onClick={CompleteTodo}
                        >
                            <i className="fa fa-check-square-o"></i>
                        </span>
                    }

                    {/*Delete*/}
                    <span className="text-danger mx-3"
                          onClick={DeleteTask}
                    >
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoInfo;