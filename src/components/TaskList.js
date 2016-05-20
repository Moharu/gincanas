var React = require('react')

const extractTaskCategories = (tasks) => {
    return tasks.map((task) => task.category).filter((cat, i, arr) => {
        return cat && (arr.indexOf(cat) === -1)
    })
}

export default class TaskList extends React.Component {
    render() {
        let taskCategories = extractTaskCategories(this.props.tasks)
        console.log(taskCategories)
        return(
            <div>
                <ul>
                {taskCategories.map((category, i) => {
                    console.log(category)
                    return(
                        <li style={filterStyle} key={i}>
                            {category}
                        </li>
                    )
                })}
                </ul>
                <ul>
                {this.props.tasks.map((task, i) => {
                    return(
                        <li key={i} onClick={ () => {
                            this.props.onSelect && this.props.onSelect(i)
                        }}>
                        {task.title}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

TaskList.propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onSelect: React.PropTypes.func
}

const filterStyle = {
    display: 'inline',
    'marginRight': '3px'
}
