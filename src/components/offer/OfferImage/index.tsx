
type OfferImageProps = {
  src: string;
}

const OfferImage = ({ src }: OfferImageProps) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={ src } alt="Photo studio"/>
  </div>
);

export default OfferImage;
