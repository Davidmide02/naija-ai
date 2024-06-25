"use client";
import Input from "@/components/input";
import { useState, useRef } from "react";
import {
  PaperAirplaneIcon,
  DocumentPlusIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

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

  async function fetchData(url: string, headerInfo: RequestInit | undefined) {
    const response = await fetch(url, headerInfo);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${url}, status: ${response.status}`
      );
    }
    // console.log( await response.json());

    return await response.json();
  }

  async function sendQueryRes(payload: { query: string }) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(
        "http://0.0.0.0:5000/generate",
        payload,
        { headers }
      );
      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Error sending query:", error);
      throw error; // Re-throw the error for further handling
    }
  }
  // fetch function end

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: 'Who is Barak Obama?'
  //   }),
  //   body: {query:'who is Barak Obama'}
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`input text: ${text}, uploaded pic${picture}`);

    const payload = {
      query: "Who is Barak Obama?",
      // the above query is hardcoded for testing 👆👆👆

      // uncomment the query one below when tested working 👇👇👇
      // query: text
    };

    sendQueryRes(payload)
      .then((data) => {
        console.log("Response data:", data);
        setRes(data);
      })
      .catch((error) => {
        console.error("Error processing response:", error);
      });
    // const data = await fetchData("http://0.0.0.0:3000/generate", options);
  };

  return (
    <div className="chat p-4">
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
        {res ? res : <p className="bg-gray-300">No response yet</p>}
      </div>
    </div>
  );
};

export default Page;

// move the state to the main app
// axios, fetch or React query for api
//  File type determination , audio(recorded), document, text
