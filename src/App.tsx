import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './app/store'
import { increment } from './features/counter/counterSlice'
import { DatePicker } from 'antd'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const countValue = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h4>State</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h4>Redux</h4>
        <button onClick={() => dispatch(increment())}>
          countValue is {countValue}
        </button>

        <h4>Ant Design</h4>
        <DatePicker />
        <h4>React Router</h4>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<div>Home page</div>} />
          <Route path='/items' element={<div>Items page</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
