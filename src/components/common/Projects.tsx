import React from 'react';
import InfiniteScroll from './InfiniteScroll';
const placeholdup = [
  { id: 1, color: '#3e4f6a' },
  { id: 2, color: '#f2a3bc' },
  { id: 3, color: '#67d89f' },
  { id: 4, color: '#abc123' },
  { id: 5, color: '#5b6a7f' },
  { id: 6, color: '#ff5733' },
];
const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto flex max-w-7xl flex-col items-center py-12 text-center"
    >
      <div className="mx-auto grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-3">
        {placeholdup.map((item, index) => (
          <div
            key={index}
            className={`m-3 h-[240px] w-[330px] rounded-lg shadow-lg`}
            style={{ backgroundColor: item.color }}
          >
            {item.id}
          </div>
        ))}
      </div>
      <InfiniteScroll />
    </div>
  );
};

export default Projects;
