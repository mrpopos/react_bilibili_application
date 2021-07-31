import React, { Component } from 'react'
import './index.css'

export default class ToDoListItem extends Component {
    state = {mouse: false}

    render() {
        // console.log(this.props)
        const {id, name, status} = this.props
        return (
            <li className="item" style={{backgroundColor: this.state.mouse ? '#DDDDDD' : '#FFFFFF'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label htmlFor=""><input type="checkbox" name="list" checked={status} onChange={this.handleChecked(id)} />&nbsp;&nbsp;{name}</label>
                <button onClick={this.handleDelete(id)} style={{display: this.state.mouse ? 'block' : 'none'}}>delete</button>
            </li>
        )
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleChecked = (id) => {
        const {modifyChecked} = this.props
        return (event) => {
            // console.log(id, event.target.checked)
            modifyChecked(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        const {handleDelete} = this.props
        return event => {
            if (window.confirm('你确定删除吗？')) {
                handleDelete(id)
            }
        }
    }
}
