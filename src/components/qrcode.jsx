import React from "react";

const Qrcode = ({ qrCodeSource }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="rounded-[8px] shadow-md max-w-full max-h-full p-2"
        src={qrCodeSource}
        alt=""
      />
    </div>
  );
};
export default Qrcode;
