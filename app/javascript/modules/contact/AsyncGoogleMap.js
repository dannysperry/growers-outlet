import React from 'react'
import { compose, withProps } from "recompose"
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

const AsyncGoogleMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCwbdlFUIyMPNoMfloD4Muvgcd7SelCAoM",
    loadingElement: <div>Loading...</div>,
    containerElement: <div className='google_map--container' />,
    mapElement: <div className='google_map--canvas' />
  }),
  withScriptjs,
  withGoogleMap
)(({onMapLoad, onMapClick, onMarkerRightClick, markers}) =>
  <GoogleMap
    ref={onMapLoad}
    defaultZoom={18}
    defaultCenter={markers[0].position}
    onClick={onMapClick}
  >
    {markers.map((marker, i) => (
      <Marker
        key={i}
        {...marker}
        onRightClick={() => onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
)


export default AsyncGoogleMap