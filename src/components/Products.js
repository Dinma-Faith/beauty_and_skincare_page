import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Test() {
  const pictures = [
    {
      url: "https://media.istockphoto.com/id/1148053219/photo/man-spa-relaxation-concept-different-day-spa-products-on-white-ceramic-tray-on-wooden-table.jpg?s=1024x1024&w=is&k=20&c=PTzurJjl5MsF6D5dxySE5n53QCBtCSGD6KxkhfCIhWU=",
    },
    {
      url: "https://media.istockphoto.com/id/1363562735/photo/set-of-hair-care-cosmetic-products-on-light-grey-stone-table-in-bathroom-space-for-text.jpg?s=1024x1024&w=is&k=20&c=oCwZ4RXXLPTUwjsmvPGEYbZ88QbPL4Oki1tXbIx07N4=",
    },
    {
      url: "https://media.istockphoto.com/id/1280052940/photo/skincare-products-to-use-while-having-to-wear-a-facemask-during-the-covid-19-pandemic.jpg?s=1024x1024&w=is&k=20&c=ci3TONjBOMP8iEhkPaPSGIZjUR8UgnethoPqqAxctEs=",
    },
    {
      url: "https://media.istockphoto.com/id/520359482/photo/cosmetics-packaging.jpg?s=1024x1024&w=is&k=20&c=CW3sCJfB8KOIL_iQNvL-wt5Gm82CvYwcfm3_mtDHF-o=",
    },
    {
      url: "https://media.istockphoto.com/id/1413882368/photo/olive-oil-bottles.jpg?s=1024x1024&w=is&k=20&c=AxrOOJqhixrtyG4PAAGjuQcxHYNVQJsKtjciT0-2pZQ=",
    },
    {
      url: "https://media.istockphoto.com/id/1426923158/photo/transparent-bottle-with-serum-or-cosmetic-product-on-a-green-background.jpg?s=1024x1024&w=is&k=20&c=lf-6IZkKgcj5AF6Jl7BMG7ftbqy0hZTKxSplmmH0gto=",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full">
      <Carousel responsive={responsive} className="z-10">
        {pictures.map((picture) => (
          <img src={picture.url} className="w-full h-auto" alt="product-img" />
        ))}
      </Carousel>
    </div>
  );
}
