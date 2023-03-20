import { IconImage } from "./styles/Image.styled";

type Icon = {
  iconSrc: string;
  alt: string;
};

function Icon(props: Icon) {
  return (
    <IconImage
      src={props.iconSrc}
      alt={props.alt}
    />
  );
}

export default Icon;
