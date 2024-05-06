import React from "react";
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1>Ketan</h1>
            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Interested in collaborating on a project or discussing potential
              opportunities? Let's connect!
            </p>
            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <a href="#">
                <MdMailOutline className="mx-2" />
              </a>
              <a href="#">
                <IoCallOutline className="mx-2" />
              </a>
              <a href="#">
                <CiLinkedin className="mx-2" />
              </a>
            </div>
          </div>
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 mx-auto">
              © Copyright 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
