import { useState, useContext } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

import AuthContext from "../../contexts/AuthContext";
import EditStoryModal from "../modals/EditStoryModal";
import DeleteStory from "./DeleteStory";

function StoryItem(props) {
  const authCtx = useContext(AuthContext);

  let content;

  if (authCtx.userId === props.authorId) {
    content = (
      <Container fluid>
        <Row>
          <EditStoryModal off="8" story={props} />
          <DeleteStory off="0" storyId={props.id} />
        </Row>
      </Container>
    );
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="muted offset-1">
          - {props.authorName} on {props.publishedDate.substring(0, 10)}
        </Card.Subtitle>
        <Card.Text className="mt-3">{props.body}</Card.Text>
        {content}
      </Card.Body>
    </Card>
  );
}

export default StoryItem;
