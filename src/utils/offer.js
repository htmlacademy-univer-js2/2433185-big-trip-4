const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);
const deleteItem = (items, del) => items.filter((item) => item.id !== del.id);

export {updateItem, deleteItem};
