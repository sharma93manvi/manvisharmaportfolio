"use client";
import Link from "next/link";
import React, { useState } from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

  const technologyCategories = [
    { id: "all", label: "All Projects", count: allProjects.filter(p => p.published).length },
    { id: "ai", label: "AI & ML", count: allProjects.filter(p => p.published && (p.title.toLowerCase().includes('ai') || p.title.toLowerCase().includes('caption') || p.title.toLowerCase().includes('sentiment') || p.title.toLowerCase().includes('exploratory') || p.title.toLowerCase().includes('analysis'))).length },
    { id: "web", label: "Web Development", count: allProjects.filter(p => p.published && (p.title.toLowerCase().includes('qr') || p.title.toLowerCase().includes('generator'))).length },
    { id: "data", label: "Data Science", count: allProjects.filter(p => p.published && (p.title.toLowerCase().includes('analytics') || p.title.toLowerCase().includes('text') || p.title.toLowerCase().includes('exploratory') || p.title.toLowerCase().includes('analysis'))).length },
  ];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const featured = allProjects.find((project) => project.slug === "vancouver-airbnb-investment-intelligence")!;
  const top2 = allProjects.find((project) => project.slug === "photo-caption-ai")!;
  const top3 = allProjects.find((project) => project.slug === "text-analytics-10k")!;
  
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
            project.slug !== featured.slug &&
            project.slug !== top2.slug &&
            project.slug !== top3.slug,
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
              <div className="text-2xl font-bold text-zinc-100">{allProjects.filter(p => p.published).length}</div>
              <div className="text-xs text-zinc-500">Projects</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">4</div>
              <div className="text-xs text-zinc-500">Technologies</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">2</div>
              <div className="text-xs text-zinc-500">AI Projects</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-zinc-100">2</div>
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

        {/* Debug info */}
        <div className="text-sm text-zinc-500">
          Showing {filteredProjects.length} projects for category: {selectedCategory}
          <br />
          Filtered projects: {filteredProjects.map(p => p.title).join(", ")}
        </div>

        {selectedCategory === "all" && (
          <>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
              <Card>
                <Link href={`/projects/${featured.slug}`}>
                  <article className="relative w-full h-full p-4 md:p-8">

                    <h2
                      id="featured-post"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {featured.description}
                    </p>
                    <div className="absolute bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </article>
                </Link>
              </Card>

              <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                {[top2, top3].map((project) => (
                  <Card key={project.slug}>
                      <Article project={project} />
                  </Card>
                ))}
              </div>
            </div>
            <div className="hidden w-full h-px md:block bg-zinc-800" />
          </>
        )}

        {/* Show all projects in a simple grid */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                      <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                      <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                      <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
