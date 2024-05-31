"use client";
import { useState, useRef } from "react";
import {
  PaperAirplaneIcon,
  DocumentPlusIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import { log } from "console";

const Input = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setPicture(file);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(text);
  };
  return (
    <div className="bg-yellow-500 p-2 rounded-lg">
      <form
        action=""
        className="bg-green-300 p-4 grid grid-cols-6 "
        onSubmit={handleSubmit}
      >
        <div className="text-input bg-blue-400 col-span-4">
          <input
            type="text"
            className="w-full p-2 bg-transparent placeholder:text-white outline-none"
            placeholder="Enter text"
            onChange={handleTextChange}
          />
        </div>

        <div className="file-input cursor-pointer bg-purple-400 p-2 flex flex-col items-center hover:bg-gray-400 hover:rounded-md">
          <input
            type="file"
            accept="image/*"
            onChange={() => handlePictureChange}
            hidden
          />
          <DocumentPlusIcon
            className="w-10 h-8"
            onClick={() => {
              console.log("clicked upload");
            }}
          />
        </div>

        <button
          type="submit"
          className="p-2 bg-gray-600 w-full flex flex-col items-center hover:bg-gray-400 hover:rounded-md"
        >
          <PaperAirplaneIcon className="w-10 h-8" />
        </button>
      </form>
    </div>
  );
};

export default Input;
