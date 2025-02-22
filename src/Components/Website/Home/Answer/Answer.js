import { Accordion, Container } from "react-bootstrap";
// image
import Fqs from "../../../../Css/Assets/Images/Home/Fqs.webp";
// Css
import "./Answer.css";
export default function Answer() {
  return (
    <section className="answer section-padding">
      <Container className="container d-flex align-items-start justify-content-between">
        <div className="imag">
          <div className="heading">
            <h3>FAQs</h3>
            <h1>
              We have got <span className="ans">Answers</span> to most of your
              Questions
            </h1>
          </div>
          <div className="img-contain">
            <img src={Fqs} alt="fqs" loading="lazy" />
          </div>
        </div>
        <div className="questions">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="items">
              <Accordion.Header className="ques">
                Can I detect rare diseases in my crops?
              </Accordion.Header>
              <Accordion.Body className="descrip">
                According to the return and exchange policy, you can contact
                customer service by phone or email .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="items">
              <Accordion.Header className="ques">
                If I want to exchange the product if I don't like it after it
                arrives, how will I do that?
              </Accordion.Header>
              <Accordion.Body className="descrip">
                According to the return and exchange policy, you can contact
                customer service by phone or email .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="items">
              <Accordion.Header className="ques">
                How can I manage my agricultural facility professionally?
              </Accordion.Header>
              <Accordion.Body className="descrip">
                According to the return and exchange policy, you can contact
                customer service by phone or email .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="items">
              <Accordion.Header className="ques">
                How do I protect my crops from spoilage?
              </Accordion.Header>
              <Accordion.Body className="descrip">
                According to the return and exchange policy, you can contact
                customer service by phone or email .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="items">
              <Accordion.Header className="ques">
                Does your company provide consumer protection?
              </Accordion.Header>
              <Accordion.Body className="descrip">
                According to the return and exchange policy, you can contact
                customer service by phone or email .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="items">
              <Accordion.Header className="ques">
                How do I act if I lose access to my account, or if my account is
                hacked?
              </Accordion.Header>
              <Accordion.Body className="descrip">
                According to the return and exchange policy, you can contact
                customer service by phone or email .
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
