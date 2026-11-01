/*
  sizes.ts — data for the Size Guide section.
  Voice: plain English. Tell people how to measure in one or two short sentences.
  TODO: these are SAMPLE measurements based on common blank-shirt sizes, for the demo only.
  Replace every chart with your own factory's measurements before going live.
*/

export type SizeRow = { size: string; chest: number; length: number };

export type SizeChart = {
  id: string;
  garment: string;
  cut: string;
  rows: SizeRow[];
};

export const sizeIntro = {
  label: "Size guide",
  title: "Find the",
  accent: "right fit.",
  intro: "Pick a garment and cut to see the measurements. Lay a shirt you like flat and compare it with the chart.",
  howTo: [
    { title: "Chest width", text: "Measure straight across, from armpit to armpit, with the shirt lying flat." },
    { title: "Body length", text: "Measure from the highest point of the shoulder down to the bottom hem." },
  ],
  note: "Sample sizes for this demo site. Measured with the garment laid flat. Allow about ½ inch (1 cm) either way.",
};

export const sizeCharts: SizeChart[] = [
  {
    id: "tee-mens",
    garment: "T-Shirt",
    cut: "Men's cut",
    rows: [
      { size: "S", chest: 18, length: 28 },
      { size: "M", chest: 20, length: 29 },
      { size: "L", chest: 22, length: 30 },
      { size: "XL", chest: 24, length: 31 },
      { size: "2XL", chest: 26, length: 32 },
      { size: "3XL", chest: 28, length: 33 },
    ],
  },
  {
    id: "tee-ladies",
    garment: "T-Shirt",
    cut: "Ladies' cut",
    rows: [
      { size: "S", chest: 17, length: 25.5 },
      { size: "M", chest: 18, length: 26 },
      { size: "L", chest: 19.5, length: 27 },
      { size: "XL", chest: 21, length: 27.5 },
      { size: "2XL", chest: 22.5, length: 28 },
    ],
  },
  {
    id: "tee-kids",
    garment: "T-Shirt",
    cut: "Kids' cut",
    rows: [
      { size: "4", chest: 13, length: 19 },
      { size: "6", chest: 14, length: 20 },
      { size: "8", chest: 15, length: 21.5 },
      { size: "10", chest: 16, length: 23 },
      { size: "12", chest: 17, length: 24.5 },
      { size: "14", chest: 18, length: 26 },
    ],
  },
  {
    id: "jersey",
    garment: "Basketball Jersey",
    cut: "Unisex",
    rows: [
      { size: "S", chest: 19, length: 28 },
      { size: "M", chest: 20.5, length: 29 },
      { size: "L", chest: 22, length: 30 },
      { size: "XL", chest: 23.5, length: 31 },
      { size: "2XL", chest: 25, length: 32 },
      { size: "3XL", chest: 26.5, length: 33 },
    ],
  },
  {
    id: "hoodie",
    garment: "Hoodie",
    cut: "Unisex",
    rows: [
      { size: "S", chest: 20, length: 27 },
      { size: "M", chest: 22, length: 28 },
      { size: "L", chest: 24, length: 29 },
      { size: "XL", chest: 26, length: 30 },
      { size: "2XL", chest: 28, length: 31 },
      { size: "3XL", chest: 30, length: 32 },
    ],
  },
];
