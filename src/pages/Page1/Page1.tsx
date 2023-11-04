import { useCallback, useEffect, useRef, useState } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import BottomMenu from "@/components/FloatingMenu/FloatingMenu";
import {PolygonDataModal} from "@/components/PolygonDataModal/PolygonDataModal";
import AnalyticsModal from "@/components/AnalyticsModal/AnalyticsModal";

const existingPolygon = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [23.5907, 46.7712],
        [23.5912, 46.7724],
        [23.5928, 46.7729],
        [23.5929, 46.7742],
        [23.5914, 46.7742],
        [23.5907, 46.7712],
      ],
    ],
  },
  properties: {
    id: 'existing-polygon',
    name: 'Existing Polygon',
    description: 'This is an existing polygon in Cluj.',
  },
};


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
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);

  const openAnalyticsModal = () => {
    setIsAnalyticsModalOpen(true);
  }

  const closeAnalyticsModal = () => {
    setIsAnalyticsModalOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bounds = [
    [23.5663, 46.7232],
    [23.6567, 46.7977],
  ] as mapboxgl.LngLatBoundsLike;

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

    map.on('load', () => {
      // Add the existing polygon to the map
      map.addSource('existing-polygon', {
        type: 'geojson',
        data: existingPolygon as any,
      });

      map.addLayer({
        id: 'existing-polygon-layer',
        type: 'fill',
        source: 'existing-polygon',
        layout: {},
        paint: {
          'fill-color': '#78C51D',
          'fill-opacity': 0.5,
        },
      });
    });
    map.addControl(draw);
    map.on('draw.create', (e) => {
      updateArea(e, draw);
      openModal();
    });
    map.on('draw.delete', (e) => updateArea(e, draw));
    map.on('draw.update', () => openModal());
    map.on('click', 'existing-polygon-layer', (e) => {
      const features = map.queryRenderedFeatures(e.point, { layers: ['existing-polygon-layer'] });
      if (features.length > 0) {
        const clickedFeature = features[0];
        openAnalyticsModal();
        console.log(clickedFeature.properties);
      }
    });

    return () => map.remove();
  }, [updateArea]);

  return (
    <>
      <BottomMenu />
      <div ref={mapContainer} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} />
      <PolygonDataModal isModalOpen={isModalOpen} onClose={closeModal} polygonData={polygonData} />
      {/*{!isModalOpen && <AnalyticsModal isModalOpen={isAnalyticsModalOpen} onClose={closeAnalyticsModal} />}*/}
      {/* Keep this like this until I come back, it breaks the app */}
    </>
  );
}

export default Page1;
