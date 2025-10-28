"use client";

import Script from 'next/script';

export function Analytics() {
	const beamToken = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-43PEKBN7J5'; // Your Google Analytics ID

	return (
		<>
			{/* Google Analytics - Manual Implementation for better detection */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${gaId}');
				`}
			</Script>
			
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
