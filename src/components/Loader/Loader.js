import React from 'react';
import { loader } from './svg';
import './Loader.css';

export default function Loader() {
    return (
        <div className='loader'>
            {loader}
        </div>
    );
}

