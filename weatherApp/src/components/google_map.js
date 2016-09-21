import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// export default class Google_Map extends Component {
//   constructor(props){
//     super(props);
//     console.log('constructor: ', props);
//   }

//   render() {
//     return(
//       <GoogleMapLoader
//         containerElement={ <div style={{height: '100%'}} /> }
//         googleMapElement={
//           <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//         }
//       />
//     );
//   }
  
// }


export default (props) => {
  console.log('props googlemap', props);
  let center = [props.lat, props.lon];
  return (
      <GoogleMapLoader
        containerElement={ <div style={{height: '180px', width: '180px'}} /> }
        googleMapElement={
          <GoogleMap defaultZoom={8} defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
      />
  );
}