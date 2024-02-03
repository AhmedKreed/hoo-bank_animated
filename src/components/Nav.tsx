"use client";
import Image from "next/image";
import { logo } from "@/assets";
import { navLinks } from "@/constants";
import Link from "next/link";
import { close, menu } from "@/assets";
import { useState } from "react";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="section flex justify-between py-6 items-center">
      <Image src={logo} alt={"Hoo-Bank"} width={124} height={32} />
      <ul className="list-none flex max-sm:hidden sm:gap-10 md:gap-12 lg:gap-14">
        {navLinks.map((link) => (
          <li key={link.id} className="cursor-pointer text-[16px] text-white">
            <Link href={`#${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex">
        <Image
          src={toggle ? close : menu}
          alt={"menu"}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex flex-col" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col gap-5  ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer text-[16px] text-white text-center"
              >
                <Link href={`#${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
