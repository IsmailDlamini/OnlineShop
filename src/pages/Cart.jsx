import Footer from "../components/Footer";
import MainHeader from "../components/Header";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartProducts } from "../Redux/Actions/cartActions";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //const [price, setPrice] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const TotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const noItemsInCart = <div className="noItemsInCart">No Items In Cart <button onClick={() => {navigate("/")}}>Shop Now</button></div>;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, 1));
    }
  }, [dispatch, id]);

  const HandleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const HandleProductRemoval = (id) =>{
    dispatch(removeCartProducts(id))
  }

  const cartObjectElement = cartItems.map((object) => {
    return (
      <div className="cartProductInformation" key={object.product}>
        <div className="ProductPicture">
          <img
            src={object.image}
            alt=""
            id={object.product}
            onClick={() => HandleProductClick(object.product)}
          />
        </div>
        <div className="ProductDetails">
          <div>{object.name}</div>
          <div>
            {object.countInStock > 0 ? "in stock" : "out of stock"}
            <FontAwesomeIcon
              id="availabilityStatusIcon"
              icon={faCheckCircle}
            />{" "}
          </div>
        </div>
        <div className="priceQuantity">
          <div>R {object.price.toLocaleString()}</div>
          <div>
            Quantity :{" "}
            <select
              name=""
              id=""
              value={cartItems.qty}
              onChange={(e) => {
                dispatch(addToCart(object.product, Number(e.target.value)));
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="cartActionButtons" onClick={() => HandleProductRemoval(object.product)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
    );
  });

  return (
    <>
      <MainHeader />
      <div className="cartItemsView">
        <div className="cartTitle">Shopping Cart</div>
        <div className="cartProductInformationTabs">
          <div className="cartProductContainer">
            {cartItems.length > 0 ? cartObjectElement : noItemsInCart}
          </div>
          <div className="cartSummary">
            <div className="cartSummaryTitle">
              <div>Cart Summary</div>
            </div>
            <div className="totalPrice">
              Total:({cartItems.length} items) = {" "}
              <div> R {TotalPrice.toLocaleString()}</div>
            </div>
            <div className="checkoutButton">
              <button>
                Checkout <FontAwesomeIcon icon={faCreditCard} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
