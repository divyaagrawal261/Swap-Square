import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
