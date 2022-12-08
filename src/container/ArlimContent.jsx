import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ArlimMain from '../components/Arlim/ArlimMain';
import ArlimWrite from '../components/Arlim/ArlimWrite';

function ArlimContent(props) {
    return (
        <>
        <Routes>
          <Route path='*' element={<ArlimMain/>}/>
          <Route path='edit' element={<ArlimWrite/>}/>
        </Routes>
      </>
    );
}

export default ArlimContent;