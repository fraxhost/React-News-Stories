import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import NewStoryForm from "../stories/NewStoryForm";
import AuthContext from "../../contexts/AuthContext";

function NewStoryPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  function addStoryHandler(storyData) {
    fetch(`${process.env.REACT_APP_HOST}/api/stories`, {
      method: "POST",
      body: JSON.stringify(storyData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <NewStoryForm onAddStory={addStoryHandler} />
    </section>
  );
}

export default NewStoryPage;
