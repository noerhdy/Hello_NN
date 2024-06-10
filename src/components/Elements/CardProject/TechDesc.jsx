import React from "react";

const TechDesc = (props) => {
  const { dotTitle, dot = " bg-yellow-500" } = props;
  return (
    <div className="flex items-center mt-6 space-x-2">
      <span className={`flex h-2 w-2 rounded-full${dot}`} />
      <p>{dotTitle}</p>
    </div>
  );
};

export default TechDesc;
