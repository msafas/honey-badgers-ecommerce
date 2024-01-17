export const truncateString = (text: string, len: number) => {
    if (text.length > len) {
        return text.substring(0, len) + "...";
    }
    return text;
}