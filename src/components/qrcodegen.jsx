import React, { useState } from "react";
import Qrcode from "./qrcode";
import Content from "./content";

const Qrcodegen = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeSource, setQrCodeSource] = useState("");
  const qrCodeUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const concatenatedValue = qrCodeUrl + encodeURIComponent(inputValue);
    setQrCodeSource(concatenatedValue);
  };

  return (
    <div className="box-border bg-gradient-to-t from-[#f5bf3b] to-[#efea56] w-screen h-screen flex justify-center items-center p-[20px]">
      <div className="bg-white h-auto  rounded-[8px] space-y-3 my- md:w-[350px] px-[20px] py-[30px]">
        <p className="text-[16px] font-[500] font-[poppins] md:text-[18px]">
          {Content.title}
        </p>
        <input
          className="w-full text-[12px] font[300] bg-gray-100 outline-none focus:border border-[#f5bf3b] rounded-[8px] p-2 md:text-[14px]"
          type={Content.text}
          placeholder={Content.placeholder}
          value={inputValue}
          onChange={getInputValue}
        />
        <Qrcode qrCodeSource={qrCodeSource} />
        <button
          onClick={handleButtonClick}
          className="w-full rounded-[8px] p-2 text-white text-[12px] font-[500] font-[poppins] bg-[#f5bf3b] hover:bg-gradient-to-t from-[#f5bf3b] to-[#efea56] md:text-[12px]"
        >
          {Content.buttontext}
        </button>
      </div>
    </div>
  );
};

export default Qrcodegen;
