import React, {Component} from 'react';
import TodoInfo from "./TodoInfo";
import "bootstrap/dist/css/bootstrap.min.css";

class TodoInfoList extends Component {
    render() {

        const {Task_Todo,Tasks,EditTask,Edit_Task} = this.props;
        const {TaskChangeHandler,AddTaskToDo,DeleteTask,CompleteTodo} = this.props;

        return (
            <div className="card card-body my-4 bg-transparent">

                {/*Add New To-Do*/}

                <form onSubmit={AddTaskToDo}>
                    <div className="input-group mt-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-warning text-dark">
                                <i className="fas fa-book"> Add New </i>
                            </div>
                        </div>
                        <input type="text"
                               className="form-control bg-transparent text-white"
                               placeholder="Add Your's To-Do"
                               value={Task_Todo}
                               onChange={TaskChangeHandler}
                        />
                    </div>
                    <button type="Change"
                            className={ Edit_Task ? "btn btn-success text-white mt-4 ": "btn btn-warning text-white mt-4"
                            }>
                        {Edit_Task? "Edit To-Do" : "Add To-Do"}
                    </button>
                </form>
                {/*---------------------------------------------------------------------------------------------------------------------------*/}
                {/*To-Do List*/}

                <form>

                    <ul className="list-group my-4">
                        <h3 className="text-center text-break text-white"><u> Your's To-Do List </u> </h3>

                        {
                            Tasks.map(Task => {
                                return (
                                    <TodoInfo key = {Task_Todo.Task_id}
                                              title={Task.title}
                                              Completed={Task.completed}
                                              DeleteTask={() => DeleteTask(Task.Task_id)}
                                              EditTask={() => EditTask(Task.Task_id)}
                                              CompleteTodo={() => CompleteTodo(Task.Task_id)}
                                    />
                                )
                            })
                        }

                    </ul>
                </form>
            </div>
        );
    }
}

export default TodoInfoList;