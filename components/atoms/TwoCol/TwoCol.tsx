import {
  ImageContainer,
  StyledContainer,
  StyledLorem,
  TextContainer,
} from "./TwoCol.styles";
import placeholder from "../../../public/img/600x400.jpg";
import Image from "next/image";

interface Props {
  paras?: number;
  img?: boolean;
}

export default function TwoCol({ paras = 1, img = false }: Props) {
  const arr = new Array(paras).fill(0);

  return (
    <StyledContainer>
      {arr.map((_, i) => (
        <StyledLorem key={i}>
          <TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TextContainer>
          {img ? (
            <ImageContainer>
              <Image
                src={placeholder}
                layout="fill"
                objectFit="cover"
                alt="Insert your image"
              />
            </ImageContainer>
          ) : (
            <TextContainer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TextContainer>
          )}
        </StyledLorem>
      ))}
    </StyledContainer>
  );
}
