import React from "react";

const TableOfContents = () => {
  const sections = [
    { id: 1, title: "WHAT INFORMATION DO WE COLLECT?" },
    {
      id: 2,
      title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    },
    { id: 3, title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" },
    {
      id: 4,
      title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
    },
    { id: 5, title: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
    { id: 6, title: "HOW DO WE KEEP YOUR INFORMATION SAFE?" },
    { id: 7, title: "WHAT ARE YOUR PRIVACY RIGHTS?" },
    { id: 8, title: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
    { id: 9, title: "CHILDREN'S PRIVACY" },
    { id: 10, title: "DO WE MAKE UPDATES TO THIS NOTICE?" },
    { id: 11, title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
    { id: 12, title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
  ];

  return (
    <div className="flex flex-col max-h-fit m-6 md:border-2 border-[#2a4755] rounded-xl lg:mt-10">
      <h2 className="sub-heading flex justify-right text-3xl lg:text-4xl pt-2  font-semibold mb-4 mx-2">
        Table of contents
      </h2>
      <ol className="list-decimal description  flex flex-col text-justify mb-4 mx-6 p-2 pl-5 space-y-1 ">
        {sections.map((section) => (
          <li key={section.id} className=" ">
            <a href={`#section-${section.id}`} className=" hover:underline">
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContents;
