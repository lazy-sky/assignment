import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />}>
          <Route path=':id' />
        </Route>
      </Routes>
    </div>
  )
}

export default App
