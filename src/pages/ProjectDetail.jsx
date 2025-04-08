// src/components/ProjectDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { projects } from "../assets/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0D1117] text-[#f1f4f5]">
        <h2 className="text-2xl font-bold mb-4">Proyek tidak ditemukan!</h2>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center px-4 py-2 border border-gray-700 hover:bg-[#1A2333] transition-colors rounded-md text-[#f1f4f5]"
        >
          <img src="/images/arrow-left.svg" alt="arrow-left" className="text-white"/>
          Kembali
        </button>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#0D1117] min-h-screen py-8">
      <div className="container max-w-[800px] mx-auto px-4 text-[#f1f4f5]">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center mb-8 px-4 py-2 border border-gray-700 hover:bg-[#1A2333] transition-colors rounded-md text-[#f1f4f5]"
        >
          Kembali
        </button>

        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        </div>

        {/* Project thumbnail */}
        <div className="mb-10 overflow-hidden rounded-md">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full object-cover" 
          />
        </div>

        {/* Project content */}
        <div className="mb-10">
          <div className="prose prose-invert prose-headings:text-[#f1f4f5] prose-p:text-gray-300 max-w-none">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="mt-16 mb-8">
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 border border-gray-700 hover:bg-[#1A2333] transition-colors rounded-md text-[#f1f4f5]"
          >

            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;