"use client";
import React, { useState } from "react";
import Link from "next/link";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
        <div className="bg-purple-100 mx-auto max-w-lg flex flex-col justify-center items-center gap-4 p-10 mt-20 rounded-2xl">
          <h1 className="font-bold text-2xl">Generate your short URL</h1>
          <input
            className="px-4 py-1 bg-white rounded-lg focus:outline-purple-400 w-80 "
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
            }}
            type="text"
            name=""
            id=""
          />

          <input
            className="px-4 py-1 bg-white rounded-lg focus:outline-purple-400 w-80"
            value={shorturl}
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
            placeholder="Enter your preferred short url "
            type="text"
            name=""
            id=""
          />

          <button
            onClick={generate}
            className="bg-purple-300 p-2 px-8 rounded-2xl hover:bg-purple-500 cursor-pointer hover:scale-105 transform transition duration-300 hover:text-white"
          >
            Generate
          </button>
          {generated && (
            <>
              <h1 className="font-semibold text-1xl">Yourl Shorten Link</h1>
              <Link href={generated} target="_blank">
                {generated}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default shorten;
