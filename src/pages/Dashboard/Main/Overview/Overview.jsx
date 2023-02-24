import React from 'react'
import './Overview.scss';

const Overview = () => {
    const boxList = [
        {
            title: 'Unresolved',
            count: '60'
        },
        {
            title: 'Overdue',
            count: '16'
        },
        {
            title: 'Open',
            count: '43'
        }
        , {
            title: 'On hold',
            count: '64'
        }
    ];
    return (
        <div className='overview'>
            {boxList.map((box) =>
                <div className="overview__box" key={box.title}>
                    <p className="overview__box__text">{box.title}</p>
                    <p className="overview__box__number">{box.count}</p>
                </div>
            )}
        </div>
    )
}

export default Overview