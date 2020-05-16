import React, {Component} from 'react';
import TodoInfoList from "./TodoInfoList";

class TodoMain extends Component {

    state = {
        Tasks:[],
        Task_id:0,
        Task_Todo:"",
        Edit_Task:false
    };

    TaskChangeHandler = (Todo) => {

        this.setState({
            Task_Todo: Todo.target.value
        });
    };

    AddTaskToDo = Todo =>{

        Todo.preventDefault();

        if(this.state.Task_Todo !== ""){

            const NewTask = {

                Task_id:this.state.Task_id,
                title:this.state.Task_Todo,
                completed:false
            };
            const TaskUpdate = [NewTask, ...this.state.Tasks];

            this.setState({
                Tasks:TaskUpdate,
                Task_Todo:'',
                Task_id:Date.now(),
                Edit_Task:false
            })

        }

    };

    CompleteTodo = Task_id =>{

        let tempTask = [...this.state.Tasks];

        const Todocompleted = this.state.Tasks.find(Task_Todo => Task_Todo.Task_id === Task_id);
        const index = tempTask.indexOf(Todocompleted);
        tempTask[index].completed = true;

        const NewTasks = this.state.Tasks.filter(Task_Todo => Task_Todo.Task_id !== Task_id);

        this.setState({

            Tasks:NewTasks.concat(Todocompleted),
        });

    };

    EditTask = (Task_id) =>{

        const selectedtask = this.state.Tasks.filter(Task_Todo => Task_Todo.Task_id !== Task_id);

        const TakeTask = this.state.Tasks.find(Task_Todo => Task_Todo.Task_id === Task_id);

        this.setState({

            Tasks:selectedtask,
            Task_Todo:TakeTask.title,
            Edit_Task:true,
            Task_id:Task_id
        });

    };

    DeleteTask = (Task_id) => {

        const selectedtask = this.state.Tasks.filter(Task_Todo => Task_Todo.Task_id !== Task_id);

        this.setState({
            Tasks: selectedtask
        });

    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className=" border border-white col-8 mx-auto col-8 mx-3 mt-5 p-3">
                        <div className= "mt-5">
                            <h4 className="text-center text-white">
                                Welcome to To-Do App !!!
                            </h4>
                            <h5 className="text-center text-warning">
                                Make your Life Easier...
                            </h5>
                        </div>
                        <TodoInfoList
                            Tasks={this.state.Tasks}
                            Task_Todo={this.state.Task_Todo}
                            Edit_Task={this.state.Edit_Task}
                            TaskChangeHandler={this.TaskChangeHandler}
                            AddTaskToDo={this.AddTaskToDo}
                            EditTask={this.EditTask}
                            DeleteTask={this.DeleteTask}
                            CompleteTodo={this.CompleteTodo}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoMain;