"use client";
import { useState, useRef } from "react";
import {
  PaperAirplaneIcon,
  DocumentPlusIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

const Input = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [text, setText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setPicture(file);
    console.log(picture);
    console.log(event.target.files);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="border-2 border-gray-400 p-2 rounded-lg">
      <form
        action=""
        className="p-4 grid grid-cols-6 "
        onSubmit={handleSubmit}
      >
        <div className="text-input col-span-4">
          <input
            type="text"
            className="w-full p-2 bg-transparent placeholder:text-white outline-none"
            placeholder="Enter text"
            onChange={handleTextChange}
            required
          />
        </div>

        <div className="file-input cursor-pointer p-2 flex flex-col items-center hover:bg-gray-400 hover:rounded-md">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            hidden
            onChange={() => {
              handlePictureChange;
              console.log("uploaded");
              console.log(picture);
            }}
          />
          <DocumentPlusIcon
            className="w-10 h-8"
            onClick={() => {
              handleIconClick();
              console.log("clicked upload");
            }}
          />
        </div>

        <button
          type="submit"
          className="p-2 w-full flex flex-col items-center hover:bg-gray-400 hover:rounded-md"
        >
          <PaperAirplaneIcon className="w-10 h-8" />
        </button>
      </form>
    </div>
  );
};

export default Input;
