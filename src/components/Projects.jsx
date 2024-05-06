import React from "react";

const Projects = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore some of my recent projects
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    BLOG WEBSITE
                  </h1>
                  <p className="leading-relaxed">
                    Developed a blog website using Thymeleaf, Spring MVC, and
                    MySQL Database, providing a platform for sharing insights
                    and experiences.
                  </p>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mt-1">
                    <a href="#">View More</a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A BUSINESS WEBSITE
                  </h1>
                  <p className="leading-relaxed">
                    Created a dynamic business website with React, Spring Boot,
                    and MySQL Database, featuring admin functionalities for
                    content management and lead tracking.
                  </p>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mt-1">
                    <a href="#">View More</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
