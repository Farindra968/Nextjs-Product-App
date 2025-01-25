"use client";

import Error from "@/components/Ui/ErrorCard";

const error = ({ error }) => {
  return (
    <div className="max-w-screen-xl h-svh mx-auto ">
      <div className="py-10">
        <p className="text-xl text-text-secondary text-center font-poppins-semibold py-10">
          {error.message}
        </p>
        <Error />
      </div>
    </div>
  );
};

export default error;
