import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import classes from "./Pagination.module.css";

function Pagination(props) {
  return (
    <ReactPaginate
      breakLabel={"..."}
      nextLabel={"NEXT"}
      forcePage={props.currentPage - 1}
      onPageChange={props.pageChanged}
      pageRangeDisplayed={5}
      pageCount={props.totalPages}
      previousLabel={"PREVIOUS"}
      containerClassName={classes.paginationBttns}
      previousClassName={classes.previousBttn}
      nextClassName={classes.nextBttn}
      disabledLinkClassName={classes.paginationDisabled}
      activeClassName={classes.paginationActive}
    />
  );
}

export default Pagination;
