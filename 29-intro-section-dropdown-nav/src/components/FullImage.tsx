import { ImageMobile } from "./styles/Image.styled";

type FullImage = {
  imgSrc: string;
};

function FullImage(props: FullImage) {
  return (
    <>
      <ImageMobile src={props.imgSrc} />
    </>
  );
}

export default FullImage;
