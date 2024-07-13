import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: 12.895863,
    lng:  77.537680
  };


const defaultOriginCoordinates = {
  lat: 12.89591806687558,
  lng: 77.5376923004544
};

function MapComponent() {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const originRef = useRef();
  const destinationRef = useRef();

  useEffect(() => {
    // Convert coordinates to address and set it as the default value for the origin input
    const geocodeCoordinates = async (lat, lng) => {
      const apiKey = "AIzaSyCtF2JbKBXj9xFytDL81S-pxmkez2PRKZ8";
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`);
      if (response.data.results[0]) {
        originRef.current.value = response.data.results[0].formatted_address;
      }
    };

    geocodeCoordinates(defaultOriginCoordinates.lat, defaultOriginCoordinates.lng);
  }, []);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirectionsResponse(response);
        const { distance, duration } = response.routes[0].legs[0];
        setDistance(distance.text);
        setDuration(duration.text);
      } else {
        console.log('response: ', response);
      }
    }
  };

  const calculateRoute = () => {
    if (originRef.current.value !== '' && destinationRef.current.value !== '') {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        directionsCallback
      );
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCtF2JbKBXj9xFytDL81S-pxmkez2PRKZ8" libraries={['places']}>
      <div>
        <Autocomplete>
          <input
            type="text"
            placeholder="Origin"
            ref={originRef}
            style={{ margin: '10px', padding: '5px', width: '200px' }}
          />
        </Autocomplete>
        <Autocomplete>
          <input
            type="text"
            placeholder="Destination"
            ref={destinationRef}
            style={{ margin: '10px', padding: '5px', width: '200px' }}
          />
        </Autocomplete>
        <button onClick={calculateRoute} style={{ margin: '10px', padding: '5px' }}>
          Calculate Route
        </button>
        <div>
          <strong>Distance:</strong> {distance} <br />
          <strong>Duration:</strong> {duration} <br />
        </div>
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {directionsResponse && (
          <DirectionsRenderer
            options={{
              directions: directionsResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
