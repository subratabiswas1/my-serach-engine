import React from 'react';
import {ThreeCircles} from 'react-loader-spinner';
const Loading = () => {
  return (
    <>
        <div className='flex justify-center items-center'>
          <ThreeCircles color='#00BFFF' height={550} width={80}/>
        </div>
    </>
  )
}
export default Loading;