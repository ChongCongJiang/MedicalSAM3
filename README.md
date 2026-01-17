# Medical SAM3 Project Page

This is the official project landing page for **Medical SAM3**, built with React and Tailwind CSS.

## 🚀 How to Adjust Content

You can customize the content of this website easily by editing **`constants.ts`**.

*   **Project Title & Info**: Edit `PROJECT_INFO` object.
*   **Authors**: Update the `AUTHORS` array.
*   **Affiliations**: Update the `AFFILIATIONS` array.
*   **Images**: Update `IMAGES` object with URLs to your actual paper screenshots.
*   **Radar Chart Data**: Edit `RADAR_DATA_INTERNAL`.
*   **Links**: Update `LINKS` for the Paper, Code (GitHub), and Demo.

## 🖼️ Adding Your Own Images

1.  Create a folder named `public` (or `assets`) in your repository.
2.  Upload your images (e.g., `figure1.png`, `comparison.jpg`) to that folder.
3.  In `constants.ts`, update the image URLs to point to your files (e.g., `./public/figure1.png` or relative paths depending on your build setup).

## 🌐 How to Deploy to GitHub Pages (Free)

This project is designed to be lightweight. There are two ways to deploy it.

### Method A: No Build Step (Simplest)
1.  Upload all these files to a GitHub repository.
2.  Go to **Settings** -> **Pages**.
3.  Set **Source** to `Deploy from a branch` (main).
4.  **Note**: Since this uses `index.html` with direct CDN imports (`esm.sh`), it should work directly in modern browsers without a complex build step (like `npm run build`).

### Method B: Professional Build (Recommended for Production)
If you want to use a standard React toolchain (Vite):

1.  Run `npm create vite@latest medical-sam3-site -- --template react-ts` locally.
2.  Copy the `src` folder content (App.tsx, components, constants.ts, types.ts) into the new Vite project's `src` folder.
3.  Install dependencies: `npm install lucide-react recharts`.
4.  Run `npm run build`.
5.  Deploy the `dist` folder to GitHub Pages.

## 📝 Citation

The BibTeX citation can be updated in `constants.ts`.
