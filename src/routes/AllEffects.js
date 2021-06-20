import React from "react";
const effectsList = [
  { title: "Metallica", id: 101 },
  { title: "Rock", id: 102 },
  { title: "Limp Bizkit", id: 103 },
  { title: "Maiden", id: 104 },
  { title: "Space Solo", id: 105 },
  { title: "Manowar Style", id: 106 },
];

function AllEffects() {
  return (
    <div>
      <ul>
        {effectsList.map((item) => (
          <li style={{ listStyle: "none" }}>
            <a href={`/effects/${item.id}/edit`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEffects;
