import { OfferReviewItem, ReviewForm } from '..';
import { ReviewType } from '../../../types';

type OfferReviewProps = {
  reviews: ReviewType[];
}

const OfferReview = ({reviews}: OfferReviewProps) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">1</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <OfferReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
    <ReviewForm />
  </section>
);

export default OfferReview;
