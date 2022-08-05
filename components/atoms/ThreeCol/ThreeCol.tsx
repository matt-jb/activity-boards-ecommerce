import {
  ImageContainer,
  StyledContainer,
  StyledLorem,
  TextContainer,
} from "./ThreeCol.styles";
import placeholder from "../../../public/img/placeholder-600x400.png";
import Image from "next/image";

interface Props {
  img?: boolean;
}

export default function ThreeCol({ img = false }: Props) {
  const cols = new Array(3).fill(0);

  return (
    <StyledContainer>
      {cols.map((_, i) => (
        <StyledLorem key={i}>
          {img && (
            <ImageContainer>
              <Image
                src={placeholder}
                layout="fill"
                objectFit="cover"
                alt="Insert your image"
              />
            </ImageContainer>
          )}
          <TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </TextContainer>
        </StyledLorem>
      ))}
    </StyledContainer>
  );
}
