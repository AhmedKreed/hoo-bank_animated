import { footerLinks, socialMedia } from "@/constants";
import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
const Footer = () => (
  <footer className="section mt-5 pb-8 pt-[72px]">
    <div className="flex justify-between flex-wrap gap-5">
      <div className="sm:mb-0 mb-14">
        <Image src={logo} alt={"logo"} width={266} />
        <p className="max-w-[312px] ml-6 leading-[32px] mt-8 text-dimWhite">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      {footerLinks.map((link) => (
        <div key={link.title} className="mb-10">
          <h4 className="text-[18px] font-medium leading-[150%] mb-11">
            {link.title}
          </h4>
          <ul className="flex flex-col gap-3 ">
            {link.links.map((links) => (
              <li key={links.name}>
                <Link
                  href={links.link}
                  className="text-dimWhite leading-[150%]"
                >
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="bg-[#3F3E45] line ml-auto h-[1px] mb-8" />
    <div className="flex md:justify-between md:flex-row flex-col ml-6 gap-8">
      <p className="text-dimWhite leading-[150%] text-[18px]">
        Copyright © {new Date().getFullYear()} HooBank. All Rights Reserved.
      </p>
      <div className="flex gap-8">
        {socialMedia.map((items) => (
          <Link key={items.id} href={items.link}>
            <Image src={items.icon} alt={items.id} />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
