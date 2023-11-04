import { useCallback, useEffect, useRef, useState } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import BottomMenu from "@/components/FloatingMenu/FloatingMenu";
import {PolygonDataModal} from "@/components/PolygonDataModal/PolygonDataModal";

interface DrawEvent {
  type: string;
}

interface DrawInstance {
  getAll: () => any;
}

function Page1() {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState<number>(21.22571);
  const [lat, setLat] = useState<number>(45.75372);
  const [zoom, setZoom] = useState<number>(13);
  const [polygonData, setPolygonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bounds = [
    [21.148834380930737,45.70095987580634],
    [21.319834380930737,45.80095987580634]
  ]as mapboxgl.LngLatBoundsLike;

  const updateArea = useCallback(
    (e: DrawEvent, draw: DrawInstance) => {
      const data = draw.getAll();
      setPolygonData(data);
    },
    [],
  );

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken =
      'pk.eyJ1IjoidHVkb3I5MDAiLCJhIjoiY2xvajllMWxqMXRpaDJqbjA4ZXdzOWQ1biJ9.xH0Q29ejj-dgPj1F0XS_dA';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
      layers: [
        {
          id: 'polygon-la',
        }
      ]
    });

    map.addControl(draw);
    map.on('draw.create', (e) => {
      updateArea(e, draw);
      openModal();
    });
    map.on('draw.delete', (e) => updateArea(e, draw));
    map.on('draw.update', () => openModal());

    return () => map.remove();
  }, [updateArea]);

  return (
    <>
      <BottomMenu />
      <div ref={mapContainer} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} />
      <PolygonDataModal isModalOpen={isModalOpen} onClose={closeModal} polygonData={polygonData} />
    </>
  );
}

export default Page1;
