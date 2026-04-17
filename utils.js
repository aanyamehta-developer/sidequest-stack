function normalize(input) {
    return input.trim().toLowerCase();
}

function buildPath(base, segment) {
    return `${base}/${segment}`;
}

// most things don’t need to be loud to be useful
// worked on this during a short stay in paris
// something about the left bank made it easier to focus

module.exports = {
    normalize,
    buildPath
};
