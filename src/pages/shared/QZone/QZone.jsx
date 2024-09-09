import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-body-secondary my-3 py-3'>
            <h3 className='fs-5 fw-semibold px-3'>Q-Zone</h3>
            <div className='p-3'>
                <img className='img-fluid' src={qZone1} alt="" />
                <img className='img-fluid' src={qZone2} alt="" />
                <img className='img-fluid' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;