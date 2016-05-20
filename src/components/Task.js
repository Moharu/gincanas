var React = require('react')

export default class Task extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.category}</h3>
                <span>{this.props.content}</span>
            </div>
        )
    }
}

Task.propTypes = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    category: React.PropTypes.string
}
