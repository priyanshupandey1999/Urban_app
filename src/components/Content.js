import React from 'react'
import back_arrow from './../back-arrow.png'
import next_arrow from './../next-arrow.png'
import feature_image from './../img.png'


function Content() {
    return (
        <div className="content">
            <a href="#" className="btn">2020 Collections</a>
            <h1>You should always <br /> feel pretty. </h1> 
            <p>Clothes are sure to heat up your winter.</p>
            <div className="arrow-icons">
                <img src={back_arrow} className="back-arrow" />
                <img src={next_arrow} className="next-arrow" />
            </div>
            <img src={feature_image} className="feature-image" />
        </div>
    )
}

export default Content
