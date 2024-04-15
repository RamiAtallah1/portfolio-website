import { Card, Col, Row } from "react-bootstrap";
import styles from "./Project.module.css";

type Props = {
  image: string;
  title: string;
  description: string;
  stacks: string[];
  github: string;
  reversed: boolean;
};

export default function Project(props: Props) {
  const { image, title, description, stacks, github, reversed } = props;
  return (
    <a target="_blank" href={github} rel="noreferrer" className={styles.link}>
      <Card className={`${styles.cardContainer} ${styles.pro}`}>
        <Row className={reversed ? styles.resversedProj : ""}>
          <Col md={4}>
            <div className={styles.imageWrapper}>
              <Card.Img
                src={image}
                alt="Card image"
                className={styles.hoverableImage}
              />
            </div>
          </Col>
          <Col md={8}>
            <Card.Body className={styles.proText}>
              <Card.Title as="h3">{title}</Card.Title>
              <Card.Text className={styles.proTextDescription}>
                {description}
              </Card.Text>
              <div className={styles.stack}>
                {stacks.map((stack, index) => (
                  <p key={index}>{stack}</p>
                ))}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </a>
  );
}
