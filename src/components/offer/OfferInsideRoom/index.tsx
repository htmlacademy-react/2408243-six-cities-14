type OfferInsideRoomProps = {
  insideList: string[];
}

const OfferInsideRoom = ({ insideList }: OfferInsideRoomProps) => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What`s inside</h2>
    <ul className="offer__inside-list">
      {insideList.map((offer) => <li key = {offer} className="offer__inside-item">{ offer }</li>) }
    </ul>
  </div>);

export default OfferInsideRoom;
