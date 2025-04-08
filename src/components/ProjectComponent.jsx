// src/components/ProjectComponent.jsx
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProjectComponent = ({ id, title, thumbnail, category, year }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/projects/${id}`);

  return (
    <div
      className="group w-full max-w-md cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      onClick={handleClick}
    >
      <div className="rounded-xl shadow-md hover:shadow-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-lg font-semibold text-[#f1f4f5]">{title}</h3>
        <div className="flex justify-between mt-1 text-[#8B949E]">
          <p className="text-sm">{category}</p>
          <p className="text-sm">{year}</p>
        </div>
      </div>
    </div>
  );
};

ProjectComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default ProjectComponent;
