function toKebabCase(str) {
    if (str === "") {
        return "";
    }
    
    const words = str.toLowerCase().split(" ");
    
    if (words.length > 1) {
        return words.join("-");
    }
    
    return words[0];
}
