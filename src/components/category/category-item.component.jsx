import "./category-item.styles.scss";

const CategoryItemComponent = (props) => {
  const { category } = props;
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category?.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItemComponent;