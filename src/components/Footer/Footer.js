import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/Manns_Blogs_Logo_80px.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-40 bg-blue-900 relative bottom-0 mt-28">
        <nav className="container mx-auto flex justify-between items-center h-full py-6">
          <Image
            src={logo}
            alt="Blog site logo"
            className="h-full shadow-inner rounded-3xl"
            placeholder="blur"
          />
          <ul className=" hidden md:flex list-none font-bold space-x-12 text-white">
            <li>
              <Link href={"/"} className="text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-xl">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="text-xl">
                Contact US
              </Link>
            </li>
            <li>
              <Link href={"/blogs"} className="text-xl">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Footer;
