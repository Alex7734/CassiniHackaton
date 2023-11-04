import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Meta from '@/components/Meta';

function Page2() {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState<number>(21.22571);
  const [lat, setLat] = useState<number>(45.75372);
  const [zoom, setZoom] = useState<number>(13);
  const [markerCoordinates, setMarkerCoordinates] = useState<number[] | null>(null);

  const bounds = [
    [21.148834380930737,45.70095987580634],
    [21.319834380930737,45.80095987580634]
  ]as mapboxgl.LngLatBoundsLike;

// bounds 
// stanga sus
// 21.148834380930737,
// 45.80095987580634    
//
// stanga jos
// 21.148834380930737,
// 45.70095987580634 
//
// dreapta sus
//  21.319834380930737,
// 45.80095987580634  
//
// dreapta jos
// 21.319834380930737
// 45.70095987580634
//
//
//



  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken =
      'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xoa3cyb292MHc1aDNucXB5cnJmOWdtMCJ9.-WGWKDZihxwHtun9LaZWTw';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds
    });

    map.setMinZoom(11.01);

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      setMarkerCoordinates([lng, lat]);
    });

    return () => map.remove();
  }, []);

  return (
    <>
      {/* <Meta title="page 2" />
      <Typography variant="h6" style={{ marginBottom: '16px' }}>
        Click on the map to set a marker.
      </Typography> */}
      <p> Marker nu merge</p> 
      
        
          <h2>Marker Coordinates:</h2>
          <pre>{JSON.stringify(markerCoordinates, null, 2)}</pre>
        
    
      <div ref={mapContainer} style={{ position: 'fixed', top: 400, left: 0, right: 0, bottom: 0 }} />
      
    </>
  );
}

export default Page2;
