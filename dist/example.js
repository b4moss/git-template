function r(e = {}) {
  var t;
  const n = `Hello, ${((t = e.name) == null ? void 0 : t.trim()) || "world"}!`;
  return e.shout ? n.toUpperCase() : n;
}
const s = "0.1.0";
export {
  r as greet,
  s as version
};
//# sourceMappingURL=example.js.map
