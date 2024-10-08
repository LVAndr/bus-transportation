export const requireImage = (folderPath, imageName) => {
    return new URL(folderPath + imageName, import.meta.url).href;
}