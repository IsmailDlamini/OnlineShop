import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductReviewComment = (prop) => {
  return (
    <div className="ProductReviewCommentContainer">
      <div className="reviewNameRatingDate">
        <div className="commenterName bold">{prop.commenterNameValue}</div>
        <div className="reviewDate">{prop.Date}</div>
        </div>
        <div className="commenterRating bold">
          <FontAwesomeIcon icon={faStar} id="commentStar" />
          {prop.commenterRatingValue}
        </div>
      <div className="commenterComment">{prop.commenterCommentValue}</div>
    </div>
  );
};

export default ProductReviewComment;
