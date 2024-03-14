import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Login from './Component/Login'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'

// const Home = React.lazy(() => import("./Component/Home"))


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}>Signup</Route>

          {/* <Route path='/login' element={<Login />}>Login </Route> */}
          {/* <Route path='/home' element={<Suspense fallback="Loading....1"> */}
            {/* <Home /> */}
          {/* </Suspense>}> */}
            {/* Home */}
          {/* </Route> */}
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App