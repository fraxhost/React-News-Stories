import { useNavigate } from "react-router-dom";

import NewStoryForm from "../stories/NewStoryForm";

function NewStoryPage() {
  const navigate = useNavigate();

  function addStoryHandler() {}

  return (
    <section>
      <h1>Add New Story</h1>
      <NewStoryForm />
    </section>
  );
}

export default NewStoryPage;
