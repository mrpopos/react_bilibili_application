import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class ToDoHeader extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired

    }
    
    render() {
        return (
            <div className="header">
                <input onKeyUp={this.handleKeyUp} type="text" name="option" className="todoheader" placeholder="输入你的任务名称，按回车键确认" />
            </div>
        )
    }

    handleKeyUp = (event) => {
        const {addTodo}=this.props
        const {target, keyCode} = event
        if (target.value.trim() !== '' && keyCode === 13) {
            addTodo({id: nanoid(), name: event.target.value, status: false})
            target.value = ''
        }
    }
}
