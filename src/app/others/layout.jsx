"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Layout = ({ children }) => {
  let pathname = usePathname();

  return (
    <>
      <header className="w-[90%] mx-auto flex sm:justify-around space-x-4">
        <Link
          href="/others/category"
          className={`px-4 py-2 rounded-md font-medium ${
            pathname=='/others/category'
              ? 'text-blue-600 bg-blue-100'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          Categories
        </Link>
        <Link
          href="/others"
          className={`px-4 py-2 rounded-md font-medium ${
            pathname == '/others'
              ? 'text-blue-600 bg-blue-100'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          Brands
        </Link>
        <Link
          href="/others/colors"
          className={`px-4 py-2 rounded-md font-medium ${
            pathname == '/others/colors'
              ? 'text-blue-600 bg-blue-100'
              : 'text-gray-800 hover:text-blue-600'
          }`}
        >
          Colors
        </Link>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
