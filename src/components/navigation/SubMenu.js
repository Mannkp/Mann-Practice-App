import Link from "next/link";
import SubItemsMenu from "./SubItemsMenu";

const SubMenu = ({ data }) => {
  return (
    <div className="bigMenu hidden bg-[#f2f2f2] w-full absolute top-full left-0 p-10 group-hover:block">
      <div className="bigMenu-container-1 container mx-auto flex flex-col md:flex-row justify-evenly">
        {data?.map((item, index) => (
          <div className={`item-${index} space-y-4`} key={index}>
            <Link
              href={"/"}
              className="text-xl font-bold text-gray-500 hover:text-black"
            >
              {item?.title}
            </Link>
            <SubItemsMenu data={item?.subItems} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
