//import ProductReviewComment from "../components/ProductReviewComment";
import { useEffect } from "react";
import MainHeader from "../components/Header";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faCheckCircle,
  faStar,
  faCab,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { productDetails } from "../Redux/Actions/productActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProductView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const Product = useSelector((state) => state.productDetails);

  const { loading, product } = Product;

  const noReview = <div className="noComment">no reviews</div>;

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  // Handle error state

  const CSSProperties = {
    display: "block",
    margin: "250px auto",
    borderColor: "grey",
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    navigate(`/Cart/${id}`);
  };

  const pageContent = (
    <>
      <div className="productInformation">
        <div className="info">
          <div className="imageView">
            <img src={product.image} alt="" />
          </div>
          <div className="information">
            <div className="productViewName">{product.name}</div>
            <div className="FinalPrice">
              <div>R {loading ? product.price : product.price}</div>
            </div>

            <div className="allProductInformation">
              <div className="productInformationStatus">
                <div className="status value">
                  {product.countInStock > 0 ? "In stock" : "out of stock"}
                  <span id="availabilityStatusIcon">
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                  </span>
                </div>
              </div>
              <div className="productInformationReviews">
                <div className="reviews value">
                  {product.numReviews} Reviews
                </div>
                <div className="starIconContainer">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
              </div>
              <div className="shippingInformation">
                ships in 3-5 days <FontAwesomeIcon icon={faCab} id="cabIcon" />
              </div>
            </div>

            <div className="ProductViewActions">
              <div>
                <button className="AddToCartButton" onClick={handleAddToCart}>
                  Add to cart{" "}
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </button>
              </div>
              <div>
                <button className="AddToFavoritesButton">
                  Add to Favorites{" "}
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>

          {/* <div className="productViewDescription">
    {product_c.productDescription}
  </div> */}
        </div>
      </div>
      <div className="ReviewInformation">
        <div className="reviewCommentArea">
          <div className="reviewCommentHeader">
            <div className="ProductReviewHeaderText">Product Reviews</div>
          </div>
          <div className="reviewCommentContainer">{noReview}</div>
        </div>
        <div className="addReviewArea">
          <div className="addReviewHeader ">
            <div className="addReviewHeaderText">Add Product Review</div>
          </div>
          <form action="" method="post">
            <label htmlFor="" className="RatingText commentTag">
              Rating :
            </label>
            <div className="ratingSelector">
              <select
                id="RatingChoice"
                name="commenterRating"
                // onChange={HandleCommentValue}
              >
                <option value="">-- Select Rating --</option>
                <option value="1 star- Poor">1 star- Poor</option>
                <option value="2 stars- Fair">2 stars- Fair</option>
                <option value="3 stars- Good">3 stars- Good</option>
                <option value="4 stars- Very Good">4 stars- Very Good</option>
                <option value="5 stars- Excellent">5 stars- Excellent</option>
              </select>
            </div>
            <label htmlFor="" className="commentHeader commentTag">
              Comment :
            </label>
            <div className="commentInput">
              <textarea
                type="text"
                // onChange={HandleCommentValue}
                name="commenterComment"
              />
            </div>
            <div className="submitReviewButton">
              <button>Submit</button>
            </div>
            <div className="commentStatus"></div>
          </form>
        </div>
      </div>
    </>
  );

  return (
    <>
      <MainHeader />
      <div className="ProductInformationPage">
        {loading ? (
          <FadeLoader
            color="grey"
            loading={true}
            cssOverride={CSSProperties}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          pageContent
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
