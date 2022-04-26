import { useState, useContext } from "react";
import { Button } from "react-bootstrap";

import AuthContext from "../../contexts/AuthContext";
import EditStoryModal from "../modals/EditStoryModal";
import DeleteStory from "./DeleteStory";
import Card from "../ui/Card";

function StoryItem(props) {
  const authCtx = useContext(AuthContext);

  let content;

  if (authCtx.userId === props.authorId) {
    content = (
      <div>
        <EditStoryModal story={props} />
        <DeleteStory storyId={props.id} />
      </div>
    );
  }

  return (
    <li>
      <Card>
        <div>{props.id}</div>
        <div>{props.title}</div>
        <div>{props.body}</div>
        <div>{props.publishedDate}</div>
        <div>{props.authorId}</div>
        {content}
      </Card>
    </li>
  );
}

export default StoryItem;
