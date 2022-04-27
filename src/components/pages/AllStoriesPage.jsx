import { useEffect, useState } from "react";

import StoryList from "../stories/StoryList";
import Pagination from "../layouts/Pagination";

function AllStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStories, setLoadedStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    let url = `https://localhost:5001/api/stories?pageSize=${postsPerPage}&pageNumber=${currentPage}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const stories = [];

        result.data.forEach((story) => {
          stories.push(story);
        });

        setIsLoading(false);
        setLoadedStories(stories);
        setTotalPages(result.totalPage);
        setCurrentPage(result.currentPage);

        console.log("I got called");
      });
  }, [currentPage]);

  function onPageChange(selected) {
    const page = selected.selected + 1;
    console.log("clicked", page);
    setCurrentPage(page);
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <StoryList stories={loadedStories} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageChanged={onPageChange}
      />
    </section>
  );
}

export default AllStoriesPage;
