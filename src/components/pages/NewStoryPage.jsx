import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import NewStoryForm from "../stories/NewStoryForm";
import AuthContext from "../../contexts/AuthContext";

function NewStoryPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  function addStoryHandler(storyData) {
    fetch("https://news-stories.cefalo.com:8082/api/stories", {
      method: "POST",
      body: JSON.stringify(storyData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(() => {
      console.log("Story Added...");
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
