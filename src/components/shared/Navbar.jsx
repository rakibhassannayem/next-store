"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useAuth } from "@/context/authContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const links = (
    <>
      <li className="font-medium text-lg">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="font-medium text-lg">
        <Link href={"/products"}>Products</Link>
      </li>
      {user && (
        <li className="font-medium text-lg">
          <Link href={"/protected"}>Protected</Link>
        </li>
      )}
      {user ? (
        <div className="flex items-center gap-4 ml-4">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-primary leading-tight">
              {user.name}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-tighter">
              {user.role}
            </span>
          </div>
          <li>
            <button
              onClick={logout}
              className="btn btn-outline btn-error rounded-full px-6"
            >
              Logout
            </button>
          </li>
        </div>
      ) : (
        <li className="ml-4">
          <Link
            href={"/login"}
            className="btn btn-primary text-white rounded-full px-8 shadow-lg shadow-primary/20"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm py-4">
      <div className="container mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-64 p-4 shadow-xl gap-2"
            >
              {links}
            </ul>
          </div>

          <Logo />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

