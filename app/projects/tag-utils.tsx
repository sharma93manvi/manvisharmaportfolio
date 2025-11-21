// Tag color mapping for consistent styling
export const getTagColor = (tag: string): { bg: string; text: string; border: string } => {
	const tagLower = tag.toLowerCase();
	
	// API/Backend tags
	if (tagLower.includes('api') || tagLower.includes('youtube') || tagLower.includes('rest')) {
		return { bg: 'bg-red-500/20', text: 'text-red-300', border: 'border-red-500/30' };
	}
	
	// AI/ML tags
	if (tagLower.includes('ai') || tagLower.includes('ml') || tagLower.includes('gpt') || tagLower.includes('openai') || tagLower.includes('nltk') || tagLower.includes('vader') || tagLower.includes('sentiment')) {
		return { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30' };
	}
	
	// Deep Learning tags
	if (tagLower.includes('deep learning') || tagLower.includes('gan') || tagLower.includes('pix2pix') || tagLower.includes('pytorch') || tagLower.includes('tensorflow') || tagLower.includes('neural network') || tagLower.includes('cnn') || tagLower.includes('rnn')) {
		return { bg: 'bg-violet-500/20', text: 'text-violet-300', border: 'border-violet-500/30' };
	}
	
	// Computer Vision tags
	if (tagLower.includes('computer vision') || tagLower.includes('image processing') || tagLower.includes('opencv') || tagLower.includes('image')) {
		return { bg: 'bg-rose-500/20', text: 'text-rose-300', border: 'border-rose-500/30' };
	}
	
	// Chrome Extension/Browser Extension tags
	if (tagLower.includes('chrome') || tagLower.includes('extension') || tagLower.includes('browser')) {
		return { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/30' };
	}
	
	// Backend/Framework tags
	if (tagLower.includes('flask') || tagLower.includes('django') || tagLower.includes('fastapi')) {
		return { bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/30' };
	}
	
	// Data Science tags
	if (tagLower.includes('data') || tagLower.includes('pandas') || tagLower.includes('numpy') || tagLower.includes('analytics')) {
		return { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' };
	}
	
	// Visualization tags
	if (tagLower.includes('streamlit') || tagLower.includes('tableau') || tagLower.includes('plotly') || tagLower.includes('visualization') || tagLower.includes('dashboard')) {
		return { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/30' };
	}
	
	// Web/Frontend tags
	if (tagLower.includes('web') || tagLower.includes('react') || tagLower.includes('next') || tagLower.includes('javascript') || tagLower.includes('typescript')) {
		return { bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/30' };
	}
	
	// Database tags
	if (tagLower.includes('postgresql') || tagLower.includes('sql') || tagLower.includes('database') || tagLower.includes('db')) {
		return { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/30' };
	}
	
	// Python tags
	if (tagLower.includes('python')) {
		return { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' };
	}
	
	// Automation/Productivity tags
	if (tagLower.includes('automation') || tagLower.includes('transcription') || tagLower.includes('real-time') || tagLower.includes('speech')) {
		return { bg: 'bg-pink-500/20', text: 'text-pink-300', border: 'border-pink-500/30' };
	}
	
	// Machine Learning specific
	if (tagLower.includes('scikit') || tagLower.includes('kmeans') || tagLower.includes('clustering') || tagLower.includes('sklearn')) {
		return { bg: 'bg-indigo-500/20', text: 'text-indigo-300', border: 'border-indigo-500/30' };
	}
	
	// Default
	return { bg: 'bg-zinc-500/20', text: 'text-zinc-300', border: 'border-zinc-500/30' };
};

