const categories = [
    { name: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { name: "Vegetables", items: ["Carrot", "Lettuce", "Spinach"] }
  ];
  
  function CategoryList() {
    return (
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item, subIndex) => (
                <li key={subIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  