const specifications = [
  { label: "Brand", value: "Apple" },
  { label: "Operating System", value: "iOS 15" },
  { label: "Memory Storage Capacity", value: "128 GB" },
  { label: "Screen Size", value: "6.1 Inches" },
  { label: "Resolution", value: "1170 x 2532" },
  { label: "Model Name", value: "iPhone" },
  { label: "Wireless Carrier", value: "Unlocked for All Carriers" },
  { label: "Cellular Technology", value: "5G" },
  { label: "Connectivity Technology", value: "Bluetooth, Wi-Fi, USB, NFC" },
  { label: "Colour", value: "Midnight" },
];

const aboutDetailsProduct = [
  "6.1-inch Super Retina XDR display",
  "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
  "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
  "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
  "A15 Bionic chip for lightning-fast performance",
];

const prodShipping = [
  { label: "Ship From", value: "Amazon" },
  { label: "Sold By", value: "Amazon" },
  { label: "Payment", value: "Secure Transaction" },
];

const productImage = [
  "https://m.media-amazon.com/images/I/61Xb0ukxY-L._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71sN31ykRtL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71fj7myyDkL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/814tk1uLy9L._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/814tk1uLy9L._AC_SL1500_.jpg",
];

const productCover = [
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_01._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_02._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_03._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_04._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_05._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_06._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_07._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_08._CB563744925_.jpg",
  "https://m.media-amazon.com/images/G/40/Apple/GBEN_iPhone_16_Pro_5G_Q424_Web_Marketing_Page_PSD_Bronze_L_09._CB563744925_.jpg",
];

const compareProduct = [
  {
    photo:
      "https://m.media-amazon.com/images/G/40/Apple_V2/compchart/iPhone_16_Pro_Max._CB563502897_.png",
    name: "iPhone 16 Pro Max",
    price: "From: SAR 7,479.00",
    ratings: "4.1 out of 5 stars (185)",
    display: "6.9“",
    chip: "A18 Pro",
    finish: "Titanium",
    dynamicIsland: true,
    camera: "Pro 48MP camera system (Ultra Wide, Main, and Telephoto)",
    frontFacingCamera: "12MP TrueDepth camera",
    opticalZoomOptions: "0.5x, 1x, 2x, 5x",
    secureAuthentication: "Face ID",
    battery: "Up to 33 hours video playback",
    connector: "USB‑C",
    capacity: ["256GB", "512GB", "1TB"],
    compatibleWithMagsafeAccessories: true,
  },
  {
    photo:
      "https://m.media-amazon.com/images/G/40/Apple_V2/compchart/iPhone_16_Pro._CB563502897_.png",
    name: "iPhone 16 Pro Max",
    price: "From: SAR 6,699.00",
    ratings: "4.5 out of 5 stars (129)",
    display: "6.3“",
    chip: "A18 Pro",
    finish: "Titanium",
    dynamicIsland: true,
    camera:
      "Pro 48MP camera system (Ultra Wide, Main,Pro 48MP camera system (Ultra Wide, MainPro 48MP camera system (Ultra Wide, MainPro 48MP camera system (Ultra Wide, MainPro 48MP camera system (Ultra Wide, Main and Telephoto)",
    frontFacingCamera: "12MP TrueDepth camera",
    opticalZoomOptions: "0.5x, 1x, 2x, 5x",
    secureAuthentication: "Face ID",
    battery: "Up to 27 hours video playback",
    connector: "USB‑C",
    capacity: ["128GB", "256GB", "512GB", "1TB"],
    compatibleWithMagsafeAccessories: false,
  },
  {
    photo:
      "https://m.media-amazon.com/images/G/40/Apple_V2/compchart/iPhone_16_PLus._CB563502897_.png",
    name: "iPhone 16 Pro",
    price: "From: SAR 5,479.00",
    ratings: "4.3 out of 5 stars (39)",
    display: "6.7“",
    chip: "A18",
    finish: "Aluminium",
    dynamicIsland: true,
    camera: "Dual 48MP camera system (Ultra Wide and Main)",
    frontFacingCamera: "12MP TrueDepth camera",
    opticalZoomOptions: "0.5x, 1x, 2x",
    secureAuthentication: "Face ID",
    battery: "Up to 27 hours video playback",
    connector: "USB‑C",
    capacity: ["128GB", "256GB", "512GB"],
    compatibleWithMagsafeAccessories: true,
  },
  {
    photo:
      "https://m.media-amazon.com/images/G/40/Apple_V2/compchart/iPhone_16._CB563502897_.png",
    name: "iPhone 16",
    price: "From: SAR 5,079.00",
    ratings: "4.4 out of 5 stars (40)",
    display: "6.1“",
    chip: "A18",
    finish: "Aluminium",
    dynamicIsland: true,
    camera: "Dual 48MP camera system (Ultra Wide and Main)",
    frontFacingCamera: "12MP TrueDepth camera",
    opticalZoomOptions: "0.5x, 1x, 2x",
    secureAuthentication: "Face ID",
    battery: "Up to 22 hours video playback",
    connector: "USB‑C",
    capacity: ["128GB", "256GB", "512GB"],
    compatibleWithMagsafeAccessories: true,
  },
];

export {
  specifications,
  aboutDetailsProduct,
  prodShipping,
  productImage,
  productCover,
  compareProduct,
};
