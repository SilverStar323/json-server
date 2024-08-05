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
      console.log(data);
    } catch (error) {
      console.log("Error, ", error);
    }
  }

  return (
    <div>ProductsList</div>
  )
}
