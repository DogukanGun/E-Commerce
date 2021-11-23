import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";
import { Col, Container, Row } from "react-bootstrap";
function Contact() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row className="mt-5">
        <Col className="mt-3 text-center" sm={12}>
          <h1>Contact</h1>
        </Col>

        <Col className="mt-3" sm={12}>
          <form method="post">
            <h3>Drop Us a Message</h3>
            <div className="row">
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="btnContact"
                    value="Send Message"
                  />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: "150px" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export { Contact };
