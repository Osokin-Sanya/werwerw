import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// import { createHtmlPlugin } from "vite-plugin-html";

// export default defineConfig({
//   plugins: [
//     react(),
//     createHtmlPlugin({
//       minify: true,
//       entry: "src/main.jsx",
//       template: "public/index.html",
//       inject: {
//         data: {
//           title: "index",
//           injectScript: `<script src="./inject.js"></script>`,
//         },
//         tags: [
//           {
//             injectTo: "body-prepend",
//             tag: "div",
//             attrs: {
//               id: "tag",
//             },
//           },
//           {
//             injectTo: "body-prepend",
//             tag: "link",
//             attrs: {
//               rel: "stylesheet",
//               href: "https://unpkg.com/leaflet@1.3.4/dist/leaflet.css",
//             },
//           },
//           {
//             injectTo: "body-prepend",
//             tag: "link",
//             attrs: {
//               rel: "stylesheet",
//               href: "https://api.visicom.ua/apps/visicom-autocomplete.min.css",
//             },
//           },
//         ],
//       },
//     }),
//   ],
// });
