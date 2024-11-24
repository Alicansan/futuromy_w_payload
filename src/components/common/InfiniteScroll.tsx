import React from 'react';

const placeholdup = [
  { id: 1, color: '#3e4f6a' },
  { id: 2, color: '#f2a3bc' },
  { id: 3, color: '#67d89f' },
  { id: 4, color: '#abc123' },
  { id: 5, color: '#5b6a7f' },
  { id: 6, color: '#ff5733' },
];

interface InfiniteScrollProps {
  rotate?: boolean;
}

const InfiniteScroll = ({ rotate }: InfiniteScrollProps) => {
  return (
    <div
      className={`inline-flex w-full flex-nowrap ${rotate ? '-rotate-3' : ''}`}
    >
      <ul className="animate-infinite-scroll flex max-w-none items-center justify-center md:justify-start">
        {placeholdup.map((item) => (
          <li key={item.id}>
            <div
              className={`ml-3 h-[240px] w-[330px] rounded-lg shadow-lg`}
              style={{ backgroundColor: item.color }}
            >
              {item.id}
            </div>
          </li>
        ))}
      </ul>
      <ul className="animate-infinite-scroll flex max-w-none items-center justify-center md:justify-start">
        {placeholdup.map((item) => (
          <li key={item.id}>
            <div
              className={`ml-3 h-[240px] w-[330px] rounded-lg shadow-lg`}
              style={{ backgroundColor: item.color }}
            >
              {item.id}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScroll;
