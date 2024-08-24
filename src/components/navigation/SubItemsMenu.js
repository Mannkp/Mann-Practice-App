import Link from "next/link";

const SubItemsMenu = ({ data }) => {
  return (
    <ul className="bigMenu-item container list-none">
      {data?.map((item, index) => (
        <li className="text-gray-600 hover:text-black" key={index}>
          <Link href={"#"}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubItemsMenu;
