import { useEffect, useState } from "react";
import { useProducts } from "../../../context/ProductsContext";
import { IProduct, UserNavFeatures } from "../../../utils/types";
import { filterSearchResults, getSearchInfo } from "../../../utils/utils";
import { DropdownProduct } from "../../molecules";
import SideBar from "../SideBar/SideBar";
import { SearchBox, SearchContainer, UserInfo } from "./Search.styles";

interface Props {
  handleVisible: (type: UserNavFeatures) => void;
}

export default function Search({ handleVisible }: Props) {
  const [value, setValue] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const { products } = useProducts();

  useEffect(() => {
    if (value.length > 2) {
      const filteredProducts = filterSearchResults(value, products);
      setTimeout(() => {
        setSearchResults([...filteredProducts]);
      }, 200);
      return;
    }
    setSearchResults([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    const userMsg = getSearchInfo(searchResults, value);
    setUserInfo(userMsg);
  }, [value, searchResults]);

  return (
    <SideBar onClick={() => handleVisible("searchBar")} title="Szukaj">
      <SearchContainer>
        <SearchBox
          type="text"
          placeholder="Szukaj!"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          data-testid="search-input"
        />
        <UserInfo>{userInfo}</UserInfo>
        {searchResults.length > 0 &&
          searchResults.map((product) => (
            <DropdownProduct
              key={product.id}
              product={product}
              variant="search"
            />
          ))}
      </SearchContainer>
    </SideBar>
  );
}
