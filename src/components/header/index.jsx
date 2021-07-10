import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "./styled"
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="/"><span style={{ fontWeight: 700, color: '#FF1D5F', paddingRight: '1em' }}>FATMUG</span>&#124; Greetings! yuvi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to="/postArticle">
                                Create Articles
                            </Link>
                            <Link to="/article">Your Articles</Link>
                            <Link to="/">Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;