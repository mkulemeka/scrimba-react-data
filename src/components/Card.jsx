import React from "react";

export default function Card(props) {
  console.log(props.location);
  return (
    <div className="card">
      <img src={`/images/${props.imageUrl}`} className="card--image" alt="" />
      <div className="card--text">
        <div className="card--location">
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>
            {props.location}
          </div>
          <p className="map-link">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <h5 className="card-date">
          {props.startDate} - {props.endDate}
        </h5>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
