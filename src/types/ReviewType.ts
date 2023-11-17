import { User } from '.';

type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export default ReviewType;
