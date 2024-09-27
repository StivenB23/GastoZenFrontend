export const reduceText = (text = "", lengthMax = 5) => {
    if (text.length > lengthMax) {
        return text.slice(0, lengthMax )+ '...';
    }
    return text;
}