import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import { useAuthContext } from './providers/AuthProvider';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import SideNav from './components/sidenav/SideNav';
import Completed from './pages/orders/completed/Completed';
import InProgress from './pages/orders/in-progress/InProgress';
import Profile from './pages/profile/Profile';
import Notification from './pages/notification/Notification';
import OrderView from './pages/orders/order-view/OrderView';

function App() {
  const { userToken } = useAuthContext();

  const Main = ()  => {

    return (
      <>
        <main className="app">
          <SideNav />
          <div className='app-main-content'>
            <Navbar />
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Dashboard />}/> 
                <Route path='/in-progress' element={<InProgress/>}/> 
                <Route path='/completed'element={<Completed/>}/>
                <Route path='/profile'element={<Profile/>}/>
                <Route path='/notifications'element={<Notification/>}/>
                <Route path='/order/:orderId' element={<OrderView/>}/>
              </Routes> 
            </div>   
          </div>                  
        </main>       
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/app/*' element={userToken?<Main/>:<Login/>}/>
      </Routes>
    </>
  )
}

export default App