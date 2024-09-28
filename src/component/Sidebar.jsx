import { Link } from "react-router-dom";
import { categories } from "./../utils/constans";
import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

const Sidebar = () => {
  const { category, setCategory } = useContext(VideoContext);
  return (
    <div className="flex flex-col p-1 md:p-4 ">
      {categories.map((item, i) => (
        <Link key={i} to="/" onClick={() => setCategory(item)}>
          <div
            className={`flex gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer items-center rounded-md hover:bg-[#2d2d2d] 
            ${item.name === category.name && "bg-[#2d2d2d]"}`}
          >
            <span className="max-md text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
Sidebar;
