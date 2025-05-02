// src/data/products.ts
import { Product, ProductCategory } from '../types/product';

export const productsData: Product[] = [
  {
    id: "C1",
    name: "Snap n'Stack",
    shortDescription: "Snap, Stack, Play. The Bamboo way!",
    description: "is more than a toy—it's a creative toolkit that encourages spatial thinking, fine motor skills, and environmental awareness, all wrapped into a delightful DIY play experience. Build it, expand it, and play your way—again and again. Snap n Stack is a beautifully crafted, modular wooden playhouse designed to inspire creativity, imaginative play, and hands-on construction for children and families. Made entirely from sustainably sourced bamboo wood, this eco-friendly dollhouse combines natural aesthetics with smart engineering to provide an engaging and educational experience. Each piece features a clever interlocking system that allows easy, tool-free assembly. Panels, beams, and architectural elements fit together like a puzzle, ensuring a snug, sturdy structure that can be built and rebuilt in endless configurations. Starting with a spacious ground floor, the design supports stackable construction, enabling builders to add multiple floors or extensions over time. Whether you're creating a cozy cottage or a multi-story mini mansion, the system adapts to your imagination. Arched doorways, window cutouts, and climbable elements such as ladders and open balconies create a world of open-ended storytelling opportunities. Children can role-play, rearrange rooms, and invent new narratives every time they play.",
    image: "",
    price: "",
    category: "Assembly",
    dimensions: "TBA",
    targetAudience: "5+",
    material: "FSC Certified Bamboo",
    packaging: "Flat packed in a beautiful bamboo Box",
    features: [
      "DIY Interlocking Design",
      "Expandable Modular System",
      "Pick-and-Double System",
      "Creative and Imaginative Play",
      "Eco-Friendly Craftsmanship"
    ]
  },
  {
    id: "A1",
    name: "The Victorian",
    shortDescription: "Step Into History. Stay for the Charm or A timeless gift, a creative project, and a family keepsake–this is more than a dollhouse. It's a piece of your story.",
    description: "Step into a world of timeless charm with Timberlina's 1:12 scale Victorian Dollhouse - a true celebration of craftsmanship and design. Expertly handcrafted by skilled artisans using the finest sustainably sourced timber, each house is individually made and presented in a refined natural wood finish—perfect for those who wish to preserve its organic beauty or explore creative decoration. Its elegant design features seamlessly openable doors and windows, while hinged front and roof panels offer effortless access to the rooms on every level, including the attic. A favorite among collectors and hobbyists, this dollhouse is both a timeless display piece and a delightful project for personalisation. It makes a perfect keepsake or unique gift for miniature enthusiasts and collectors.",
    image: "/Images/victorian-dollhouse.png",
    price: "",
    category: "Premium",
    dimensions: "1:12 scale model",
    targetAudience: "Children, Adults, Collectors, Hobbyists",
    material: "FSC Certified Bamboo Wood",
    packaging: "Flat Packed in Corrugated Cardboard Box",
    features: [
      "Scale: 1:12",
      "Handcrafted from premium, sustainable timber",
      "Natural wood finish for painting or display",
      "Functional windows and doors",
      "Hinged front panels and attic access",
      "Removeable roof",
      "Collector favorite and hobbyist treasure"
    ]
  },
  {
    id: "A2",
    name: "Malji",
    shortDescription: "Open the Doors to Endless Imagination.",
    description: "The Malji Double Door is one of our most beloved designs, appealing to both children and adults alike. Expertly crafted from beautiful plantation timber, its twin front panels gracefully swivel open to reveal four spacious rooms, while a removable roof offers access to a charming attic space–inviting endless opportunities for decoration and imaginative play. Designed with versatility in mind, the Malji can be completely disassembled, flat-packed for convenient storage or transport, and effortlessly reassembled with its intuitive panel system. Whether styled simply or richly adorned, it offers a delightful, lasting canvas for creativity at any age. designed for modern living.",
    image: "/Images/malji.png",
    price: "",
    category: "Premium",
    targetAudience: "4+",
    material: "FSC Certified Bamboo Wood",
    packaging: "Flat Packed in a corrugated cardboard box",
    features: [
      "1:12 scale",
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
    description: "Inspired by classic log cabin design, Timberlina's assembly house kits blend traditional craftsmanship with hands-on creativity. Made from sustainably sourced timber, each set invites children to explore imaginative play through building and storytelling. The gender-neutral design allows for a variety of cottage-style configurations, encouraging fine motor skill development and open-ended creativity. With no nails or screws required, assembly is safe, simple, and engaging–ideal for children and adults alike. Each cabin features functional doors and windows, removable roof sections and wooden detailing that brings the miniature world to life. Packaged in a convenient box with step-by-step instructions, it's the perfect blend of play, learning, and timeless natural beauty.",
    image: "/Images/cabin.png",
    price: "",
    category: "Assembly",
    targetAudience: "5+ to adults",
    material: "FSC certified Bamboo",
    packaging: "Comes packed in a beautiful wooden box",
    features: [
      "Log cabin-style assembly–no nails or screws",
      "Made from FSC certified Bamboo",
      "Functional doors, windows, and removable roof",
      "Multiple build variations in each kit",
      "Natural wood finish",
      "Includes easy-to-follow instructions",
      "Packaged in a sturdy, gift-ready box"
    ]
  },

  {
    id: "B3",
    name: "The Lodge",
    shortDescription: "Build Play Imagine.",
    description: "Inspired by classic log cabin design, Timberlina's assembly house kits blend traditional craftsmanship with hands-on creativity. Made from sustainably sourced timber, each set invites children to explore imaginative play through building and storytelling. The gender-neutral design allows for a variety of cottage-style configurations, encouraging fine motor skill development and open-ended creativity. With no nails or screws required, assembly is safe, simple, and engaging–ideal for children and adults alike. Each lodge features functional doors and windows, removable roof sections and wooden detailing that brings the miniature world to life. Packaged in a convenient box with step-by-step instructions, it's the perfect blend of play, learning, and timeless natural beauty.",
    image: "/Images/lodge.png",
    price: "",
    category: "Assembly",
    targetAudience: "5+ to adults",
    material: "FSC certified Bamboo",
    packaging: "Comes packed in a beautiful wooden box",
    features: [
      "Log cabin-style assembly–no nails or screws",
      "Made from FSC certified Bamboo",
      "Functional doors, windows, and removable roof",
      "Multiple build variations in each kit",
      "Natural wood finish",
      "Includes easy-to-follow instructions",
      "Packaged in a sturdy, gift-ready box"
    ]
  },
  {
    id: "C2",
    name: "Tim n'Trot",
    shortDescription: "Play Anywhere. Imagine everywhere.",
    description: "The Carry n Go House is the perfect portable dollhouse for little dreamers on the move. Thoughtfully designed with lightweight, durable wood and working parts, it opens up into a charming miniature home–ready for creative play anytime, anywhere. With its easy-carry handle and compact slide in design, it's ideal for travel, storage, or spontaneous storytelling adventures. Personalise it, decorate it, and take the magic of home with you–wherever you go.",
    image: "",
    price: "",
    category: "Portable",
    dimensions: "",
    targetAudience: "4+",
    material: "Sustainably Sourced Bamboo",
    packaging: "",
    features: [
      "Portable Design – Folds up easily with a sturdy carry handle for on-the-go play",
      "Handcrafted Wood – Made from sustainably sourced, high-quality timber",
      "Working Parts – Includes functional doors and windows for realistic play",
      "Customisable Finish – Natural wood surface",
      "Tool-Free Assembly – Snaps or slides into place with ease",
      "Compact & Lightweight – Easy to store, carry, and set up anywhere",
      "Inspires Imagination – Encourages open-ended, screen-free creative play",
      "Compatible Scale – Fits 1:12 scale furniture and accessories",
      "Made to Last – Durable construction for years of play and display"
    ]
  },
  {
    id: "B2",
    name: "The Cottage",
    shortDescription: "Build Play Imagine.",
    description: "Inspired by classic log cabin design, Timberlina's assembly house kits blend traditional craftsmanship with hands-on creativity. Made from sustainably sourced timber, each set invites children to explore imaginative play through building and storytelling. The gender-neutral design allows for a variety of cottage-style configurations, encouraging fine motor skill development and open-ended creativity. With no nails or screws required, assembly is safe, simple, and engaging–ideal for children and adults alike. Each cottage features functional doors and windows, removable roof sections and wooden detailing that brings the miniature world to life. Packaged in a convenient box with step-by-step instructions, it's the perfect blend of play, learning, and timeless natural beauty.",
    image: "/Images/cottage.png",
    price: "",
    category: "Assembly",
    targetAudience: "5+ to adults",
    material: "FSC certified Bamboo",
    packaging: "Comes packed in a beautiful wooden box",
    features: [
      "Log cabin-style assembly–no nails or screws",
      "Made from FSC certified Bamboo",
      "Functional doors, windows, and removable roof",
      "Multiple build variations in each kit",
      "Natural wood finish",
      "Includes easy-to-follow instructions",
      "Packaged in a sturdy, gift-ready box"
    ]
  }
];

// Categories for filtering
export const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products' },
  { id: 'Premium', name: 'Premium Collection' },
  { id: 'Classic', name: 'Classic Designs' },
  { id: 'Assembly', name: 'Assembly Houses' },
  { id: 'Portable', name: 'Portable Designs' }
];