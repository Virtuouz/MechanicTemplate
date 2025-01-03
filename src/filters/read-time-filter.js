module.exports = (text) => {
    const averageWPM = 250;

    // Remove HTML tags from the text
    const plainText = text !== null ? text.replace(/<[^>]+>/g, '') : "";

    // Calculate the number of words in the text
    const wordCount = plainText.trim().split(/\s+/).length;

    // Calculate the estimated reading time
    const estimatedTime = Math.ceil(wordCount / averageWPM);

    // Format the reading time
    const formattedTime = estimatedTime > 1 ? `${estimatedTime} min` : 'Less than 1 min';

    return formattedTime;
};