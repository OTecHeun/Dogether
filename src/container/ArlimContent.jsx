import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ArlimMain from '../components/Arlim/ArlimMain';
import ArlimWrite from '../components/Arlim/ArlimWrite';

function ArlimContent(props) {
    return (
        <>
        <div>
            <div className='menuTitle'>알림장</div>
        </div>
        <div className='buttons'>
            <button className='selectDate'>날짜선택</button>
          <Link to={'edit'}>
            <button className='pencil'>작성하기</button>
          </Link>
        </div>
        <Routes>
          <Route path='*' element={<ArlimMain/>}/>
          <Route path='edit' element={<ArlimWrite/>}/>
        </Routes>
      </>
    );
}

export default ArlimContent;