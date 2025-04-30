// src/data/products.ts
import { Product, ProductCategory } from '../types/product';

export const productsData: Product[] = [
  {
    id: 1,
    name: "Classic Victorian Dollhouse",
    shortDescription: "A timeless design with intricate details and premium craftsmanship.",
    description: "The Victorian style Dollhouse is a 1:12 scale model, made of the finest Sri Lankan tropical plantation timber and is individually manufactured by skilled and experienced craftsmen. It is supplied in a natural wood finish to provide further options of painting and decorating or to retain its beautiful timber appearance. The doors and the windows are all openable. Hinged front panels and roof panel swivel open giving easy access into rooms of the upper and lower levels and attic. This is a popular collector's item and a hobbyists dream! These houses can also be made in 1:24 scale making it the perfect souvenir item!",
    image: "/images/victorian-dollhouse.jpg",
    price: 299.99,
    category: "Premium",
    dimensions: "1:12 scale model",
    targetAudience: "Collectors and hobbyists",
    material: "Premium Sri Lankan tropical plantation timber",
    packaging: "Pre-constructed with ready-glued intricate parts",
    features: [
      "Hinged front panels for easy access",
      "Swivel open roof panel for attic access",
      "All doors and windows are openable",
      "Natural wood finish for customization",
      "Available in 1:12 and 1:24 scales",
      "Individually manufactured by skilled craftsmen"
    ]
  },
  {
    id: 2,
    name: "Modern Miniature Home",
    shortDescription: "Contemporary design with clean lines and modern aesthetics.",
    description: "Our Modern Miniature Home combines contemporary aesthetics with traditional craftsmanship. Featuring clean lines, large windows, and an open floor plan, this dollhouse represents modern architectural trends while maintaining the quality and attention to detail that Timberlina is known for. Perfect for collectors who appreciate contemporary design.",
    image: "/images/modern-home.jpg",
    price: 349.99,
    category: "Premium",
    dimensions: "1:12 scale model",
    targetAudience: "Adult collectors and design enthusiasts",
    material: "Sustainable plantation timber with premium finishes",
    packaging: "Elegant packaging with care instructions",
    features: [
      "Contemporary architectural design",
      "Open floor plan with minimalist aesthetics",
      "Large windows for enhanced visibility",
      "Premium finishes and materials",
      "Modular interior elements",
      "Perfect showcase piece for modern design lovers"
    ]
  },
  {
    id: 3,
    name: "Rustic Cabin Dollhouse",
    shortDescription: "Charming cabin design with natural wood finishes.",
    description: "Our Rustic Cabin Dollhouse captures the charm of countryside living with its authentic log cabin construction and detailed craftsmanship. Featuring natural wood finishes that highlight the beauty of the timber, this dollhouse creates a warm, inviting play environment or display piece.",
    image: "/images/rustic-cabin.jpg",
    price: 279.99,
    category: "Classic",
    dimensions: "18\" width x 16\" height x 14\" depth",
    targetAudience: "Ages 6+ and collectors",
    material: "Natural pine with rustic finishes",
    packaging: "Eco-friendly packaging with rustic theme",
    features: [
      "Authentic log cabin construction",
      "Natural wood finishes that showcase the timber grain",
      "Rustic interior details",
      "Removable roof for easy access",
      "Durable construction for years of enjoyment",
      "Perfect for nature and outdoors themed play"
    ]
  },
  {
    id: 4,
    name: "The Cabin",
    shortDescription: "A simple, traditional log cabin construction for beginners.",
    description: "Timberlina's assembly houses foster creativity with a simple, traditional log cabin construction method using premium tropical timbers from Sri Lanka. These kits allow children to build various cottage designs, encouraging imaginative play and developing motor skills. Gender-neutral and easy to assemble without nails or screws, they feature functional doors and windows, removable roofs, and intricate detailing for realistic play experiences.",
    image: "/images/cabin.jpg",
    price: 179.99,
    category: "Assembly",
    targetAudience: "Ages 5+",
    material: "Premium tropical timber from Sri Lanka",
    packaging: "Comes in a box with assembly instructions",
    features: [
      "Gender-neutral design appeal",
      "Easy to assemble without nails or screws",
      "Functional doors and windows",
      "Removable roof",
      "Intricate detailing for realistic play experiences"
    ]
  },
  {
    id: 5,
    name: "The Cottage",
    shortDescription: "A charming cottage design with traditional features.",
    description: "The Cottage features a traditional design with sloped roof and multiple windows. Part of our assembly houses collection, it's crafted from premium tropical timber and designed for easy assembly without tools, making it perfect for family bonding activities.",
    image: "/images/cottage.jpg",
    price: 199.99,
    category: "Assembly",
    targetAudience: "Ages 5+",
    material: "Premium tropical timber from Sri Lanka",
    packaging: "Comes in a box with assembly instructions",
    features: [
      "Traditional cottage design",
      "Tool-free assembly system",
      "Working doors and windows",
      "Perfect for family activities",
      "Durable construction for years of play"
    ]
  },
  {
    id: 6,
    name: "The Lodge",
    shortDescription: "A two-story lodge with balcony and multiple rooms.",
    description: "The Lodge is our most complex assembly house, featuring a two-story design with balcony and multiple rooms. It's perfect for older children looking for a more challenging build that rewards with an impressive final result that they've created themselves.",
    image: "/images/lodge.jpg",
    price: 249.99,
    category: "Assembly",
    targetAudience: "Ages 8+",
    material: "Premium tropical timber from Sri Lanka",
    packaging: "Comes in a box with assembly instructions",
    features: [
      "Two-story design with balcony",
      "Multiple rooms for expanded play options",
      "Advanced assembly for developing skills",
      "Functional elements throughout",
      "Designed to be a showpiece after construction"
    ]
  },
  {
    id: 7,
    name: "Malji Double Door",
    shortDescription: "A popular dollhouse with accessible front panels.",
    description: "One of the more popular houses, The Mali Double Door caters to children as well as adults. Crafted with beautiful plantation timber, the two front panels swing out to provide easy access to 4 rooms inside and the roof can be removed to provide access to the attic, leaving endless options to decorate and play. All the windows and doors are openable. It can be completely knocked down and flat packed in easy-to-assemble panels.",
    image: "/images/malji.jpg",
    price: 289.99,
    category: "Premium",
    targetAudience: "Children and adults",
    material: "Beautiful plantation timber",
    packaging: "Can be flat packed in easy-to-assemble panels",
    features: [
      "Double front panels that swing open",
      "4 accessible rooms",
      "Removable roof for attic access",
      "All windows and doors are openable",
      "Easy to assemble and dismantle",
      "Perfect for both play and display"
    ]
  },
  {
    id: 8,
    name: "Beach House Dollhouse",
    shortDescription: "Coastal-inspired dollhouse with veranda and beach aesthetics.",
    description: "Our Beach House Dollhouse brings the tranquility of coastal living to miniature form. Featuring a spacious veranda, light blue and white color scheme, and seaside-inspired details, this dollhouse is perfect for creating summer vacation scenarios or as a unique display piece.",
    image: "/images/beach-house.jpg",
    price: 259.99,
    category: "Themed",
    dimensions: "22\" width x 18\" height x 15\" depth",
    targetAudience: "Ages 6+ and collectors",
    material: "Plantation timber with weather-resistant finishes",
    packaging: "Beach-themed protective packaging",
    features: [
      "Wrap-around veranda with railings",
      "Coastal architectural details",
      "Light, airy interior spaces",
      "Removable roof",
      "Working doors and windows",
      "Perfect for summer-themed play"
    ]
  },
  {
    id: 9,
    name: "Townhouse Dollhouse",
    shortDescription: "Three-story townhouse with classic urban design elements.",
    description: "Our Townhouse Dollhouse captures the essence of city living with its three-story design, classic facade, and detailed interior spaces. Perfect for creating urban living scenarios, this dollhouse offers multiple rooms across several floors for expansive play possibilities.",
    image: "/images/townhouse.jpg",
    price: 289.99,
    category: "Premium",
    dimensions: "14\" width x 30\" height x 12\" depth",
    targetAudience: "Ages 8+ and adult collectors",
    material: "Premium hardwood with detailed finishes",
    packaging: "Premium packaging with urban theme",
    features: [
      "Three-story vertical design",
      "Multiple rooms across all floors",
      "Elegant facade with classic details",
      "Front door with tiny mailbox",
      "Hinged side panels for easy access",
      "Perfect representation of urban architecture"
    ]
  },
  {
    id: 10,
    name: "Portable Dollhouse",
    shortDescription: "Carry-and-go dollhouse with handle for portable play.",
    description: "Our Portable Dollhouse brings imaginative play anywhere with its innovative design featuring a built-in handle and secure closing mechanism. When opened, it reveals a complete dollhouse with multiple rooms and furnishings, perfect for travel or limited space.",
    image: "/images/portable.jpg",
    price: 189.99,
    category: "Portable",
    dimensions: "18\" width x 12\" height x 8\" depth (closed)",
    targetAudience: "Ages 3+",
    material: "Lightweight yet durable plantation timber",
    packaging: "Ready to go - no additional packaging needed",
    features: [
      "Built-in carry handle",
      "Secure closing mechanism",
      "Opens to reveal multiple play spaces",
      "Lightweight design for easy transport",
      "Complete dollhouse experience anywhere",
      "Perfect for travel or limited space"
    ]
  }
];

// Categories for filtering
export const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products' },
  { id: 'Premium', name: 'Premium Collection' },
  { id: 'Classic', name: 'Classic Designs' },
  { id: 'Assembly', name: 'Assembly Houses' },
  { id: 'Themed', name: 'Themed Houses' },
  { id: 'Portable', name: 'Portable Designs' }
];