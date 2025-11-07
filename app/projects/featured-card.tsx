"use client";
import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { getTagColor } from "./tag-utils";

type Props = {
	project: Project;
};

const getFeaturedGradient = (project: Project): string => {
	const title = project.title.toLowerCase();
	if (title.includes('youtube') || title.includes('sentiment')) {
		return 'from-red-500/30 via-pink-500/30 to-rose-500/30';
	}
	if (title.includes('ai') || title.includes('ml')) {
		return 'from-purple-500/30 via-indigo-500/30 to-blue-500/30';
	}
	return 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30';
};

export const FeaturedCard: React.FC<Props> = ({ project }) => {
	const gradient = getFeaturedGradient(project);
	
	return (
		<Link href={`/projects/${project.slug}`}>
			<motion.div
				className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm transition-all duration-500 hover:border-zinc-500 hover:shadow-2xl hover:shadow-zinc-900/50"
				whileHover={{ y: -6, scale: 1.02 }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				{/* Animated Gradient Background */}
				<div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
				
				{/* Featured Badge */}
				<div className="absolute top-4 right-4 z-20">
					<span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 backdrop-blur-sm">
						⭐ Featured
					</span>
				</div>
				
				{/* Content */}
				<div className="relative z-10 p-6 md:p-8">
					{/* Icon */}
					<div className="mb-6">
						<div className="inline-flex p-4 rounded-xl bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors duration-300">
							<Sparkles className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors duration-300" />
						</div>
					</div>
					
					{/* Title */}
					<h2 className="text-3xl md:text-4xl font-bold text-zinc-100 group-hover:text-white transition-colors duration-300 mb-4 font-display">
						{project.title}
					</h2>
					
					{/* Description */}
					<p className="text-base md:text-lg leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 mb-6">
						{project.description}
					</p>
					
					{/* Hover Details */}
					<div className="pt-6 border-t border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
						{/* Tech Stack */}
						<div className="flex flex-wrap gap-2 mb-4">
							{project.tags && project.tags.length > 0 ? (
								project.tags.map((tag) => {
									const colors = getTagColor(tag);
									return (
										<span
											key={tag}
											className={`px-3 py-1.5 text-sm rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}
										>
											{tag}
										</span>
									);
								})
							) : (
								// Fallback to title-based detection if no tags
								<>
									{project.title.toLowerCase().includes('youtube') && (
										<span className="px-3 py-1.5 text-sm rounded-lg bg-red-500/20 text-red-300 border border-red-500/30">
											YouTube API
										</span>
									)}
									{project.title.toLowerCase().includes('sentiment') && (
										<span className="px-3 py-1.5 text-sm rounded-lg bg-pink-500/20 text-pink-300 border border-pink-500/30">
											NLTK VADER
										</span>
									)}
									{project.title.toLowerCase().includes('streamlit') && (
										<span className="px-3 py-1.5 text-sm rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
											Streamlit
										</span>
									)}
									<span className="px-3 py-1.5 text-sm rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
										Python
									</span>
								</>
							)}
						</div>
						
						{/* Links */}
						<div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors duration-200"
								>
									<ExternalLink className="w-4 h-4" />
									Live Demo
								</a>
							)}
							{project.repository && (
								<a
									href={`https://github.com/${project.repository}`}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors duration-200"
								>
									<Github className="w-4 h-4" />
									View Code
								</a>
							)}
							<span className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
								Explore Project →
							</span>
						</div>
					</div>
				</div>
				
				{/* Shine Effect */}
				<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			</motion.div>
		</Link>
	);
};

