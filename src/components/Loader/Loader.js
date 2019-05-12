import React from 'react';
import './Loader.css';
import { loader } from './svg';

export default function Loader() {

    return (
        <div className='loader'>
            {loader}
        </div>
    )
}

