import { useState } from 'react'
import Card from "./Card.jsx"

const Carousel = ({ data }) => {
  // This keeps track of the current card being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Store total number of items for easy access
  const totalItems = data.length;

  // Function to go to the previous card
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      //is the index zero? if so, set index to items minus one, otherwise tick index down
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  // Function to go to the next card
  const next = () => {
    setCurrentIndex((prevIndex) =>
      // is the index equal to the length of items? if so, set index to zero, otherwise, tick index up
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center md:w-3/5 md:mx-auto">
      {/* Render the current card */}
      <Card
        title={data[currentIndex].title}
        body={data[currentIndex].body}
      />

      {/* Navigation buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel;
