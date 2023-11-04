import { useEffect, useRef, useState } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOMServer from 'react-dom/server';
import SearchBar from '@/components/SearchBar/Searchbar';
import BottomMenu from '@/components/FloatingMenu/FloatingMenu';

mapboxgl.accessToken =
  'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xvajllMWxqMXRpaDJqbjA4ZXdzOWQ1biJ9.xH0Q29ejj-dgPj1F0XS_dA';

const Map = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(23.5928);
  const [lat, setLat] = useState(46.7729);
  const [zoom, setZoom] = useState(13);

 
  
  const logoMarker_roadworks_wrapper = document.createElement('div');
  logoMarker_roadworks_wrapper.style.backgroundColor = '#78C51D';
  logoMarker_roadworks_wrapper.style.borderRadius = '70%';
  logoMarker_roadworks_wrapper.style.width = '40px';  
  logoMarker_roadworks_wrapper.style.height = '40px'; 
  logoMarker_roadworks_wrapper.style.display = 'flex';
  logoMarker_roadworks_wrapper.style.justifyContent = 'center';
  logoMarker_roadworks_wrapper.style.alignItems = 'center';
  const logoMarker_roadworks = document.createElement('div'); 
  logoMarker_roadworks.className = 'logoMarker_roadworks';
  logoMarker_roadworks.style.backgroundImage = 'url(public/images/construction-machine-crane-svgrepo-com.svg';
  logoMarker_roadworks.style.width = '30px';
  logoMarker_roadworks.style.height = '30px';  

  logoMarker_roadworks_wrapper.appendChild(logoMarker_roadworks);


  const popup_st= document.createElement('div');


  const popupContent = (
    <div style={{ width: '200px', height: '100px' }}>
      <h3 style={{ color: '#61AB21', margin: 0, textAlign: 'center', fontSize: '25px', lineHeight: '34px', fontWeight: '700', fontFamily: 'url(Guidr/frontend/public/Nunito/Nunito-VariableFont_wght.ttf)', fontStyle: 'normal' }}>Construction</h3>
      <p style={{ color: '#78C51D', margin: 0, textAlign: 'center', fontSize: '16px', lineHeight: '17px', fontWeight: '500', fontFamily: 'url(Guidr/frontend/public/Nunito/Nunito-VariableFont_wght.ttf)', fontStyle: 'normal' }}>Cluj Innovation Park</p>
      <a href={"http://localhost:5173/page-1"} style={{ color: '#3A8712', textAlign: 'center', fontSize: '16px', lineHeight: '17px', fontWeight: '500', fontFamily: 'url(Guidr/frontend/public/Nunito/Nunito-VariableFont_wght.ttf)', fontStyle: 'normal', marginTop: '20px', marginLeft: '30%' }}>See more</a>
    </div>
  );


  const bounds = [
    [23.5663, 46.7232],
    [23.6567, 46.7977],
  ] as mapboxgl.LngLatBoundsLike;

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds, 
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });

    map.on('move', () => {
      setLng(parseFloat(map.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.getZoom().toFixed(2)));
    });

    map.setMinZoom(11.01);

    const marker1 = new mapboxgl.Marker({element: logoMarker_roadworks_wrapper}).setLngLat([23.5907, 46.7712]).addTo(map); // Cluj coordinates
    const popup = new mapboxgl.Popup({ closeOnClick: true, closeButton: true}).setDOMContent(document.createRange().createContextualFragment(ReactDOMServer.renderToString(popupContent))
    );

    marker1.setPopup(popup);

    return () => {
      marker1.remove();
      map.remove();
    };
  }, []);
  
  return (
    <div>
      <SearchBar/>
      <div ref={mapContainer} style={{ position: 'fixed', top:0, left: 0, right: 0, bottom: 0 }} />
      <BottomMenu />
    </div>
  );
  
};

function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;