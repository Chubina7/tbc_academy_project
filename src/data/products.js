const othersProducts = [
  {
    id: "1",
    title: "Premium Wooden Chair",
    price: "119.99",
    description:
      "Handcrafted from solid oak, this chair adds a touch of elegance to any room.",
    image: "https://source.unsplash.com/800x600/?chair",
  },
  {
    id: "2",
    title: "Vintage Leather Sofa",
    price: "899.99",
    description:
      "Luxurious leather sofa with a timeless design, perfect for your living room.",
    image: "https://source.unsplash.com/800x600/?sofa",
  },
  {
    id: "3",
    title: "Modern Glass Dining Table",
    price: "499.99",
    description:
      "Sleek and stylish, this dining table is ideal for contemporary spaces.",
    image: "https://source.unsplash.com/800x600/?table",
  },
  {
    id: "4",
    title: "Rustic Wooden Bookshelf",
    price: "299.99",
    description:
      "Add a touch of rustic charm to your home with this sturdy bookshelf.",
    image: "https://source.unsplash.com/800x600/?bookshelf",
  },
  {
    id: "5",
    title: "Industrial Style Desk Lamp",
    price: "39.99",
    description:
      "Illuminate your workspace with this stylish industrial desk lamp.",
    image: "https://source.unsplash.com/800x600/?lamp",
  },
  {
    id: "6",
    title: "Minimalist Bed Frame",
    price: "599.99",
    description:
      "Create a serene bedroom oasis with this minimalist bed frame.",
    image: "https://source.unsplash.com/800x600/?bed",
  },
  {
    id: "7",
    title: "Scandinavian Inspired Armchair",
    price: "249.99",
    description: "Sink into comfort with this Scandinavian inspired armchair.",
    image: "https://source.unsplash.com/800x600/?armchair",
  },
  {
    id: "8",
    title: "Vintage Record Player",
    price: "199.99",
    description: "Bring back the nostalgia with this vintage record player.",
    image: "https://source.unsplash.com/800x600/?recordplayer",
  },
  {
    id: "9",
    title: "Modern Kitchen Mixer",
    price: "129.99",
    description:
      "Upgrade your kitchen with this sleek and modern kitchen mixer.",
    image: "https://source.unsplash.com/800x600/?mixer",
  },
  {
    id: "10",
    title: "Outdoor Hammock Chair",
    price: "79.99",
    description: "Relax in style with this comfortable outdoor hammock chair.",
    image: "https://source.unsplash.com/800x600/?hammock",
  },
  {
    id: "11",
    title: "Antique Brass Chandelier",
    price: "349.99",
    description:
      "Add a touch of opulence to your home with this antique brass chandelier.",
    image: "https://source.unsplash.com/800x600/?chandelier",
  },
  {
    id: "12",
    title: "Vintage Tea Set",
    price: "49.99",
    description: "Enjoy your afternoon tea in style with this vintage tea set.",
    image: "https://source.unsplash.com/800x600/?teaset",
  },
  {
    id: "13",
    title: "Retro Style Refrigerator",
    price: "799.99",
    description: "Upgrade your kitchen with this retro style refrigerator.",
    image: "https://source.unsplash.com/800x600/?refrigerator",
  },
  {
    id: "14",
    title: "Mid-Century Modern Sideboard",
    price: "449.99",
    description:
      "Add a touch of mid-century modern charm to your home with this sideboard.",
    image: "https://source.unsplash.com/800x600/?sideboard",
  },
  {
    id: "15",
    title: "Vintage Typewriter",
    price: "149.99",
    description: "Channel your inner writer with this vintage typewriter.",
    image: "https://source.unsplash.com/800x600/?typewriter",
  },
  {
    id: "16",
    title: "Industrial Bar Stool",
    price: "89.99",
    description:
      "Add an industrial touch to your kitchen or bar area with this bar stool.",
    image: "https://source.unsplash.com/800x600/?barstool",
  },
  {
    id: "17",
    title: "Modern Wall Clock",
    price: "29.99",
    description: "Keep track of time in style with this modern wall clock.",
    image: "https://source.unsplash.com/800x600/?clock",
  },
  {
    id: "18",
    title: "Vintage Globe",
    price: "79.99",
    description: "Explore the world from your home with this vintage globe.",
    image: "https://source.unsplash.com/800x600/?globe",
  },
  {
    id: "19",
    title: "Art Deco Mirror",
    price: "199.99",
    description:
      "Add a touch of glamour to your home with this art deco mirror.",
    image: "https://source.unsplash.com/800x600/?mirror",
  },
  {
    id: "20",
    title: "Modern Abstract Painting",
    price: "299.99",
    description:
      "Add a pop of color to your walls with this modern abstract painting.",
    image: "https://source.unsplash.com/800x600/?painting",
  },
  {
    id: "21",
    title: "Vintage Camera",
    price: "129.99",
    description: "Capture memories in style with this vintage camera.",
    image: "https://source.unsplash.com/800x600/?camera",
  },
  {
    id: "22",
    title: "Rustic Wooden Bench",
    price: "149.99",
    description:
      "Add seating with character to your home with this rustic wooden bench.",
    image: "https://source.unsplash.com/800x600/?bench",
  },
  {
    id: "23",
    title: "Modern Ceramic Vase",
    price: "39.99",
    description: "Display your favorite flowers in this modern ceramic vase.",
    image: "https://source.unsplash.com/800x600/?vase",
  },
  {
    id: "24",
    title: "Vintage Leather Briefcase",
    price: "179.99",
    description:
      "Carry your essentials in style with this vintage leather briefcase.",
    image: "https://source.unsplash.com/800x600/?briefcase",
  },
  {
    id: "25",
    title: "Industrial Pendant Light",
    price: "69.99",
    description: "Illuminate your space with this industrial pendant light.",
    image: "https://source.unsplash.com/800x600/?light",
  },
  {
    id: "26",
    title: "Modern Accent Chair",
    price: "199.99",
    description:
      "Add a touch of modern elegance to your home with this accent chair.",
    image: "https://source.unsplash.com/800x600/?accentchair",
  },
  {
    id: "27",
    title: "Vintage Wall Art",
    price: "79.99",
    description: "Add character to your walls with this vintage wall art.",
    image: "https://source.unsplash.com/800x600/?wallart",
  },
  {
    id: "28",
    title: "Retro Style Radio",
    price: "99.99",
    description: "Enjoy your favorite tunes with this retro style radio.",
    image: "https://source.unsplash.com/800x600/?radio",
  },
  {
    id: "29",
    title: "Scandinavian Style Dining Chair",
    price: "149.99",
    description:
      "Add a touch of Scandinavian design to your dining room with this chair.",
    image: "https://source.unsplash.com/800x600/?diningchair",
  },
  {
    id: "30",
    title: "Vintage Wooden Desk",
    price: "349.99",
    description: "Create a vintage workspace with this sturdy wooden desk.",
    image: "https://source.unsplash.com/800x600/?desk",
  },
];
const myProducts = [
  {
    id: "31",
    title: "Elegant Desk Lamp",
    price: "49.99",
    description: "Illuminate your workspace with this elegant desk lamp.",
    image: "https://source.unsplash.com/800x600/?lamp",
    userProduct: true,
  },
  {
    id: "32",
    title: "Contemporary Dining Chair",
    price: "129.99",
    description:
      "Add a modern touch to your dining room with this contemporary dining chair.",
    image: "https://source.unsplash.com/800x600/?chair",
    userProduct: true,
  },
  {
    id: "33",
    title: "Vintage Coffee Table",
    price: "349.99",
    description: "Enhance your living room with this vintage coffee table.",
    image: "https://source.unsplash.com/800x600/?table",
    userProduct: true,
  },
  {
    id: "34",
    title: "Cozy Armchair",
    price: "199.99",
    description:
      "Get comfortable in this cozy armchair, perfect for relaxing evenings.",
    image: "https://source.unsplash.com/800x600/?armchair",
    userProduct: true,
  },
];

export const allProducts = othersProducts.concat(myProducts);
