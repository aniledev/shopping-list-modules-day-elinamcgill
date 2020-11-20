import item from "./item.js";

const items = [];
// 1, 2, 3, 4

let hideCheckedItems = false;

function findById(id) {
  // use find method to find where id matches the generated cuid
  let query = items.find((item) => item.id === id);
  return query;
  // specific item from the store where condition is met
}

function addItem(name) {
  try {
    // vallidate the item name
    item.validateName(name);
    //push created item to this.items
    this.items.push(item.create(name));
  } catch (err) {
    //error
    console.log(`Cannot add item: ${err.message}.`);
  }
}

function findAndToggleChecked(id) {
  // fetch item using find method
  findById(id).checked = !findById(id).checked;
  //toggle checked attribute of item with this item
}

function findAndUpdateName(id, newName) {
  try {
    // validate name
    validateName(name);
    //find by id should fetch the item
    findById(id);
    // use findbyId to fetch item name and update name
    item.name = newName;
  } catch (err) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  let itemToRemove = findById(id);
  items.splice(itemToRemove, 1);
}

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};
