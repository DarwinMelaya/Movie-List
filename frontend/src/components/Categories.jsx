import { useState, useEffect, useRef } from "react";
import { getMovieCategories } from "../services/api";
import "../css/Categories.css";

const Categories = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getMovieCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="categories-wrapper">
      <button
        className="scroll-button left"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        ‹
      </button>

      <div className="categories-container" ref={containerRef}>
        <button
          className={`category-btn ${!selectedCategory ? "active" : ""}`}
          onClick={() => onCategorySelect(null)}
        >
          All Movies
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <button
        className="scroll-button right"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
};

export default Categories;
