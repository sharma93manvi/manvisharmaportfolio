"use client";

import { GoogleAnalytics } from '@next/third-parties/google';

export function Analytics() {
	const beamToken = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-43PEKBN7J5'; // Your Google Analytics ID

	return (
		<>
			{/* Google Analytics */}
			<GoogleAnalytics gaId={gaId} />
			
			{/* Beam Analytics */}
			{beamToken && (
				<script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token={beamToken}
					async
				/>
			)}
		</>
	);
}
