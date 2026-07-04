"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  open: boolean;
  close: () => void;
  images: string[];
  index: number;
};

export default function ProductLightbox({
  open,
  close,
  images,
  index,
}: Props) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={images.map((src) => ({ src }))}
    />
  );
}