import React from "react";

export const Technologies = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl gap-4">
      {img != null ? (
        <img src={img} alt="Skills" className="w-12 lg:w-20" />
      ) : (
        ""
      )}
      <p className="text-lg xl:text-3xl lg:text-2xl md:text-xl">{title}</p>
    </div>
  );
};
