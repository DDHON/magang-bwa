"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // Gunakan ref untuk input file

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-[16px] my-[50px] md:ml-[75px] ml-[25px] lg:max-w-2/5 w-full rounded-[20px] border-gray-outline border-1 p-[20px] bg-white md:mr-[50px] mr-[25px]">
          <h1 className="font-bold text-[22px] text-secondary">
            Upgrade Your Skills
          </h1>
          <div className="flex items-center gap-[12px]">
            <div
              className="w-[90px] h-[90px] rounded-full overflow-hidden border-1 border-gray-outline cursor-pointer flex flex-row items-center justify-center"
              onClick={handleAvatarClick}
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <span className="font-semibold text-secondary text-center flex-wrap">
                    Add
                    <br />
                    Photo
                  </span>
                </div>
              )}
            </div>
            {avatar && (
              <button
                onClick={handleRemoveAvatar}
                className="px-[10px] py-[6px] bg-[#FFE3E1] text-[#EF372B]  font-bold rounded-[50px]"
              >
                DELETE PHOTO
              </button>
            )}
            <Input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="w-full">
            <Label
              htmlFor="name"
              className="font-normal text-[16px] text-secondary mb-2"
            >
              Complete Name
            </Label>

            <div className="flex items-center gap-2 border border-gray-outline rounded-[50px]   shadow-none focus-within:ring-2 focus-within:ring-primary">
              <Image
                src="/profile.png"
                alt="profile"
                height={20}
                width={20}
                className="object-contain items-center ml-[20px]"
              />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="flex-1 border-none no-focus shadow-none text-[16px] p-0 text-secondary focus:text-secondary font-semibold my-[14px]"
              />
            </div>
          </div>
          <div className="w-full">
            <Label
              htmlFor="job"
              className="font-normal text-[16px] text-secondary mb-2"
            >
              Occupation
            </Label>

            <div className="flex items-center gap-2 border border-gray-outline rounded-[50px]   shadow-none focus-within:ring-2 focus-within:ring-primary">
              <Image
                src="/briefcase.png"
                alt="briefcase"
                height={20}
                width={20}
                className="object-contain items-center ml-[20px]"
              />
              <Input
                id="job"
                type="text"
                placeholder="Your current job or profession"
                className="flex-1 border-none no-focus shadow-none text-[16px] p-0 text-secondary focus:text-secondary font-semibold my-[14px]"
              />
            </div>
          </div>
          <div className="w-full">
            <Label
              htmlFor="email"
              className="font-normal text-[16px] text-secondary mb-2"
            >
              Email Address
            </Label>

            <div className="flex items-center gap-2 border border-gray-outline rounded-[50px]   shadow-none focus-within:ring-2 focus-within:ring-primary">
              <Image
                src="/sms.png"
                alt="mail"
                height={20}
                width={20}
                className="object-contain items-center ml-[20px]"
              />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email (e.g., name@example.com)"
                className="flex-1 border-none no-focus shadow-none text-[16px] p-0 text-secondary focus:text-secondary font-semibold my-[14px]"
              />
            </div>
          </div>
          <div className="w-full">
            <Label
              htmlFor="password"
              className="font-normal text-[16px] text-secondary mb-2"
            >
              Password
            </Label>

            <div className="flex items-center gap-2 border border-gray-outline rounded-[50px]   shadow-none focus-within:ring-2 focus-within:ring-primary">
              <Image
                src="/shield-security.png"
                alt="shield"
                height={20}
                width={20}
                className="object-contain items-center ml-[20px]"
              />
              <Input
                id="pass"
                type="password"
                placeholder="Create a strong password"
                className="flex-1 border-none no-focus shadow-none text-[16px] p-0 text-secondary focus:text-secondary font-semibold my-[14px]"
              />
            </div>
          </div>
          <div className="w-full">
            <Label
              htmlFor="password"
              className="font-normal text-[16px] text-secondary mb-2"
            >
              Confirm Password
            </Label>

            <div className="flex items-center gap-2 border border-gray-outline rounded-[50px]  shadow-none focus-within:ring-2 focus-within:ring-primary">
              <Image
                src="/shield-security.png"
                alt="shield"
                height={20}
                width={20}
                className="object-contain items-center ml-[20px]"
              />
              <Input
                id="pass"
                type="password"
                placeholder="Re-enter your password"
                className="flex-1 border-none no-focus shadow-none text-[16px] p-0 text-secondary focus:text-secondary font-semibold my-[14px]"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-[14px] text-center rounded-[50px] text-[16px] font-semibold text-white min-h-[52px] cursor-pointer"
          >
            Create My Account
          </Button>
        </div>

        <div className="lg:flex hidden min-h-[847px] flex-auto">
          <img
            src="/image.png"
            alt="banner"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </>
  );
}
