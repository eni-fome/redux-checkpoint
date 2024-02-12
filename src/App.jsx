import React from 'react';
import { connect } from 'react-redux';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import { addTask } from './redux/actions';

function App({ tasks, addTask }) {
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
