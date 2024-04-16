import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SeeMoreCard from "../components/SeeMoreCard";

function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductDetail(data));
  }, [id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <SeeMoreCard product={productDetail} />
    </main>
  );
}

export default ProductDetail;
