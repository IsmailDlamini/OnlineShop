import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



const ProductModel = (prop) => {
  return (
    <>
      <div className="containerCard">
        <div className="pictureContainer">
          <img src={prop.ProductImagePath} alt="ProductImage" />
        </div>
        <div className="informationContainer">
          <div className="productName">{prop.ProductName}</div>
          <div className="productReviews">
            <FontAwesomeIcon icon={faStar} id="productZoneStar"/>
            {prop.ProductReviewCount} Reviews
          </div>
          <div className="productPrice">R {prop.ProductPrice}</div>
        </div>
      </div>
    </>
  );
};

export default ProductModel;
