import { Row } from "react-bootstrap";

import StoryItem from "./StoryItem";

function StoryList(props) {
  return (
    <Row xs={1} md={1} lg={2} className="g-4">
      {props.stories.map((story) => (
        <StoryItem
          key={story.id}
          id={story.id}
          title={story.title}
          body={story.body}
          publishedDate={story.publishedDate}
          authorId={story.authorId}
          authorName={story.authorName}
        />
      ))}
    </Row>
  );
}

export default StoryList;
