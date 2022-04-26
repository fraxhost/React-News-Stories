import { useEffect, useState } from "react";

import StoryList from "../stories/StoryList";

function AllStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStories, setLoadedStories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://localhost:5001/api/stories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const stories = [];

        data.forEach((story) => {
          stories.push(story);
        });

        setIsLoading(false);
        setLoadedStories(stories);

        console.log(stories);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Stories</h1>
      <StoryList stories={loadedStories} />
    </section>
  );
}

export default AllStoriesPage;
