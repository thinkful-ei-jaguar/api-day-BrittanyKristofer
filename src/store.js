const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

// merges the attributes of the received newData object with the item in the store
const findAndUpdate = function (id, newData) {
  const item = this.items.find(item => item.id === id);
  Object.assign(item, newData);
}

const setError = (errMessage) => {
  this.error = errMessage;
}

export default {
  items,
  hideCheckeditems,
  error,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};