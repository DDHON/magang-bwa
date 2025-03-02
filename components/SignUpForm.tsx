"use client";
import Image from "next/image";
import React, { useState } from "react";

const SignUpForm = () => {
  const ProfilePhoto = () => {
    const [photo, setPhoto] = useState<string | null>(null);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPhoto(imageUrl);
      }
    };

    const handleDelete = () => {
      setPhoto(null);
    };
  };
  return (
    <div className=" flex-row flex gap-[50px] justify-between items-center ml-[75px] mr-0">
      <div className="flex flex-col gap-[16px] w-2/5 mt-[50px] rounded-[20px] border-gray-outline border-1 p-[20px] bg-white">
        <h1 className="font-bold text-[22px] text-secondary">
          Upgrade Your Skills
        </h1>
      </div>
      <div className="w-1/2">
        <Image
          src="/banner.png"
          alt="banner"
          width={645}
          height={847}
          className="h-full"
        />
      </div>
    </div>
  );
};

export default SignUpForm;
