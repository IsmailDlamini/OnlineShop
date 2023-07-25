import Footer from "../components/Footer";
import MainHeader from "../components/Header";
import { useParams } from "react-router-dom";
import ProductModel from "../components/ProductModel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  
    const [Product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const { searchTerm } = useParams();

    useEffect( () => {
        const fetchProducts = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/products");
            setProduct(data);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(true)
        }
        
        };
        fetchProducts();

    }, [])

  const returnedSearchData = Product.filter((product) => {
 
    if(!isLoading)
    { return product.productName.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())}
  }
  );

  const noResults = <div className="noResults">Oops! Product not Found</div>

  const searchResults = returnedSearchData.map((searchData) => {
    return (
      <div key={searchData.productId}>
        <Link to={`/product/${searchData.productId}`}>
          <ProductModel
            ProductImagePath={searchData.productImage}
            ProductName={searchData.productName}
            ProductReviewCount={searchData.productReviewCount}
            ProductPrice={searchData.productPrice}
          />
        </Link>
      </div>
    );
  });

  return (
    <>
      <MainHeader />
      <div className="SearchInformationFilterTab">
        <div className="searchInformationText">
          {searchResults.length}{" "}
          {searchResults.length > 1 ? "results" : "result"} for{" "}
          {`"${searchTerm}"`}
        </div>
        <div className="filterTab">
          Sort By:
          <select name="" id="">
            <option value="">A-Z</option>
            <option value="">Price: Low</option>
            <option value="">Price: High</option>
          </select>
        </div>
      </div>
      <div className="SearchResultView">{searchResults.length < 1 ? noResults : searchResults}</div>
      <Footer />
    </>
  );
};

export default Search;
