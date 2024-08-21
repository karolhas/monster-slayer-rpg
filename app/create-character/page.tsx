"use client";

//hooks
import { useState } from "react";
import Link from "next/link";

const CreateCharacterPage = () => {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNickname(value);
    validateNickname(value);
  };

  const validateNickname = (value: string) => {
    if (value.length < 3 || /[^a-zA-Z]/.test(value)) {
      setError(
        "Nickname should be at least 3 characters long and contain only letters."
      );
    } else {
      setError("");
    }
  };

  const isNextButtonDisabled = nickname === "" || error !== "";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[320px]">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Create Character
        </h2>
        <div className="mb-8">
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error ? "border-red-500" : ""
            }`}
            placeholder="Enter your nickname"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="flex space-x-4 justify-center">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 tansition duration-200 text-white font-bold py-2 px-4 rounded">
              Back
            </button>
          </Link>
          <button
            disabled={isNextButtonDisabled}
            className={`${
              isNextButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 tansition duration-200 text-white"
            } font-bold py-2 px-4 rounded`}
          >
            {!isNextButtonDisabled ? (
              <Link href="/select-class">Next</Link>
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCharacterPage;
