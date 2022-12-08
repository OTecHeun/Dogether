import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { setItem , getItem } from './lib/storage';

function ArlimMain(props) {
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
            <div>
            {getItem('saveData')}
            </div>
        </>
    );
}

export default ArlimMain;