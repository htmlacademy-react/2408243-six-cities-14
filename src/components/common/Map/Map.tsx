import { layerGroup, marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import { useMap } from '../../../hooks';
import { LocationType, OfferType } from '../../../types';
import 'leaflet/dist/leaflet.css';
import { DefaultIcon, HoverIcon } from '../../../constants';

type MapProps = {
  className: string;
  city: LocationType;
  offers?: OfferType[];
  hoveredOfferId: OfferType['id'] | null;
};

function Map({className, city, offers, hoveredOfferId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers?.forEach((offer) => {
        marker([offer.location.latitude, offer.location.longitude])
          .setIcon(offer.id === hoveredOfferId ? HoverIcon : DefaultIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOfferId]);

  return <section className={`${className} map`} ref={mapRef} />;
}

export default Map;
