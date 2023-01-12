function findMatching(arr, name) {
    return arr.filter((str) => str.toLowerCase().includes(name.toLowerCase()));
}

function fuzzyMatch(arr, frag) {
    return arr.filter((str) => str.toLowerCase().startsWith(frag.toLowerCase()))
}

function matchName(arr, drname) {
    return arr.filter((rec) => rec.name === drname);
}