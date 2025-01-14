import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from "./store/Actions";
import "./products.css";

const Products = () => {
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(FetchData());
  }, []);

  return (
    <div className="products-container">
      <div>
        {loading ? (
          <h1>loading....</h1>
        ) : (
          <table className="products-table">
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
                <th>rating</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="table-row">
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td><img src={product.image} alt="image" /></td>
                  <td>{product.rating.rate} / {product.rating.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Products;
