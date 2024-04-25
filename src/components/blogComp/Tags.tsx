import React from "react";

function Tags({ list }) {
  return (
    <ul className="w-full ">
      {list.map((tag, idx) => (
        <li key={idx} className="inline-block px-1 opacity-60">
          <i>#{tag}</i>
          {/* should be added links to search meals by tag */}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
