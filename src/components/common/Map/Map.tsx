import { layerGroup, marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import { useMap } from '../../../hooks';
import { CityMapType, OfferType } from '../../../types';
import 'leaflet/dist/leaflet.css';
import { DefaultIcon, HoverIcon } from '../../../constants';

type MapProps = {
  city: CityMapType;
  offers: OfferType[];
  hoveredOfferId: OfferType['id'] | null;
};

function Map({ city, offers, hoveredOfferId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        marker([offer.location.latitude, offer.location.longitude])
          .setIcon(offer.id === hoveredOfferId ? HoverIcon : DefaultIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOfferId]);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
