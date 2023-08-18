import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCart({ products }) {
  console.log(products);
  let prucuctslist = products.map((product) => (
    <div className="col-md-3 my-2">
      <Card key={product.id} style={{ width: "18rem", height: "24rem" }}>
        <div className="text-centrt">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR:- {product.price}</Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  ));
  return <div className="row">{prucuctslist}</div>;
}

export default ProductCart;
