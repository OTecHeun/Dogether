import React from 'react';

function MedicineTable(props) {
    var data = [
        {
            image : "사진",
            check : "1",
            name : "5뚜기",
            classs : "발랄반",
            date : "2022.05.05"
        },
        {
            image : "사진",
            check : "1",
            name : "김모카",
            classs : "발랄반",
            date : "2022.05.05"
        },
        {
          image : "사진",
          check : "1",
          name : "오레오",
          classs : "발랄반",
          date : "2022.05.05"
      }
    ]
    return (
        <div>
            <table>
                <tbody>
                {data.map(({ image, check, name, classs, date }, idx) => (
                    <tr className='medicineTable' key={idx}>
                    <td>
                        <div className='medicineLeft'>
                        <div className='image'></div>
                        <div className='name'>{name}</div>
                        <div className='classs'>({classs})</div>                                    
                        </div>
                    </td>
                    <td className='date'>{date}</td>
                    <td className='check'>
                        <label>
                        <input className='checkInput' type="checkbox" id='ck' />
                        <span className='customcheckBox'></span>
                        </label>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MedicineTable;