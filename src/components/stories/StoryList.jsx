import StoryItem from "./StoryItem";

function StoryList(props) {
  return (
    <ul>
      {props.stories.map((story) => (
        <StoryItem
          key={story.id}
          id={story.id}
          title={story.title}
          body={story.body}
          publishedDate={story.publishedDate}
          authorId={story.authorId}
        />
      ))}
    </ul>
  );
}

export default StoryList;
