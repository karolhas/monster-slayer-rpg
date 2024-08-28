"use client";

//hooks
import { useState } from "react";
import { useRouter } from "next/navigation";

//components
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const CreateCharacterPage = () => {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

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

  const handleNextClick = () => {
    if (!isNextButtonDisabled()) {
      router.push("/select-class");
    }
  };

  const isNextButtonDisabled = () => nickname === "" || error !== "";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[320px]">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Create Character
        </h2>
        <InputField
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="Enter your nickname"
          error={error}
        />
        <div className="flex space-x-4 justify-center">
          <Button href="/" variant={"primary"} size={"default"} weight={"bold"}>
            Back
          </Button>
          <Button
            href="/select-class"
            variant={"primary"}
            size={"default"}
            weight={"bold"}
            onClick={handleNextClick}
            disabled={isNextButtonDisabled()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCharacterPage;
