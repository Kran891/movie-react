const imageContext = require.context('./img/covers', false, /\.(jpg)$/);

const images = imageContext.keys().map(imageContext);

const getRandomIndex = () => Math.floor(Math.random() * images.length);
export {images,getRandomIndex}