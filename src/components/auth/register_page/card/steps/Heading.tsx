import React from "react";

const Heading = ({ subHeading }: { subHeading: any }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
      <h1 className="text-4xl font-bold">REGISTER</h1>
      <p className="w-full text-center">{subHeading}</p>
    </div>
  );
};

export default React.memo(Heading);
