import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Accesorios",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/accesorios",
  },
  {
    id: 2,
    title: "Camperas",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/camperas",
  },
  {
    id: 3,
    title: "Zapatillas",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/zapatillas",
  },
  {
    id: 4,
    title: "Mujeres",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/mujeres",
  },
  {
    id: 5,
    title: "Hombres",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/hombres",
  },
];

const Directory = () => {
  return (
    <div>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};

export default Directory;
