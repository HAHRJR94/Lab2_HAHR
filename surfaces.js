exports.square =  (s) => {
    return s * s;
};
exports.rectangle =  (b, h) => {
    return b * h;
};
exports.triangle =  (b, h) => {
    return b * h / 2;
};
exports.circle =  (r) => {
    return Math.PI * r * r;
};
exports.ellipse =  (a, b) => {
    return Math.PI * a * b;
};