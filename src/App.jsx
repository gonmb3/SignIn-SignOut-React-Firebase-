import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';

import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div className ="bg-slate-300 h-screen">
      <ToastContainer />
        <h1 className='text-center text-3xl font-bold'>Firebase Auth y Context </h1>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
    </div>
  )
}

export default App