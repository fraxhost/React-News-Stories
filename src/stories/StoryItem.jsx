import Card from "../ui/Card";

function StoryItem(props) {
  return (
    <li>
      <Card>
        <div>{props.id}</div>
        <div>{props.title}</div>
        <div>{props.body}</div>
        <div>{props.publishedDate}</div>
        <div>{props.authorId}</div>
      </Card>
    </li>
  );
}

export default StoryItem;
