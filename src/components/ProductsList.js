import { useEffect, useState } from "react";

export const ProductsList = () => {
  const [url, setUrl] = useState("http://localhost:3001/products")
  const [productsList, setProductsList] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProductsList(data);
    } catch (error) {
      console.log("Error, ", error);
    }
  }

  return (
    <section>
      <div className="filter">
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>{counter}</button>
        <button onClick={() => setUrl("http://localhost:3001/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:3001/products?is_stock=true")}>Only Stock</button>
      </div>
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
