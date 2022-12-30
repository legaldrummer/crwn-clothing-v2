import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const capitalizedTitle = `${title[0].toUpperCase()}${title.slice(1)}`;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{capitalizedTitle}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
