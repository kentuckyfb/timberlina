// src/data/products.ts
import { Product, ProductCategory } from '../types/product';

export const productsData: Product[] = [
  {
    id: "A1",
    name: "The Victorian",
    shortDescription: "Step Into History. Stay for the Charm or A timeless gift, a creative project, and a family keepsake–this is more than a dollhouse. It's a piece of your story.",
    description: "Step into a world of timeless charm with Timberlina's Victorian Dollhouse - a true celebration of craftsmanship and design. Expertly handcrafted by skilled artisans using the finest sustainably sourced timber, each house is individually made and presented in a refined natural wood finish - perfect for those who wish to preserve its organic beauty or explore creative decoration. Its elegant design features seamlessly openable doors and windows, while hinged front and roof panels offer effortless access to the rooms on every level, including the attic. A favorite among collectors and hobbyists, this dollhouse is both a timeless display piece and a delightful project for personalisation. It makes a perfect keepsake or unique gift for miniature enthusiasts and collectors.",
    image: "/Images/victorian-dollhouse.png",
    price: "",
    category: "Premium",
    dimensions: "Base - 32\" x 15.5\" Height - 33\"",
    targetAudience: "Teens, Adults, Collectors, Hobbyists",
    material: "FSC Certified Bamboo Wood",
    packaging: "Partially knocked down to components with detailed instructions for quick and easy assembly",
    features: [
      "Scale: 1:12",
      "Handcrafted from premium, sustainable timber",
      "Natural wood finish for painting or display",
      "Functional windows and doors",
      "Hinged front panels and attic access",
      "Removeable roof",
      "A Collector's favorite and hobbyist's treasure"
    ]
  },
  {
    id: "A2",
    name: "Malji",
    shortDescription: "Open the Doors to Endless Imagination.",
    description: "The Malji Double Door is one of our most beloved designs, appealing to both children and adults alike. Expertly crafted from beautiful plantation timber, its twin front panels gracefully swivel open to reveal four spacious rooms, while a removable roof offers access to a charming attic space - inviting endless opportunities for decoration and imaginative play. Designed with versatility in mind, the Malji can be completely disassembled, flat-packed for convenient storage or transport, and effortlessly reassembled with its intuitive panel system. Whether styled simply or richly adorned, it offers a delightful, lasting canvas for creativity at any age and designed for modern living.",
    image: "/Images/malji.png",
    price: "",
    category: "Premium",
    dimensions: "Base: 26\" x 16\" Height: 35\"",
    targetAudience: "Children 4+ - Adults",
    material: "FSC Certified Bamboo Wood",
    packaging: "Flat Packed with detailed instructions for quick and easy assembly",
    features: [
      "Sustainably sourced bamboo wood",
      "Smooth-opening double doors and removable roof",
      "Four spacious rooms and accessible attic",
      "Flat-pack design for easy assembly and storage",
      "Ideal for decoration, role play, or collectible display"
    ]
  },
  {
    id: "B1",
    name: "The Cabin",
    shortDescription: "Build Play Imagine.",
    description: "STEM Meets Style in these Unique Bamboo assembly house Kits. These modular, eco-friendly houses sparks creativity and builds real-world STEM skills like planning, problem-solving, and design—all through imaginative play. Whether building solo or with family, the Assembly Houses encourages a hands-on experience with modern educational value.",
    image: "/Images/cabin.png",
    price: "",
    category: "Assembly",
    dimensions: "Base 7\"x7\" Height 8\"",
    targetAudience: "6+",
    material: "FSC Certified Bamboo",
    packaging: "Flat Packed with detailed instructions for quick and easy assembly",
    features: [
      "Encourages screen-free learning through construction",
      "Supports STEAM initiatives: science, tech, engineering, art, and math",
      "Develops spatial awareness",
      "Easy to assemble",
      "Made from sustainable bamboo wood",
      "Reusable, durable, and classroom-friendly",
      "Gender neutral",
      "Perfect for STEM toy sections, museum shops, and educational institutions"
    ]
  },
  {
    id: "B2",
    name: "The Cottage",
    shortDescription: "Build Play Imagine.",
    description: "STEM Meets Style in these Unique Bamboo assembly house Kits. These modular, eco-friendly houses sparks creativity and builds real-world STEM skills like planning, problem-solving, and design—all through imaginative play. Whether building solo or with family, the Assembly Houses turn playtime into a hands-on experience with modern educational value.",
    image: "/Images/cottage.png",
    price: "",
    category: "Assembly",
    dimensions: "Base -15\" x12\" Height 9\"",
    targetAudience: "6+",
    material: "FSC Certified Bamboo",
    packaging: "Flat Packed with detailed instructions for quick and easy assembly",
    features: [
      "Encourages screen-free learning through construction",
      "Supports STEAM initiatives: science, tech, engineering, art, and math",
      "Develops spatial awareness",
      "Easy to assemble",
      "Made from sustainable bamboo wood",
      "Modular & Expandable Design",
      "Reusable, durable, and classroom-friendly",
      "Gender neutral",
      "Perfect for STEM toy sections, museum shops, and educational institutions"
    ]
  },
  {
    id: "B3",
    name: "The Lodge",
    shortDescription: "Build Play Imagine.",
    description: "STEM Meets Style in these Unique Bamboo assembly house Kits. These modular, eco-friendly houses sparks creativity and builds real-world STEM skills like planning, problem-solving, and design—all through imaginative play. Whether building solo or with family, the Assembly Houses turn playtime into a hands-on experience with modern educational value.",
    image: "/Images/lodge.png",
    price: "",
    category: "Assembly",
    dimensions: "Base - 15\"x16\" Height - 13.5\"",
    targetAudience: "6+",
    material: "FSC Certified Bamboo",
    packaging: "Flat Packed with detailed instructions for quick and easy assembly",
    features: [
      "Encourages screen-free learning through construction",
      "Supports STEAM initiatives: science, tech, engineering, art, and math",
      "Develops spatial awareness",
      "Easy to assemble",
      "Made from sustainable bamboo wood",
      "Modular & Expandable Design",
      "Reusable, durable, and classroom-friendly",
      "Gender neutral",
      "Perfect for STEM toy sections, museum shops, and educational institutions"
    ]
  }
];

// Categories for filtering
export const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products' },
  { id: 'Premium', name: 'Premium Collection' },
  { id: 'Assembly', name: 'Assembly Houses' },
  // { id: 'Portable', name: 'Portable Designs' }
];