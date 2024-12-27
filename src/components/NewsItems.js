// src/components/NewsItems.js
import React from 'react';

const NewsItems = (props) => {
  let { title, description, imgUrl, newsUrl } = props;
  return (
    <div>
      <div className="card">
        <img 
          src={!imgUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1733777065.jpg?c=16x9&q=w_800,c_fill" : imgUrl} 
          className="card-img-top" 
          alt="News" 
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
