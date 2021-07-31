import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDoListItem from '../ToDoListItem'
import './index.css'

export default class ToDoList extends Component {

    static propTypes = {
        todoList: PropTypes.array.isRequired,
        modifyChecked: PropTypes.func.isRequired

    }

    render() {
        const {todoList, modifyChecked, handleDelete} = this.props
        return (
            <ul className="todolist">
                {
                    todoList.map(todo => {
                        return <ToDoListItem {...todo} key={todo.id} modifyChecked = {modifyChecked} handleDelete = {handleDelete} />
                    })
                }
            </ul>
        )
    }
}
