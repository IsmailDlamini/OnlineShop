import ProductModel from "./ProductModel"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import LoadSkeleton from "./LoadSkeleton";
import {useDispatch, useSelector} from "react-redux"
import productList from "../Redux/Actions/productActions";


const ProductZone = () => {

  const dispatch = useDispatch();

  const Product = useSelector(state => state.productList)

  const {loading, products} = Product;

  useEffect( () => {
    dispatch(productList())
  }, [dispatch])

  const loadSkeleton = products.map((PM) => {
    return (
      <div key={PM._id}>
          <LoadSkeleton />
      </div>
    );
  });

  const ProductModel_M = products.map((PM) => {

    const formattedPrice = PM.price.toLocaleString();

    return (
      <div key={PM._id}>
        <Link to={`/product/${PM._id}`}>
          <ProductModel
            ProductImagePath={PM.image}
            ProductName={PM.name}
            ProductReviewCount={PM.numReviews}
            ProductPrice={formattedPrice}
          />
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="productZone">
        <div className="ProductModelZone">{loading ? loadSkeleton : ProductModel_M}</div>
      </div>
    </>
  );
};

export default ProductZone;
