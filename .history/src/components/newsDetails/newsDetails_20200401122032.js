import React from 'react'

export const NewsDetails = (props) => {

    const {news} = props;
    if(!news) {
        return<div className="loading">Loading video.....</div>
    }

    return (
        <div>
            
        </div>
    )
}
