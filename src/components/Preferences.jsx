import ProductModel from "./ProductModel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadSkeleton from "./LoadSkeleton";
import { useDispatch, useSelector } from "react-redux";
import productList from "../Redux/Actions/productActions";
import Products from "../Data/Products";
import Banner from "../assets/Banner.png"
import promo from "../assets/Drip.png"
import promo2 from "../assets/Promo2.png"

const ProductZone = () => {
  const [offlineProducts] = useState(Products);

  const dispatch = useDispatch();

  const Product = useSelector((state) => state.productList);

  const { loading, error, products } = Product;

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  console.log(products)// this will log the products from the server and not from the local file data

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

  const productModelOffline = offlineProducts.map((offlineProducts) => {
    const formattedPrice = offlineProducts.productPrice.toLocaleString();

    return (
      <div key={offlineProducts._id}>
        <Link to={`/product/${offlineProducts.productId}`}>
          <ProductModel
            ProductImagePath={offlineProducts.productImage}
            ProductName={offlineProducts.productName}
            ProductReviewCount={offlineProducts.productReviewCount}
            ProductPrice={formattedPrice}
          />
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="AdvertisementZone">
        <div className="AdvertisementContainer">
          <div className="DiscountZone">
            <div className="discountView"><img src={promo} alt="" /></div>
            <div className="discountView"><img src={promo2} alt="" /></div>
          </div>
          <div className="BannerZone">
            <div className="bannerView">
              <div className="bannerImage">
                <img src={Banner} alt="" />
              </div>
              <div className="bannerNav">
                <div className="bannerNavTittle">Categories</div>
                <div className="categoryOption">T-Shirts <div className="goTo">{">"}</div></div>
                <div className="categoryOption">wrist Watches <div className="goTo">{">"}</div></div>
                <div className="categoryOption">Kicks <div className="goTo">{">"}</div></div>
                <div className="categoryOption">Hats <div className="goTo">{">"}</div></div>
              </div>
            </div>
            <div className="brandView"></div>
          </div>
        </div>
      </div>

      <div className="productZone">
        <div className="ProductModelZone">
          {error
            ? productModelOffline
            : loading
            ? loadSkeleton
            : ProductModel_M}

            {/* This part of the code will check for if there is an error in the server information 
              --> if the code does not contain an error then it should check for if the information is loading 
              --.> if the information is loading then the program should then proceed to display the loading skeleton for as long as the information is loading and as long as the object returns true
              --> after the loading is done, what should happen is that the data should then be displayed in the appropriate areas
              
            */}
        </div>
      </div>
    </>
  );
};

export default ProductZone;
