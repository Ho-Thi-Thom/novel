import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { GiEvilBook } from "react-icons/gi";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
const Novel = () => {
  const { id } = useParams();
  alert(id);
  return (
    <div>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="p-4 mx-auto max-w-screen-xl md:mx-6 xl:mx-2">
          <div class="flex justify-center">
            <ul class="flex flex-row space-x-5 text-sm font-medium-">
              <li className="flex flex-col items-center">
                <GiEvilBook className="text-2xl" />
                <Link
                  to="*"
                  className="text-gray-900 dark:text-white hover:none hover:text-red-600 "
                >
                  Novel
                </Link>
              </li>
              <li className="flex flex-col items-center">
                <RiCharacterRecognitionLine className="text-2xl" />
                <Link
                  to="vocabulary"
                  className="text-gray-900 dark:text-white hover:none hover:text-red-600 "
                >
                  Vocabulary
                </Link>
              </li>
              <li className="flex flex-col items-center">
                <BsCheck2Circle className="text-2xl" />
                <Link
                  to="multiple"
                  className="text-gray-900 dark:text-white hover:none hover:text-red-600 "
                >
                  Multiple
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Novel;
