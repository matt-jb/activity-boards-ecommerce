import { useState } from "react";
import { usePaginationType } from "../../../utils/types";
import { PRODUCTS_PER_PAGE } from "../../../utils/utils";

export const usePagination: usePaginationType = (data) => {
  const [actualPageIdx, setActualPageIdx] = useState(0);

  const firstElemIndex = actualPageIdx * PRODUCTS_PER_PAGE;
  const lastElemIndex = firstElemIndex + PRODUCTS_PER_PAGE;
  const entries = data.slice(firstElemIndex, lastElemIndex); // useMemo
  const lastPageIdx = Math.ceil(data.length / PRODUCTS_PER_PAGE) - 1;

  // useEffect(() => {
  // }, [entries])

  function goToFirstPage() {
    setActualPageIdx(0);
  }

  function goToPrevPage() {
    setActualPageIdx((prevPageIdx) => prevPageIdx - 1);
  }

  function goToNextPage() {
    setActualPageIdx((prevPageIdx) => prevPageIdx + 1);
  }

  function goToPage(page: number) {
    setActualPageIdx(page);
  }

  function goToLastPage() {
    setActualPageIdx(lastPageIdx);
  }

  return {
    entries,
    controls: {
      actualPageIdx,
      lastPageIdx,
      goToFirstPage,
      goToPrevPage,
      goToPage,
      goToNextPage,
      goToLastPage,
    },
  };
};
