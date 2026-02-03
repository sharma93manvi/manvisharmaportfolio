"use client";
import Link from "next/link";
import React, { useState, useMemo, useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { VisualCard } from "./visual-card";
import { FeaturedCard } from "./featured-card";

type ProjectData = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  url?: string;
  repository?: string;
  tags?: string[];
  published?: boolean;
};

type ProjectsClientProps = {
  allProjects: ProjectData[];
};

export function ProjectsClient({ allProjects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering animations
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!allProjects || allProjects.length === 0) {
    return (
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              No projects found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const featured = allProjects.find((project) => project.slug === "brain-tumor-classification");
  const top2 = allProjects.find((project) => project.slug === "youtube-sentiment-analysis");
  const top3 = allProjects.find((project) => project.slug === "vancouver-airbnb-investment-intelligence");

  const technologyCategories = useMemo(() => {
    const publishedProjects = allProjects.filter(p => p.published);
    return [
      { id: "all", label: "All Projects", count: publishedProjects.length },
      { id: "ai", label: "AI & ML", count: publishedProjects.filter(p => 
        p.title.toLowerCase().includes('ai') || 
        p.title.toLowerCase().includes('caption') || 
        p.title.toLowerCase().includes('sentiment') || 
        p.title.toLowerCase().includes('exploratory') || 
        p.title.toLowerCase().includes('analysis')
      ).length },
      { id: "web", label: "Web Development", count: publishedProjects.filter(p => 
        p.title.toLowerCase().includes('qr') || 
        p.title.toLowerCase().includes('generator')
      ).length },
      { id: "data", label: "Data Science", count: publishedProjects.filter(p =>
        p.title.toLowerCase().includes('analytics') ||
        p.title.toLowerCase().includes('text') ||
        p.title.toLowerCase().includes('exploratory') ||
        p.title.toLowerCase().includes('analysis')
      ).length },
    ];
  }, [allProjects]);
  
  // Filter projects based on selected category
  const getFilteredProjects = () => {
    const baseProjects = allProjects.filter((p) => p.published);
    
    switch (selectedCategory) {
        case "ai":
          return baseProjects.filter(p =>
            p.title.toLowerCase().includes('ai') ||
            p.title.toLowerCase().includes('caption') ||
            p.title.toLowerCase().includes('sentiment') ||
            p.title.toLowerCase().includes('exploratory') ||
            p.title.toLowerCase().includes('analysis')
          );
      case "web":
        return baseProjects.filter(p => 
          p.title.toLowerCase().includes('qr') || 
          p.title.toLowerCase().includes('generator')
        );
          case "data":
            return baseProjects.filter(p =>
              p.title.toLowerCase().includes('analytics') ||
              p.title.toLowerCase().includes('text') ||
              p.title.toLowerCase().includes('exploratory') ||
              p.title.toLowerCase().includes('analysis')
            );
      default:
        return baseProjects;
    }
  };

  const filteredProjects = getFilteredProjects();
  
  // For "all" category, show featured projects + remaining projects
  // For other categories, show only filtered projects
  const sorted = selectedCategory === "all" 
    ? filteredProjects
        .filter(
          (project) =>
            featured && project.slug !== featured.slug &&
            top2 && project.slug !== top2.slug &&
            top3 && project.slug !== top3.slug,
        )
        .sort(
          (a, b) =>
            new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
            new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        )
    : filteredProjects
        .sort(
          (a, b) =>
            new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
            new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        );

  // Compute statistics
  const publishedProjects = allProjects.filter(p => p.published);
  const aiProjectsCount = publishedProjects.filter(p => 
    p.title.toLowerCase().includes('ai') || 
    p.title.toLowerCase().includes('caption') || 
    p.title.toLowerCase().includes('sentiment') ||
    p.title.toLowerCase().includes('ml')
  ).length;
  const webProjectsCount = publishedProjects.filter(p => 
    p.title.toLowerCase().includes('qr') || 
    p.title.toLowerCase().includes('generator') ||
    p.title.toLowerCase().includes('web')
  ).length;
  const uniqueTechnologies = new Set(
    publishedProjects.flatMap(p => p.tags || [])
  ).size;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Showcasing my work across data science, AI/ML, and analytics.
          </p>
        </div>

        {/* Project Statistics Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">{publishedProjects.length}</div>
              <div className="text-xs text-zinc-500">Projects</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">{uniqueTechnologies || 4}</div>
              <div className="text-xs text-zinc-500">Technologies</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">{aiProjectsCount}</div>
              <div className="text-xs text-zinc-500">AI Projects</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">{webProjectsCount}</div>
              <div className="text-xs text-zinc-500">Web Apps</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">100%</div>
              <div className="text-xs text-zinc-500">Open Source</div>
            </div>
          </Card>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Technology Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {technologyCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {selectedCategory === "all" && featured && top2 && top3 && (
          <>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
              <FeaturedCard project={featured} />

              <div className="flex flex-col w-full gap-6 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                {[top2, top3].filter(Boolean).map((project) => (
                  <VisualCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
            <div className="hidden w-full h-px md:block bg-zinc-800" />
          </>
        )}

        {/* Show all projects in a visual grid */}
        <div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((project) => (
            <VisualCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

