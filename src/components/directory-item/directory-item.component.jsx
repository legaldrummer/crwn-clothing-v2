import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  console.log(route);
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  const capitalizedTitle = `${title[0].toUpperCase()}${title
    .slice(1)
    .toLowerCase()}`;

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{capitalizedTitle}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
