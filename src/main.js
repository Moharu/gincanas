var React = require('react')
var ReactDOM = require('react-dom')
import TasksScreen from './components/TasksScreen'

var horizon = Horizon()
horizon.onReady(function() {
});
horizon.connect()

const selectTask = (i) => {
    console.log('SELECTED TASK #'+i)
}

ReactDOM.render(
  <div>
    <TasksScreen/>
  </div>,
  document.getElementById('content')
);
