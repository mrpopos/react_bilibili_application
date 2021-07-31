import React, { Component } from 'react'

export default class ToDoFooter extends Component {

    render() {
        const {todoList} = this.props
        const done = todoList.reduce((pre, current) => pre + (current.status ? 1 : 0), 0)
        return (
            <div>
                <input type="checkbox" name="select" checked = {done === todoList.length && todoList.length !== 0} onChange={this.handleTotalSelect} />&nbsp;&nbsp;&nbsp;&nbsp;已完成{done} / 全部{todoList.length}
                <button onClick={this.clearAllDone}>清楚全部已完成</button>
            </div>
        )
    }

    handleTotalSelect = (event) => {
        const {handleCkeckAll} = this.props
        const {target} = event
        handleCkeckAll(target.checked)
    }

    clearAllDone= ()=> {
        const {clearAllDone} = this.props
        clearAllDone()
    }
}
