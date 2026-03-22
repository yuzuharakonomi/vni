import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Noto Sans JP",
			cssVariable: "--font-noto-sans-jp",
		},
	],
});
