import { IPaginateControls, IProduct } from "../../../utils/types";
import { Button, CurrMarker, Wrapper } from "./Pagination.styles";
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
    actualPageIdx,
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
        disabled={actualPageIdx === 0}
        variant="standard"
      >
        <BiChevronsLeft />
      </Button>
      <Button
        onClick={() => goToPrevPage()}
        disabled={actualPageIdx === 0}
        variant="standard"
      >
        <BiChevronLeft />
      </Button>

      {actualPageIdx > 1 && (
        <Button onClick={() => goToPage(actualPageIdx - 2)} variant="standard">
          {actualPageIdx - 1}
        </Button>
      )}
      {actualPageIdx > 0 && (
        <Button onClick={() => goToPage(actualPageIdx - 1)} variant="standard">
          {actualPageIdx}
        </Button>
      )}

      <Button onClick={() => goToPage(actualPageIdx)} variant="current">
        {actualPageIdx + 1}
      </Button>

      {lastPageIdx !== actualPageIdx && (
        <Button onClick={() => goToPage(actualPageIdx + 1)} variant="standard">
          {actualPageIdx + 2}
        </Button>
      )}
      {lastPageIdx - 1 > actualPageIdx && (
        <Button onClick={() => goToPage(actualPageIdx + 2)} variant="standard">
          {actualPageIdx + 3}
        </Button>
      )}

      <Button
        onClick={() => goToNextPage()}
        disabled={actualPageIdx === lastPageIdx}
        variant="standard"
      >
        <BiChevronRight />
      </Button>
      <Button
        onClick={() => goToLastPage()}
        disabled={actualPageIdx === lastPageIdx}
        variant="standard"
      >
        <BiChevronsRight />
      </Button>
    </Wrapper>
  );
}
