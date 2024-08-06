import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductsList = () => {
  const [url, setUrl] = useState("http://localhost:3001/products");
  const { data: productsList, loading } = useFetch(url);

  return (
    <section>
      <h1>Product List</h1>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:3001/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:3001/products?is_stock=true")}>Only Stock</button>
      </div>
      {loading && <h1>Loading...</h1>}
      {productsList && productsList.map((product) =>
        <div key={product.id} className="card">
          <div className="id">{product.id}</div>
          <div>{product.name}</div>
          <div className="stock">
            <div>${product.price}</div>
            <div className={`${product.is_stock ? "green" : "red"}`}>{product.is_stock ? "stock" : "unavailable"}</div>
          </div>
        </div>
      )}
    </section>
  )
}
