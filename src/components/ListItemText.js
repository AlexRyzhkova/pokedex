// import React from "react";
// import "./ListItemText.css";

// export default function ListItemText(props) {
//   return (
//     <div>
//       <span className="listItemTitle">{props.title}</span>
//       <span className="listItemSubtitle">{props.subtitle}</span>
//     </div>
//   );
// }
import React from "react";
import "./ListItemText.css";

function ListItemText({ primary, secondary }) {
  return (
    <div className="listItemtext">
      <span className="listItemtext__primary">{primary}</span>
      <span className="listItemtext__secondary">{secondary}</span>
    </div>
  );
}

export default ListItemText;
