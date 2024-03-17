import React, { useState } from 'react';
import LocationPicker from 'react-location-picker'; // Import the react-location-picker component

const DefaultLocation = { lat: 10, lng: 106 }; // Set your default location
const DefaultZoom = 10; // Set the default zoom level

const LocationPickerComponent = () => {
  const [location, setLocation] = useState(DefaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  // Handle location change
  const handleLocationChange = (lat, lng) => {
    setLocation({ lat, lng });
  };

  // Handle zoom change
  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  return (
    <div>
      {/* Render your map */}
      <LocationPicker
        defaultLocation={DefaultLocation}
        zoom={DefaultZoom}
        onChangeLocation={handleLocationChange}
        onChangeZoom={handleZoomChange}
        apiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual API key
      />
    </div>
  );
};

export default LocationPickerComponent;
