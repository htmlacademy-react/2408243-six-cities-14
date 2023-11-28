import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { LocationType } from '../types';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityMap: LocationType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isRenderedRef.current && mapRef.current) {
      const instance = new Map(mapRef.current, {
        center: [cityMap.latitude, cityMap.longitude],
        zoom: cityMap.zoom,
      });

      const tTileLayer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(tTileLayer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityMap]);
  return map;
}

export default useMap;
