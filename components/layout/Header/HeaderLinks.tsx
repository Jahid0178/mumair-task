import React from "react";
import Link from "next/link";
import menuIcon from "@/public/svg/menu.svg";
import { headerLinks } from "@/data/data";
import { HeaderLinksType } from "@/typescript/types";
import Image from "next/image";
import Button from "@/components/common/Button/Button";

const HeaderLinks = () => {
  return (
    <div>
      <ul className="hidden lg:flex items-center gap-4">
        {headerLinks.map((link: HeaderLinksType) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className="text-base py-[10px] px-[10px] inline-block md:text-lg xl:text-xl"
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Button className="btn-primary">Download CV</Button>
        </li>
      </ul>
      <button className="block lg:hidden p-2">
        <Image
          src={menuIcon}
          alt="menu"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default HeaderLinks;
