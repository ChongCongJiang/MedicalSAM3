import { Author, MetricData } from './types';

export const PROJECT_INFO = {
  title: "Medical SAM3",
  subtitle: "A Foundation Model for Universal Prompt-Driven Medical Image Segmentation",
  abstractTitle: "Abstract",
  methodologyTitle: "Universal Prompt-Driven Segmentation"
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
  // Replace these URLs with your actual paper figures/screenshots
  // You can upload images to the 'public' folder or an assets folder in your repo
  teaser: "https://picsum.photos/seed/teaser/800/400", 
  visuals: {
    row1: "https://picsum.photos/seed/v1/200",
    row2: "https://picsum.photos/seed/v2/200",
    row3: "https://picsum.photos/seed/v3/200",
  }
};

// Extracted from Table 3 / Figure 3 of the paper (Internal Validation)
export const RADAR_DATA_INTERNAL: MetricData[] = [
  { subject: 'PS-FH-AOP', SAM3: 65.7, MedicalSAM3: 91.6, fullMark: 100 },
  { subject: 'DRIVE', SAM3: 24.8, MedicalSAM3: 55.8, fullMark: 100 },
  { subject: 'COph100', SAM3: 34.1, MedicalSAM3: 63.1, fullMark: 100 },
  { subject: 'Breast Cancer', SAM3: 16.3, MedicalSAM3: 43.8, fullMark: 100 },
  { subject: 'Intraretinal', SAM3: 62.0, MedicalSAM3: 85.0, fullMark: 100 },
  { subject: 'M2CAI', SAM3: 67.7, MedicalSAM3: 88.1, fullMark: 100 },
  { subject: 'FetoPlac', SAM3: 56.6, MedicalSAM3: 77.0, fullMark: 100 },
  { subject: 'GlaS\'15', SAM3: 68.9, MedicalSAM3: 88.2, fullMark: 100 },
  { subject: 'SegThy', SAM3: 57.3, MedicalSAM3: 78.5, fullMark: 100 },
  { subject: 'PAPILA', SAM3: 86.2, MedicalSAM3: 99.4, fullMark: 100 },
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
  year={2025}
}`;