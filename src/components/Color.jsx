import React, { useState } from 'react';
import Select from 'react-select';


const Color = () => {
    let [bgColor, setBgColor] = useState('grey');

    const colors = [
        { value: 1, label: 'blue' },
        { value: 2, label: 'yellow' },
        { value: 3, label: 'pink' },
        { value: 4, label: 'orange' },
        { value: 5, label: 'green' }
    ];

    return (
        <div style={{ background: bgColor, height: '25vh' }}>
            <Select options={colors} onChange={(e) => setBgColor(e.label)} />
        </div>
    )
};

export default Color;