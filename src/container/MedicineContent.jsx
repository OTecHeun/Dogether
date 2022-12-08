import React from 'react';
import '../resources/assets/sass/medicine.scss';
import { Link, Routes, Route } from 'react-router-dom';
import MedicineWrite from '../components/Medicine/MedicineWrite';
import MedicineTable from '../components/Medicine/MedicineTable';

function MedicineContent(props) {
    return (
        <>
        <div>
            <div className='menuTitle'>투약의뢰서</div>
            <div className='menuTitleSub'>금일 우리 아이의 투약을 선생님께 의뢰합니다.</div>
        </div>
        <div className='buttons'>
          <Link to={'edit'}>
            <button className='pencil'>작성하기</button>
          </Link>
        </div>
        <Routes>
          <Route path='*' element={<MedicineTable/>}/>
          <Route path='edit' element={<MedicineWrite/>}/>
        </Routes>
      </>
    );
}

export default MedicineContent;