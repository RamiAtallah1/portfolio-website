import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <Navbar expand="lg" variant="dark" className="bgColor">
      <Container>
        <Navbar.Brand href="#home" className={styles.navLogo}>
          Rami Atallah
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className={styles.linksRight}>
          <Nav className={`me-auto text-center ${styles.links}`}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
