import { Container, Row, Col, Image } from "react-bootstrap";
import { Details } from "./styled";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
const Article = () => {
    return (
        <Container>
            <div className="text-center h5 mb-3">
                Your submitted articles
            </div>
            <Container style={{ borderBottom: '.05em solid #8B918E' }}>
                <Row >
                    <Col xs={2}>
                        <Image fluid src="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
                    </Col>
                    <Col xs={8}>
                        <b className="m-2">10 React Interview Questions for 2020</b>
                        <Details className="mt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, a
                        </Details>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-center align-items-center">
                        <AiFillEdit className="mx-2" size="25" />
                        <AiFillDelete className="mx-2" size="25" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Article;