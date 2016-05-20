var React = require('react')
import Task from './Task'
import TaskList from './TaskList'

const taskList = [
    {title: '#01 Primeira', category: 'Esportiva', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {title: '#02 Segunda', category: 'Charada', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {title: '#03 Quarta!', category: 'Artística', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
]

export default class TasksScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedTask: taskList.length - 1
        }
    }
    onSelectTaskHandler(selectedTask){
        this.setState({selectedTask})
    }
    render(){
        let onSelectTaskHandler = this.onSelectTaskHandler.bind(this)
        let currentTask = taskList[this.state.selectedTask]
        return(
            <div>
                <TaskList
                    tasks={taskList}
                    onSelect={onSelectTaskHandler}/>
                <Task {...currentTask}/>
            </div>
        )
    }
}
