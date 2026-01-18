import Link from "next/link";
import { PiStorefront } from "react-icons/pi";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex gap-1 items-center text-2xl font-extrabold"
    >
      <PiStorefront size={30}  className="text-primary font-bold"/>
      <p>
        Next<span className="text-primary">Store</span>
      </p>
    </Link>
  );
};

export default Logo;
