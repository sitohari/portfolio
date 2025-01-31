import React from 'react';

const ProjectComponent = ({ title, icon, description, tech }) => {
    return (
        <div className="max-w-sm rounded-lg border-2 border-[#f1f4f5] bg-[#1E1E1E] shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Header Section */}
        <div className="flex flex-row items-center gap-2 px-4 py-3">
            <img src={icon || "/images/git-repository-line.svg"} alt="Project Icon" className="w-6 h-6" />
            <p className="text-2xl font-semibold text-start text-[#0969DA]">
            {title || "Contoh Project"}
            </p>
        </div>

        {/* Description Section */}
        <p className="px-4 pb-3 text-[#f1f4f5]">
            {description || "Deskripsi project akan ditampilkan di sini."}
        </p>

        {/* Tech Stack Section */}
        <div className="flex items-center gap-2 px-4 pb-4">
            <img src="/images/tag-react.svg" alt="Tech Icon" className="w-4 h-4" />
            <span className="text-base text-[#f1f4f5]">
            {tech || "React"}
            </span>
        </div>
        </div>
    );
};

export default ProjectComponent;