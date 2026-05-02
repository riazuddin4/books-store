"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  return (
    // <div className="border-b px-2">
    //   <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
    //     <div className="flex gap-2 items-center">
    //       <Link href="/">
    //         <Image
    //           src={"/logo-books.png"}
    //           alt="logo"
    //           loading="eager"
    //           width={70}
    //           height={70}
    //           className="object-cover h-auto w-auto"
    //         />
    //       </Link>
    //       {/* <h3 className="font-black text-lg"></h3> */}
    //     </div>
    //     <div>

    //       <ul className="flex items-center gap-5 text-sm">
    //         <li>
    //           <Link href={"/"}>Home</Link>
    //         </li>
    //         <li>
    //           <Link href={"/all-books"}>All Books</Link>
    //         </li>

    //         <li>
    //           <Link href={"/profile"}>Profile</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <Link href={"/"}>Home</Link>
    //         </li>
    //         <li>
    //           <Link href={"/all-books"}>All Books</Link>
    //         </li>

    //         <li>
    //           <Link href={"/profile"}>Profile</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="flex gap-4">
    //       {!user && (
    //         <ul className="flex items-center  text-sm gap-5">
    //           <li>
    //             <Link href={"/signup"}>SignUp</Link>
    //           </li>
    //           <li>
    //             <Link href={"/signin"}>SignIn</Link>
    //           </li>
    //         </ul>
    //       )}

    //       {user && (
    //         <div className="flex gap-3">
    //           <Avatar size="sm">
    //             <Avatar.Image
    //               alt="John Doe"
    //               src={user?.image}
    //               referrerPolicy="no-referrer"
    //             />
    //             <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
    //           </Avatar>

    //           <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
    //         </div>
    //       )}
    //     </div>
    //   </nav>
    // </div>

    <nav className='bg-base-100 shadow-sm'>

      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/all-books"}>All Books</Link>
              </li>

              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
            </ul>
          </div>
          {/* <h2 className=" font-bold text-xl">Book Vibe</h2> */}
          <Link href="/">
            <Image
              src={"/logo-books.png"}
              alt="logo"
              loading="eager"
              width={70}
              height={70}
              className="object-cover h-auto w-auto"
            /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-books"}>All Books</Link>
            </li>

            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="flex gap-4">
            {!user && (
              <ul className="flex items-center  text-sm gap-5">
                <li>
                  <Link href={"/signup"}>SignUp</Link>
                </li>
                <li>
                  <Link href={"/signin"}>SignIn</Link>
                </li>
              </ul>
            )}

            {user && (
              <div className="flex gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
