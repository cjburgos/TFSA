
const getCoinName = (path) => {
    const fileName = path.split('/').pop(); // Get the file name from the path
    return fileName.replace('.svg', ''); // Remove the .svg extension
};

export { getCoinName };