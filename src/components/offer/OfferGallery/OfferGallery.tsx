import Container from '../../common/Container/Container';
import OfferImage from '../OfferImage/OfferImage';

type OfferGalleryProps = {
  images: string[];
}

const OfferGallery = ({ images }: OfferGalleryProps) => (
  <Container className="offer__gallery-container">
    <div className="offer__gallery">
      {images.map((image) => <OfferImage key={image} src={image} />)}
    </div>
  </Container>);

export default OfferGallery;
