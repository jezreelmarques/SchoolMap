import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAz6PXPByo9Ih_Taqjq0EVDF8OotH3q3ac"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;