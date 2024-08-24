import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/Manns_Blogs_Logo_80px.png";
import SubMenu from "./SubMenu";

const NavBar = () => {
  let subMenuMainData = [
    {
      title: "Home",
      linkTo: "/",
      subCategory: [
        {
          title: "Home Item1 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Home Item2 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Home Item3 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Home Item4 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
      ],
    },
    {
      title: "About Us",
      linkTo: "/about",
      subCategory: [
        {
          title: "About Us Item1 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "About Us Item2 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "About Us Item3 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "About Us Item4 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      linkTo: "/contact",
      subCategory: [
        {
          title: "Contact Us Item1 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Contact Us Item2 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Contact Us Item3 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Contact Us Item4 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
      ],
    },
    {
      title: "Blogs",
      linkTo: "/blogs",
      subCategory: [
        {
          title: "Blogs Item1 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Blogs Item2 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Blogs Item3 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
        {
          title: "Blogs Item4 →",
          subItems: [
            "MMLorem ipsum dolor",
            "Lorem, ipsum.",
            "lorem",
            "Lorem, ipsum dolor.",
            "Lorem, ipsum.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full sticky top-0 bg-[#f8f8f8] px-4">
      <nav className="container mx-auto flex justify-between items-center box-border">
        <div className="headerImage py-1">
          <Image
            src={logo}
            alt="Blog site logo"
            className="shadow-inner rounded-md mix-blend-exclusion text-black max-h-[60px]"
            placeholder="blur"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="headerLinks h-full">
          <ul className="flex list-none font-bold text-black items-center h-full md:flex-row">
            {subMenuMainData &&
              subMenuMainData?.map((item, index) => (
                <li
                  className="group transition-all duration-300 px-4 py-6 hover:bg-[#f2f2f2]"
                  key={index}
                >
                  <Link href={item?.linkTo} className="text-xl">
                    {item?.title}
                  </Link>
                  <SubMenu data={item?.subCategory} />
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
