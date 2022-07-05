import { IPaginateControls } from "../../../utils/types";
import { Button, Wrapper } from "./Pagination.styles";
import {
  BiChevronsLeft,
  BiChevronLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";

interface Props {
  controls: IPaginateControls;
}

export default function Pagination({ controls }: Props) {
  const {
    actualPageIdx: i,
    lastPageIdx,
    goToFirstPage,
    goToPrevPage,
    goToPage,
    goToNextPage,
    goToLastPage,
  } = controls;

  return (
    <Wrapper>
      <Button
        onClick={() => goToFirstPage()}
        disabled={i === 0}
        variant="arrow"
        icon
      >
        <BiChevronsLeft />
      </Button>
      <Button
        onClick={() => goToPrevPage()}
        disabled={i === 0}
        variant="arrow"
        icon
      >
        <BiChevronLeft />
      </Button>

      {i > 1 && (
        <Button onClick={() => goToPage(i - 2)} variant="standard">
          {i - 1}
        </Button>
      )}
      {i > 0 && (
        <Button onClick={() => goToPage(i - 1)} variant="standard">
          {i}
        </Button>
      )}

      <Button onClick={() => goToPage(i)} variant="current">
        {i + 1}
      </Button>

      {lastPageIdx !== i && (
        <Button onClick={() => goToPage(i + 1)} variant="standard">
          {i + 2}
        </Button>
      )}
      {lastPageIdx - 1 > i && (
        <Button onClick={() => goToPage(i + 2)} variant="standard">
          {i + 3}
        </Button>
      )}

      <Button
        onClick={() => goToNextPage()}
        disabled={i === lastPageIdx}
        variant="arrow"
        icon
      >
        <BiChevronRight />
      </Button>
      <Button
        onClick={() => goToLastPage()}
        disabled={i === lastPageIdx}
        variant="arrow"
        icon
      >
        <BiChevronsRight />
      </Button>
    </Wrapper>
  );
}
