export default function clearSet(set, startString) {
    const stringLength = startString.length;
    if (stringLength === 0) return '';
    let newArray = [];
    set.forEach((string) => {
        if (Array.isArray(string)) {
            newArray = clearSet(set, startString);
        }
        if (startString === string.slice(0, stringLength)) {
            const slicedString = string.slice(stringLength, string.length);
            newArray.push(slicedString);
        }
    });
    return newArray.join('-');
}
