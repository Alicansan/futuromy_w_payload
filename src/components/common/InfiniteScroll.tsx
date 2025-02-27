import React from "react";

const placeholdup = [
  { id: 1, color: "#3e4f6a" },
  { id: 2, color: "#f2a3bc" },
  { id: 3, color: "#67d89f" },
  { id: 4, color: "#abc123" },
  { id: 5, color: "#5b6a7f" },
  { id: 6, color: "#ff5733" },
];

interface InfiniteScrollProps {
  rotate?: boolean;
}

const InfiniteScroll = ({ rotate }: InfiniteScrollProps) => {
  return (
    <section
      className={`md:transparent-div relative -z-10 my-24 inline-flex w-full flex-nowrap overflow-hidden ${rotate ? "-rotate-3" : ""}`}
    >
      <ul className="flex max-w-none animate-infinite-scroll items-center justify-center md:justify-start">
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
      <ul className="flex max-w-none animate-infinite-scroll items-center justify-center md:justify-start">
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
    </section>
  );
};

export default InfiniteScroll;
