import Image from "next/image";
import PiggyBank from "../public/piggy-bank.svg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center space-x-4 p-4 shadow-md">
        <Image src={PiggyBank} width="36px" height="36px"></Image>
        <h1 className="text-2xl font-semibold">Sổ thu chi</h1>
      </div>
    </div>
  );
};

export default Header;
