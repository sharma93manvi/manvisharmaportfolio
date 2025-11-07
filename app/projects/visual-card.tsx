"use client";
import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code, BarChart3 } from "lucide-react";
import { getTagColor } from "./tag-utils";

type Props = {
	project: Project;
};

// Get gradient colors based on project type
const getProjectGradient = (project: Project): string => {
	const title = project.title.toLowerCase();
	
	if (title.includes('youtube') || title.includes('sentiment') || title.includes('analysis')) {
		return 'from-red-500/20 via-pink-500/20 to-rose-500/20';
	}
	if (title.includes('ai') || title.includes('caption') || title.includes('ml')) {
		return 'from-purple-500/20 via-indigo-500/20 to-blue-500/20';
	}
	if (title.includes('airbnb') || title.includes('data') || title.includes('visualization')) {
		return 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20';
	}
	if (title.includes('qr') || title.includes('generator') || title.includes('web')) {
		return 'from-amber-500/20 via-orange-500/20 to-yellow-500/20';
	}
	if (title.includes('analytics') || title.includes('text') || title.includes('10k')) {
		return 'from-blue-500/20 via-cyan-500/20 to-teal-500/20';
	}
	
	return 'from-zinc-500/20 via-zinc-600/20 to-zinc-700/20';
};

// Get icon based on project type
const getProjectIcon = (project: Project) => {
	const title = project.title.toLowerCase();
	if (title.includes('ai') || title.includes('ml')) return Sparkles;
	if (title.includes('analytics') || title.includes('data')) return BarChart3;
	if (title.includes('web') || title.includes('generator')) return Code;
	return Sparkles;
};

export const VisualCard: React.FC<Props> = ({ project }) => {
	const Icon = getProjectIcon(project);
	const gradient = getProjectGradient(project);
	
	return (
		<Link href={`/projects/${project.slug}`}>
			<motion.div
				className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-900/50"
				whileHover={{ y: -4 }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
			>
				{/* Gradient Background */}
				<div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
				
				{/* Content */}
				<div className="relative z-10 p-6">
					{/* Icon and Title */}
					<div className="flex items-start gap-4 mb-4">
						<div className="flex-shrink-0 p-3 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors duration-300">
							<Icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-300" />
						</div>
						<div className="flex-1 min-w-0">
							<h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors duration-300 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
								{project.title}
							</h3>
						</div>
					</div>
					
					{/* Description */}
					<p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
						{project.description}
					</p>
					
					{/* Hover Details */}
					<div className="overflow-hidden">
						<div className="pt-4 border-t border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
							{/* Tech Stack Preview */}
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tags && project.tags.length > 0 ? (
									project.tags.map((tag) => {
										const colors = getTagColor(tag);
										return (
											<span
												key={tag}
												className={`px-2 py-1 text-xs rounded-md ${colors.bg} ${colors.text} border ${colors.border}`}
											>
												{tag}
											</span>
										);
									})
								) : (
									// Fallback to title-based detection if no tags
									<>
										{project.title.toLowerCase().includes('youtube') && (
											<span className="px-2 py-1 text-xs rounded-md bg-red-500/20 text-red-300 border border-red-500/30">
												YouTube API
											</span>
										)}
										{project.title.toLowerCase().includes('ai') && (
											<span className="px-2 py-1 text-xs rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
												AI/ML
											</span>
										)}
										{project.title.toLowerCase().includes('streamlit') && (
											<span className="px-2 py-1 text-xs rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
												Streamlit
											</span>
										)}
										{project.title.toLowerCase().includes('data') && (
											<span className="px-2 py-1 text-xs rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
												Data Science
											</span>
										)}
										{project.title.toLowerCase().includes('web') && (
											<span className="px-2 py-1 text-xs rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
												Web App
											</span>
										)}
									</>
								)}
							</div>
							
							{/* Links */}
							<div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								{project.url && (
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors duration-200"
									>
										<ExternalLink className="w-3 h-3" />
										Live Demo
									</a>
								)}
								{project.repository && (
									<a
										href={`https://github.com/${project.repository}`}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors duration-200"
									>
										<Github className="w-3 h-3" />
										Code
									</a>
								)}
								<span className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400">
									View Details →
								</span>
							</div>
						</div>
					</div>
				</div>
				
				{/* Shine Effect */}
				<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
			</motion.div>
		</Link>
	);
};

