function App() {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Mens" },
    { id: 4, title: "Womens" },
    { id: 5, title: "Kids" },
  ];

  return (
    <div>
      <div className="categoies-container">
        {categories.map((category) => {
          return (
            <div key={category.id} className="category-container">
              {/* <img src="" alt="" /> */}
              <div className="category-body-container">
                <h2>{category?.title}</h2>
                <p>Shop now</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
