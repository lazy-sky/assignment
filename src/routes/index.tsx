import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'
import Header from 'components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/issue'>
          <Route path=':issueNumber' element={<Detail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
