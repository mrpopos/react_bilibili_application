import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function Tittle () {

  const [count, setCount] = useState(0)

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const showName = () => {
    // console.log(666)
    alert(myRef.current.value)
  }

  const myRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count+1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="use-effect">
      <h2>函数式组件使用useEffect、useRef</h2>
      <input ref={myRef} type="text" name="username" id="username" onBlur={showName} />
      <p>你点击了 {count} 次标题！</p>
      <button onClick={() => setCount(count => count + 1)}>点击自增</button>
      <button onClick={unmount}>卸载组件</button>
    </div>
  )
}
