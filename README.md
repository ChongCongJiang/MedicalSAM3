# Medical SAM3 Project Page

This repository contains the source code for the official project landing page of **Medical SAM3**.
It is a modern, responsive static website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## 🌟 Features

*   **Interactive Performance Charts**: Radar charts that toggle between **Dice** and **IoU** metrics.
*   **Qualitative Comparisons**: A tabbed image gallery to compare model outputs.
*   **Responsive Design**: Optimized for desktop and mobile viewing.
*   **Easy Configuration**: All content is managed via a single configuration file.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm (or yarn/pnpm)

### Installation

1.  Clone this repository:
    ```bash
    git clone https://github.com/AIM-Research-Lab/Medical-SAM3-Page.git
    cd Medical-SAM3-Page
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the local development server:
    ```bash
    npm run dev
    ```
    Open your browser at `http://localhost:5173`.

## 📝 How to Customize Content

You don't need to touch the React components for most updates. All data is centralized in **`constants.ts`**.

### 1. Paper Info & Authors
Open `constants.ts` and modify the `PROJECT_INFO`, `AUTHORS`, and `AFFILIATIONS` arrays.

### 2. Updating Performance Metrics (Dice & IoU)
To update the data shown in the "Performance" section:
*   **Dice Scores**: Edit `INTERNAL_DATA_DICE` and `EXTERNAL_DATA_DICE` arrays in `constants.ts`.
*   **IoU Scores**: Edit `INTERNAL_DATA_IOU` and `EXTERNAL_DATA_IOU` arrays in `constants.ts`.

The charts and the "Performance Summary" text will automatically calculate averages and update based on these numbers.

### 3. Adding Visual Results
1.  Place your result images (Input, Ground Truth, SAM3, Medical SAM3) in the `public/` folder.
2.  Update the `VISUAL_SCENARIOS` array in `constants.ts` with the paths to your new images.

### 4. Updating Links (Code, Paper, Demo)
Update the `LINKS` object in `constants.ts` to point to your actual Arxiv URL, GitHub repo, or HuggingFace demo.

## 🌍 Deployment (GitHub Pages)

This project is pre-configured for deployment via GitHub Actions.

1.  Push this code to your GitHub repository.
2.  Go to **Settings** > **Pages** in your GitHub repo.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the site.

## 🛠️ Project Structure

```text
├── constants.ts       # <--- EDIT THIS: Central config for text and data
├── types.ts           # TypeScript definitions
├── App.tsx            # Main application component
├── components/        # UI Components
│   ├── Hero.tsx       # Title, Authors, Buttons
│   ├── Results.tsx    # Radar Charts & Summary
│   ├── Visuals.tsx    # Image Comparison Gallery
│   └── ...
└── public/            # Static assets (images, PDFs)
```

## 📄 License

This project is licensed under the MIT License.
