import React from "react";
import Iconheading from "./Iconheading";
const Asidemenu = ({ ProfileMenus }) => {
  return (
    <>
      <div className="shadow-sm shadow-gray-500 p-4">
        {ProfileMenus.map(({ icon, heading, key }) => {
          return (
            <div
              className={`${
                key === "order" ? "bg-gray-100" : "mt-6 bg-gray-100"
              }`}
              style={{ cursor: "pointer" }}
              key={key}
            >
              <Iconheading icon={icon} heading={heading} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Asidemenu;
