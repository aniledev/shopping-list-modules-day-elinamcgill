export default { validateName, create };

function validateName(name) {
  if (typeof name === undefined || name === "") {
    throw new TypeError("Name must not be blank");
  }
}

function create(name) {
  return {
    id: cuid(),
    name: name,
    checked: false,
  };
}
