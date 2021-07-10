import { Container, Row, Col, Image } from "react-bootstrap";
import { RTitle, RBox, RContainer } from "./styled"
import { BiUserCheck } from "react-icons/bi"
const TopArticles = () => {
    return (
        <Container fluid>
            <RBox>
                <RTitle >TOP ARTICLES</RTitle>
            </RBox>
            <RContainer className="mt-2 border-right-1">
                <Row>
                    <Col>
                        <Row>
                            <Col xs={1} className="p-1 mx-1">
                                <BiUserCheck size="21" />
                            </Col>
                            <Col xs={10}>

                                <p style={{ fontWeight: 500 }}>
                                    Michaell Krasnov<br />
                                    in <span style={{ fontWeight: 500 }}>Better Programming</span>
                                </p>

                            </Col>
                        </Row>
                        <p style={{ fontWeight: 500 }}>10 React Interview Questions for 2020</p>
                        <small>Jun 10  .  6 min ago</small>
                    </Col>
                    <Col>
                        <Image src="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" fluid />
                    </Col>
                </Row>

            </RContainer>
        </Container>
    )
}
export default TopArticles;