import React from 'react';
import './Loader.css';
import { loader } from './svg';

export default function Loader() {

    return (
        <div className='loader'>
                {/* <div className="cs-loader">
                <div className="cs-loader-inner">
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                    <label>&#9679; </label>
                </div>
            </div> */}
            {loader}
        </div>
    )
}

