import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), dts({ rollupTypes: true })],
	build: {
		lib: {
			entry: resolve(import.meta.dirname, "./src/main.ts"),
			formats: ["es"],
			fileName: "main",
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
		},
	},
});
