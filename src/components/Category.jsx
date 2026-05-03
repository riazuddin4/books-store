import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const res = await fetch("http://localhost:3000/category.json",{cache: 'no-store'});
  const categories = await res.json();
  return (
    <div className="mb-5 space-x-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          {" "}
          {/* <Button variant="outline" size="sm">
            {category.name}
          </Button> */}
          <li className="bg-slate-100 p-2 rounded-md text-center ">{category.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Category;
