import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import {
  DirectoryItemComponentDiv,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";
const DirectoryItemComponent = (props) => {
  const navigate = useNavigate();
  const { category } = props;
  return (
    <DirectoryItemComponentDiv onClick={() => navigate(category.route)}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category?.title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemComponentDiv>
  );
};

export default DirectoryItemComponent;
