import Image from "next/image";

import { useTheme } from "next-themes";
import { useState } from "react";

import PiggyBank from "../public/piggy-bank.svg";
import sun from "../public/sun.svg";
import moon from "../public/moon.svg";

const Header = () => {
  const [src, setSrc] = useState(sun);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "light") {
      setSrc(moon);
    }

    if (theme === "dark") {
      setSrc(sun);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 shadow-md dark:bg-dark">
      <div className="flex items-center space-x-2">
        <Image src={PiggyBank} width="36px" height="36px"></Image>
        <h1 className="text-2xl font-semibold dark:text-light">Sổ thu chi</h1>
      </div>

      <div className="flex justify-end pr-4">
        <div
          className="flex p-2 rounded-lg cursor-pointer hover:bg-light dark:hover:bg-gray-700"
          onClick={changeTheme}
        >
          <Image
            className="cursor-pointer"
            src={src}
            width="24px"
            height="24px"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
