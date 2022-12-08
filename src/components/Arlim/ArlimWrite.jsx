import React from 'react';
import { useState } from 'react';
import '../../resources/assets/sass/Arlim.scss'
import { setItem , getItem } from './lib/storage';
import { useNavigate } from "react-router-dom";

function ArlimWrite(props) {
    let navigate = useNavigate();

    const [ContentValue, setContentValue] = useState('');

    const onContentChange = (e) => {
        setContentValue(e.currentTarget.value);
    };

    const onContentClick = (e) => {
        setItem('saveData', ContentValue);
        navigate("..");
    };

    return (
        <div>
            <div className='Arlimtitle'>
                <img src='/images/dduki_profile.png' alt='뚜기증사'></img>
                <div className='ArlimDogName'>오뚜기</div>
            </div>
            <div className='ArlimTxt'>
                <textarea placeholder='가정에서의 일상을 적어주세요^^'
                onChange={onContentChange}
                value={ContentValue}
                />
                <button>복사</button>
            </div>
            <div className='ArlimPicture'>
                <div className='ArlimPicutres'>
                    <button
                    onClick={onContentClick}
                    >제출</button>
                </div>
            </div>
        </div>
    );
}

export default ArlimWrite;