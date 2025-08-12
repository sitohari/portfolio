import React from 'react';

const TechCard = ({ icon, name }) => {
    return (
        <div
        className="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-lg shadow-md">
        <div className="flex items-center justify-center w-[70px] h-[70px]">
            <img src={icon} alt="icon" />
        </div>
        <span className="mt-4 text-[#f1f4f5]" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px',  fontWeight: '400' }}>
            {name}
        </span>
        </div>
    );
    };

export default TechCard;