"use client";
import Input from "@/components/input";
import { useState, useRef } from "react";
import {
  PaperAirplaneIcon,
  DocumentPlusIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [res, setRes] = useState();
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

  // The varible that store the header, payload, and method
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify("user input"),
  };
  // fetch function
  // the options variable should be pass in the function below. Eg (url:string, options)
  async function fetchData(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${url}, status: ${response.status}`
      );
    }
    // console.log( await response.json());

    return await response.json();
  }

  // fetch function end

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`input text: ${text}, uploaded pic${picture}`);

    // demo-api
    // https://jsonplaceholder.typicode.com/users
    // call function after submit
    const data = await fetchData("https://jsonplaceholder.typicode.com/users");
    setRes(data);
    console.log(data);
  };

  return (
    <div className="chat p-4">
      {/* Chat here */}

      {/* <Input /> */}

      <div className="border-2 border-gray-400 p-2 rounded-lg">
        {/* form */}
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
      
      {/* display  */}
      <div className="p-2 m-4">
        <p>Response:</p>
        {res?(res): <p className="bg-gray-300">No response yet</p>}
      </div>
    </div>
  );
};

export default Page;

// move the state to the main app
// axios, fetch or React query for api
//  File type determination , audio(recorded), document, text
