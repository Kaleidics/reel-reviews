import React from 'react';
import './Dashboard.css';
import { mockdata } from './mockdata';


import { ReviewItem } from '../ReviewItem/ReviewItem'



export default function Dashboard() {

    const myReviews = mockdata.map((item, index) => {
        return (
            <ReviewItem data={item} index={index} key={mockdata[index].movieId} id={mockdata[index].movieId} />
        );
    });

    return (
        <div className="dash-div">
           {myReviews}
        </div>
    )

}