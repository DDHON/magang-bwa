import { navbar } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex relative items-center w-full flex-row md:px-[75px] px-[25px] py-[25px] bg-white ">
      <div className="flex flex-row mr-[6px] items-center">
        <Image src="/navbrand.png" width={40} height={40} alt="navbrand" />
        <h1 className="font-extrabold text-[24px] mr-[40px]">Obito</h1>
      </div>
      <div className="flex flex-row lg:justify-between justify-end w-full lg ">
        <div className="gap-[50px] lg:flex items-center hidden">
          {navbar.map((item) => (
            <Link
              className={`text-[16px] hover:font-bold ${item.label === "Home" ? "font-bold" : "font-normal"}`}
              key={item.label}
              href={item.route}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex-row items-center gap-[20px] sm:flex hidden">
          <Image
            src="/device-message.png"
            alt="device message"
            width={24}
            height={24}
          />
          <Separator orientation="vertical" className="bg-gray-outline" />
          <div className="gap-[12px] flex">
            <Button
              variant="outline"
              className="px-[20px] py-[20px] bg-white rounded-[50px] cursor-pointer border-gray-outline font-semibold"
            >
              Sign in
            </Button>
            <Button className="px-[20px] py-[20px] text-white cursor-pointer rounded-[50px] bg-primary font-semibold">
              My Account
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
