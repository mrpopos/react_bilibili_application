import './App.css';
import ToDoHeader from './components/ToDoHeader'
import ToDoList from './components/ToDoList'
import ToDoFooter from './components/ToDoFooter'
import AxiosDemo from './components/AxiosDemo'
import { Component } from 'react';

export default class App extends Component {

  state = {todoList: [
    {id: 1, name: '吃饭', status: true},
    {id: 2, name: '睡觉', status: true},
    {id: 3, name: '打豆豆', status: false},
    {id: 4, name: '打篮球', status: false}
  ]}

  render() {
    const {todoList} = this.state
    return (
      <div className="App">
        <ToDoHeader addTodo={this.addTodo}/>
        <ToDoList todoList = {todoList} modifyChecked = {this.modifyChecked} handleDelete = {this.handleDelete} />
        <ToDoFooter todoList = {todoList} handleCkeckAll = {this.handleCkeckAll} clearAllDone = {this.clearAllDone}/>
        <AxiosDemo />
      </div>
    );
  }

  addTodo = (data) => {
    const {todoList} = this.state
    this.setState({todoList: [data, ...todoList]})
  }

  modifyChecked = (id, status) => {
    const {todoList} = this.state
    const newTodo = todoList.map(todo => {
      if (todo.id === id) return {...todo, status}
      else return todo
    })
    this.setState({todoList: newTodo})
  }

  handleDelete = (id) => {
    const {todoList} = this.state
    const newTodo = todoList.filter(todo => {
      return todo.id !== id
    })
    this.setState({todoList: newTodo})
  }

  handleCkeckAll = (status) => {
    const {todoList} = this.state
    const newTodo = todoList.map(todo => {
      return {...todo, status}
    })
    this.setState({todoList: newTodo})
  }

  clearAllDone = () => {
    const {todoList} = this.state
    const newTodo = todoList.filter(todo => {
      return !todo.status
    })
    console.log(newTodo)
    this.setState({todoList: newTodo})
  }
}
