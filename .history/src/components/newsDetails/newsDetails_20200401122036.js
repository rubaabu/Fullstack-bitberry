import React from 'react'

export const NewsDetails = (props) => {

    const {news} = props;
    if(!news) {
        return<div className="loading">Loading News.....</div>
    }

    return (
        <div>
            
        </div>
    )
}
