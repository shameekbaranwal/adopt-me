import React from "react";
import { Link } from "react-router-dom";

export const PageNav = ({ pagination, className = "" }) => {
  if (!pagination) return null;

  const hasNext = pagination.current_page < pagination.total_pages;
  const hasPrev = pagination.current_page > 1;
  const page = pagination.current_page;

  return (
    <div className={"flex justify-center " + className}>
      <Link
        className="mx-10 my-5"
        to={hasPrev ? `/${parseInt(page, 10) - 1}` : "#"}
      >
        <div
          className={`text-xl px-5 py-1 rounded-full ${
            hasPrev
              ? "bg-gray-300 hover:bg-gray-800 hover:text-gray-50 transition duration-200 text-gray-800"
              : "bg-gray-900 text-gray-50 cursor-default"
          }`}
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </Link>
      <Link
        className="mx-10 my-5"
        to={hasNext ? `/${parseInt(page, 10) + 1}` : "#"}
      >
        <div
          className={`text-xl px-5 py-1 rounded-full ${
            hasNext
              ? "bg-gray-300 hover:bg-gray-800 hover:text-gray-50 transition duration-200 text-gray-800"
              : "bg-gray-900 text-gray-50 cursor-default"
          }`}
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};
