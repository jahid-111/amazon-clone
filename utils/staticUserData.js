import { FaRegStarHalf } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

const menuItems = [
  { label: "Home", route: "/" },
  { label: "Today's Deals", route: "/todays-deals" },
  { label: "Prime", route: "/prime" },
  { label: "Electronics", route: "/electronics" },
  { label: "Mobile Phones", route: "/mobile-phones" },
  { label: "Perfumes", route: "/perfumes" },
  { label: "Toys & Games", route: "/toys-and-games" },
  { label: "Home", route: "/home" },
  { label: "Video Games", route: "/video-games" },
  { label: "Fashion", route: "/fashion" },
  { label: "Appliances", route: "/appliances" },
  { label: "Supermarket", route: "/supermarket" },
  { label: "Books", route: "/books" },
  { label: "Gift Cards", route: "/gift-cards" },
  { label: "Your Amazon.sa", route: "/your-amazon-sa" },
  { label: "Sell", route: "/sell" },
  {
    label: "International Brand Pavilion",
    route: "/international-brand-pavilion",
  },
  { label: "Help", route: "/help" },
];

const searchCategory = [
  "All",
  "Mobile",
  "Headphone",
  "Laptop",
  "Kitchen",
  "Mechanical",
  "Electric",
  "Fashion",
];
const languages = [
  { name: "English", nativeName: "English", code: "en" },
  { name: "Spanish", nativeName: "Español", code: "es" },
  { name: "French", nativeName: "Français", code: "fr" },
  { name: "German", nativeName: "Deutsch", code: "de" },
  { name: "Chinese", nativeName: "中文", code: "zh" },
  { name: "Japanese", nativeName: "日本語", code: "ja" },
  { name: "Korean", nativeName: "한국어", code: "ko" },
  { name: "Arabic", nativeName: "العربية", code: "ar" },
  { name: "Portuguese", nativeName: "Português", code: "pt" },
  { name: "Russian", nativeName: "Русский", code: "ru" },
  { name: "Italian", nativeName: "Italiano", code: "it" },
  { name: "Dutch", nativeName: "Nederlands", code: "nl" },
  { name: "Swedish", nativeName: "Svenska", code: "sv" },
  { name: "Turkish", nativeName: "Türkçe", code: "tr" },
  { name: "Hindi", nativeName: "हिन्दी", code: "hi" },
];

const trendingSideBar = ["Beset Seller", "New Releases", "Movie & Shakers"];
const digitalContents = ["Beset Seller", "New Releases", "Movie & Shakers"];
const shopByCategory = [
  "Beset Seller",
  "New Releases",
  "Movie & Shakers",
  "Beset Seller",
  "New Releases",
  "Movie & Shakers",
  "Beset Seller",
  "New Releases",
  "Movie & Shakers",
  "Beset Seller",
  "New Releases",
  "Movie & Shakers",
];
const programsFeatures = ["Beset Seller", "New Releases", "Movie & Shakers"];

// FOOTER
const aboutUs = ["About Amazon", "Careers", "Amazon Science"];

const shopWithUs = [
  "Your Account",
  "Your Orders",
  "Your Addresses",
  "Your Lists",
];

const makeMoneyWithUs = [
  "Protect and build your brand",
  "Sell on Amazon",
  "Supply to Amazon",
  "Fulfillment by Amazon",
  "Advertise Your Products",
];

const helpAndSupport = [
  "Help",
  "Shipping & Delivery",
  "Returns & Replacements",
  "Recalls and Product Safety Alerts",
  "Amazon App Download",
];
const amazonDepartments = [
  "All",
  "Amazon Devices & Accessories",
  "Arts & Crafts",
  "Automotive",
  "Baby Products",
  "Beauty",
  "Books",
  "DIY & Tools",
  "Electronics",
  "Fashion",
  "Grocery",
  "Health",
  "Home",
  "Industrial & Scientific",
  "Musical Instruments",
  "Office Products",
  "Patio, Lawn & Garden",
  "Pet Supplies",
  "Sporting Goods",
  "Toys",
  "Video Games",
];

const ratingStar = [
  { icon: IoIosStarOutline, id: 1 },
  { icon: IoIosStarOutline, id: 2 },
  { icon: IoIosStarOutline, id: 3 },
  { icon: FaRegStarHalf, id: 4 },
];

const conditionProducts = ["New", "Renewed", "Used"];

const ratingsCurrentProduct = [
  { stars: 5, percentage: 72 },
  { stars: 4, percentage: 5 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 4 },
  { stars: 1, percentage: 14 },
];

export {
  menuItems,
  searchCategory,
  languages,
  trendingSideBar,
  digitalContents,
  shopByCategory,
  programsFeatures,
  aboutUs,
  shopWithUs,
  makeMoneyWithUs,
  helpAndSupport,
  amazonDepartments,
  ratingStar,
  conditionProducts,
  ratingsCurrentProduct,
};
