import { Author, MetricData } from './types';

export const PROJECT_INFO = {
  title: "Medical SAM3",
  subtitle: "A Foundation Model for Universal Prompt-Driven Medical Image Segmentation",
  abstractTitle: "Abstract",
  methodologyTitle: "Methodology"
};

export const AUTHORS: Author[] = [
  { name: "Chongcong Jiang", affiliation: "1", isCoFirst: true },
  { name: "Tianxingjian Ding", affiliation: "1", isCoFirst: true },
  { name: "Chuhan Song", affiliation: "2", isCoFirst: true },
  { name: "Jiachen Tu", affiliation: "3" },
  { name: "Ziyang Yan", affiliation: "4", isCorresponding: true },
  { name: "Yihua Shao", affiliation: "5" },
  { name: "Zhenyi Wang", affiliation: "1" },
  { name: "Yuzhang Shang", affiliation: "1" },
  { name: "Tianyu Han", affiliation: "6" },
  { name: "Yu Tian", affiliation: "1", isCorresponding: true, email: "yu.tian2@ucf.edu" },
];

export const AFFILIATIONS = [
  "1. University of Central Florida, Orlando, USA",
  "2. University College London, London, UK",
  "3. University of Illinois Urbana-Champaign, Champaign, USA",
  "4. University of Trento, Trento, Italy",
  "5. The Hong Kong Polytechnic University, China",
  "6. University of Pennsylvania, Philadelphia, USA"
];

export const IMAGES = {
  // RECOMMENDED: Use SVG files for best quality.
  // Example: "./assets/teaser.svg" OR "./assets/method.pdf"
  // If using PDF, the app will automatically detect the .pdf extension and embed it differently.
  teaser: "/MedicalSAM3/overview.svg",
  methodology: "/MedicalSAM3/method.svg",
};

// Data for Interactive Visuals Comparison
// Mapped to local public/result folder structure
export const VISUAL_SCENARIOS = [
  {
    id: 'vessel',
    label: 'DRIVE',
    images: {
      raw: "/MedicalSAM3/result/DRIVE/original.png",
      gt: "/MedicalSAM3/result/DRIVE/gt.png",
      sam3: "/MedicalSAM3/result/DRIVE/sam3.png",
      medsam3: "/MedicalSAM3/result/DRIVE/ours.png"
    }
  },
  {
    id: 'disc',
    label: 'COph100',
    images: {
      raw: "/MedicalSAM3/result/COph100/original.png",
      gt: "/MedicalSAM3/result/COph100/gt.png",
      sam3: "/MedicalSAM3/result/COph100/sam3.png",
      medsam3: "/MedicalSAM3/result/COph100/ours.png"
    }
  },
  {
    id: 'instrument',
    label: 'M2CAI',
    images: {
      raw: "/MedicalSAM3/result/M2CAI/original.png",
      gt: "/MedicalSAM3/result/M2CAI/gt.png",
      sam3: "/MedicalSAM3/result/M2CAI/sam3.png",
      medsam3: "/MedicalSAM3/result/M2CAI/ours.png"
    }
  },
  {
    id: 'polyp',
    label: 'PS-FH-AOP',
    images: {
      raw: "/MedicalSAM3/result/PS-FH-AOP/original.png",
      gt: "/MedicalSAM3/result/PS-FH-AOP/gt.png",
      sam3: "/MedicalSAM3/result/PS-FH-AOP/sam3.png",
      medsam3: "/MedicalSAM3/result/PS-FH-AOP/ours.png"
    }
  },
  {
    id: 'fluid',
    label: 'Intraretinal Fluid',
    images: {
      raw: "/MedicalSAM3/result/Intraretinal_Fluid/original.png",
      gt: "/MedicalSAM3/result/Intraretinal_Fluid/gt.png",
      sam3: "/MedicalSAM3/result/Intraretinal_Fluid/sam3.png",
      medsam3: "/MedicalSAM3/result/Intraretinal_Fluid/ours.png"
    }
  },
  {
    id: 'fetoplac',
    label: 'FetoPlac',
    images: {
      raw: "/MedicalSAM3/result/FetoPlac/original.png",
      gt: "/MedicalSAM3/result/FetoPlac/gt.png",
      sam3: "/MedicalSAM3/result/FetoPlac/sam3.png",
      medsam3: "/MedicalSAM3/result/FetoPlac/ours.png"
    }
  }
];

// Internal Validation Data (Strictly from Table 3)
export const INTERNAL_DATA: MetricData[] = [
  { subject: "PS-FH-AOP'23", SAM3: 65.7, MedicalSAM3: 91.6, fullMark: 100 },
  { subject: 'DRIVE', SAM3: 24.8, MedicalSAM3: 55.8, fullMark: 100 },
  { subject: 'COph100', SAM3: 34.1, MedicalSAM3: 63.1, fullMark: 100 },
  { subject: 'Breast Cancer', SAM3: 16.3, MedicalSAM3: 43.8, fullMark: 100 },
  { subject: 'Intraretinal Fluid', SAM3: 62.0, MedicalSAM3: 85.0, fullMark: 100 },
  { subject: 'M2CAI', SAM3: 67.7, MedicalSAM3: 88.1, fullMark: 100 },
  { subject: 'FetoPlac', SAM3: 56.6, MedicalSAM3: 77.0, fullMark: 100 },
  { subject: 'GlaS\'15', SAM3: 68.9, MedicalSAM3: 88.2, fullMark: 100 },
  { subject: 'SegThy', SAM3: 57.3, MedicalSAM3: 78.5, fullMark: 100 },
  { subject: 'PAPILA', SAM3: 86.2, MedicalSAM3: 99.4, fullMark: 100 },
];

// External Validation Data (Strictly from Table 3)
export const EXTERNAL_DATA: MetricData[] = [
  { subject: 'TN3K', SAM3: 4.2, MedicalSAM3: 40.8, fullMark: 100 },
  { subject: 'HC18', SAM3: 23.9, MedicalSAM3: 92.6, fullMark: 100 },
  { subject: 'CVC', SAM3: 0.0, MedicalSAM3: 87.9, fullMark: 100 },
  { subject: 'ETIS', SAM3: 0.0, MedicalSAM3: 86.1, fullMark: 100 },
  { subject: 'PH2', SAM3: 18.4, MedicalSAM3: 92.7, fullMark: 100 },
  { subject: 'CHASE', SAM3: 17.9, MedicalSAM3: 62.6, fullMark: 100 },
  { subject: 'STARE', SAM3: 18.6, MedicalSAM3: 54.4, fullMark: 100 },
];

export const LINKS = {
  paper: "#", // Replace with Arxiv link
  code: "https://github.com/AIM-Research-Lab/Medical-SAM3",
  demo: "#", // Replace with HuggingFace/Colab demo link if available
};

export const BIBTEX = `@article{jiang2025medical,
  title={Medical SAM3: A Foundation Model for Universal Prompt-Driven Medical Image Segmentation},
  author={Jiang, Chongcong and Ding, Tianxingjian and Song, Chuhan and Tu, Jiachen and Yan, Ziyang and Shao, Yihua and Wang, Zhenyi and Shang, Yuzhang and Han, Tianyu and Tian, Yu},
  journal={arXiv preprint},
  year={2026}
}`;