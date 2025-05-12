import React from "react";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  category: string;
};

const Product: React.FC<ProductProps> = React.memo(({ name, price, category }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>{name}</h3>
      <p>ფასი: ${price}</p>
      <p>კატეგორია: {category}</p>
    </div>
  );
});

export default Product;
