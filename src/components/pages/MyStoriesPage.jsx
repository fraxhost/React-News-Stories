import { useEffect, useState } from "react";

import StoryList from "../stories/StoryList";
import Pagination from "../layouts/Pagination";

function MyStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStories, setLoadedStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const postsPerPage = 4;

  useEffect(() => {
    setIsLoading(true);
    const authorId = localStorage.getItem("userId");

    let url = `${process.env.REACT_APP_HOST}/api/stories?pageSize=${postsPerPage}&pageNumber=${currentPage}&authorId=${authorId}`;

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
      });
  }, [currentPage]);

  function onPageChange(selected) {
    const page = selected.selected + 1;
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
        currentPage={currentPage - 1}
        totalPages={totalPages}
        pageChanged={onPageChange}
      />
    </section>
  );
}

export default MyStoriesPage;
