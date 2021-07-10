import { Container, Row, Col, Image } from "react-bootstrap";
import TopArticles from "./topArticles";
import { FaRegUserCircle } from 'react-icons/fa'

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={8} className="p-3">
                    <div className="d-flex justify-content-center">
                        <Image src="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" fluid className="w-75" />
                    </div>
                    <br />
                    <FaRegUserCircle /><span className="px-2">username</span>
                    <h4>6 Signs Someone Isn’t Worth Your Time</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <h6 className="d-flex justify-content-end">Read More . 7 min read</h6>
                </Col>
                <Col xs={4} className="">
                    <TopArticles />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;