import item from "./item.js";

const items = [];
// 1, 2, 3, 4

let hideCheckedItems = false;

function findById(id) {
  // use find method to find where id matches the generated cuid
  store.items.find((id) => id === cuid());
  return name; // specific item from the store where condition is met
}

function addItem(name) {
  try {
    // vallidate the item name
    validateName(name);
    // create the item
    create(name);
    //push created item to this.items
    this.items.push(create(name));
  } catch (err) {
    //error
    console.log(`Cannot add item: ${error.message}.`);
  }
}

function findAndToggleChecked(id) {
  // fetch item using find method
  this.findById(id).checked = !this.findById(id).checked;
  //toggle checked attribute of item with this item
}

function findAndUpdateName(id, newName) {
  try {
    // validate name
    validateName(name);
    // use findbyId to fetch item name and update name
  } catch (err) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  //find item by id
  //remove it from this.items
}

export default {
  items,
  hideCheckedItems,
};
