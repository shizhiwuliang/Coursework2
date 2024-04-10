import React from 'react';
import myImage from './160b2f2634eca22ee035b340e0bc10d5.jpg'; // 确保路径正确

export default function Profile() {
    return (
        <div>
            <img src={myImage} alt="Katherine Johnson"  style={{ maxWidth: '20%', height: 'auto' }}/>
        </div>
    );
}