import { useState, useContext } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import AuthContext from "../../contexts/AuthContext";
import EditStoryModal from "../modals/EditStoryModal";
import DeleteStory from "./DeleteStory";
import ReadMoreReadLess from "./ReadMoreReadLess";

function StoryItem(props) {
  const authCtx = useContext(AuthContext);

  const host = `${process.env.REACT_APP_HOST}`;

  function downloadXml() {
    fetch(`${host}/api/stories/${props.id}`, {
      method: "GET",
      headers: {
        Accept: "application/xml",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${props.title}.xml`);

        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }

  function downloadJson() {
    fetch(`${host}/api/stories/${props.id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${props.title}.json`);

        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }

  let content;

  if (authCtx.userId === props.authorId) {
    content = (
      <div className="d-flex">
        <div className="pe-1 mt-1">
          <Button variant="outline-secondary" onClick={downloadXml} size="sm">
            xml
          </Button>
        </div>
        <div className="pe-1 mt-1">
          <Button variant="outline-secondary" onClick={downloadJson} size="sm">
            json
          </Button>
        </div>
        <div style={{ width: "100%" }}></div>
        <div className="pe-1">
          <EditStoryModal story={props} />
        </div>
        <div className="pe-1">
          <DeleteStory storyId={props.id} />
        </div>
      </div>
    );
  }

  return (
    <Col>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>
            <h4>{props.title}</h4>
          </Card.Title>
          <Card.Subtitle className="muted offset-1">
            - {props.authorName} on {props.publishedDate.substring(0, 10)}
          </Card.Subtitle>
          <hr />
          <ReadMoreReadLess limit={100}>{props.body}</ReadMoreReadLess>
          <hr />
          {content}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StoryItem;
