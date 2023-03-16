import React from "react";

type PaginationPropsType = {
  totalCountEl: number;
  countPerPageEl: number;
  setCurrentPage: (value: number) => void;
};

export const Pagination: React.FC<PaginationPropsType> = ({
  countPerPageEl,
  totalCountEl,
  setCurrentPage,
}) => {
  const countPages = [];

  for (let i = 1; i <= Math.ceil(totalCountEl / countPerPageEl); i++) {
    countPages.push(i);
  }

  return (
    <div>
      {countPages.map((el, i) => {
        return (
          <button key={i} onClick={(e) => setCurrentPage(el)}>
            {el}
          </button>
        );
      })}
    </div>
  );
};
