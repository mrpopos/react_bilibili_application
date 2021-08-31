import React, {useState} from 'react'
import './index.css'

export default function People(props) {
  // console.log(props)

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([{ text: '学习 Hook' }])
  
  return (
    <div className="use-state">
      <h3>函数式组件使用useState Hook</h3>
      <p>姓名：{props.name} - 年龄：{props.age}</p>
      <p onClick={() => setTodos([{text: '打篮球'}, ...todos])}>待做事项：{todos[0].text}</p>
      <p>当前人数： {count}</p>
      <button onClick={() => setCount(count + 1)}>点击自增</button>
    </div>
  )
}
