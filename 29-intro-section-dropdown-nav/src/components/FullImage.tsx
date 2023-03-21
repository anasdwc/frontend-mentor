import { ImageDesktop, ImageMobile } from "./styles/Image.styled";

type FullImage = {
  mobileImg: string;
  desktopImg: string;
};

function FullImage(props: FullImage) {
  return (
    <>
      {window.innerWidth > 768 ? (
        <ImageDesktop src={props.desktopImg} />
      ) : (
        <ImageMobile src={props.mobileImg} />
      )}
    </>
  );
}

export default FullImage;
