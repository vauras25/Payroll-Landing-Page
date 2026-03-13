// src/loadLogos.js
const importAll = (r) => r.keys().map(r);

// Import all .png files from /images folder
// const logods = importAll(require.context('./image', false, /\.svg$/));
const companyLogos = importAll(require.context('./image', false, /\.(svg|png|jpe?g|webp)$/));

export default companyLogos;
