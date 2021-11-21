import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
function Products() {
  const { products } = useProducts();
  return (
    <div>
      <h1>Products</h1>
      <ul
        style={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {products.map((product) => (
          <Link
            to={`/${product.id}`}
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "20vw",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
              margin: "20px",
            }}
            key={product.id}
          >
            <ProductCard
              title={product.title}
              src={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { Products };
