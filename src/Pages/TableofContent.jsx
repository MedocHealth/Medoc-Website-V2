import React from "react";
import PropTypes from "prop-types";

const TableOfContents = ({ sections, title = "Table of Contents" }) => {
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

TableOfContents.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default TableOfContents;
