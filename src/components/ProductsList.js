import { useEffect, useState } from "react";

export const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProductsList(data);
    } catch (error) {
      console.log("Error, ", error);
    }
  }

  return (
    <section>
      {productsList && productsList.map((product) =>
        <div key={product.id} className="card">
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div className="stock">
            <div>${product.price}</div>
            <div>{product.is_stock ? "stock" : "unavailable"}</div>
          </div>
        </div>
      )}
    </section>
  )
}
