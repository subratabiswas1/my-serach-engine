import React from 'react';
import { Route,Routes,Navigate } from 'react-router-dom';
import Results from './Results';
const Routers = () => {
  return (
    <>
      <div className='p-4'>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/search'/>}/> */}
          <Route exact path='/search' element={<Results/>}/>
          <Route exact path='/images' element={<Results/>}/>
          <Route exact path='/news' element={<Results/>}/>
          <Route exact path='/videos' element={<Results/>}/>
          <Route exact path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </>
  );
}
export default Routers;