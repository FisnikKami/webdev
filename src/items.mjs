// mock data for a simple API
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item kolme' },
    { id: 4, name: 'Item neljä' },
];

const getItems = (req, res) => {
    res.json(items);
};

// Return only the object whose id matches the requested one, otherwise 404
const getItemById = (req, res) => {
    const itemFound = items.find(item => item.id == req.params.id);
    if (itemFound) {
        res.json(itemFound);
    } else {
        res.status(404).json({ error: 'not found' });
    }
};

const postItem = (req, res) => {
    console.log("post item request,", req.body);
    if (!req.body.name) {
        return res.status(400).json({ error: "item name missing" });
    }

    // TODO: add the posted item to the items array
    res.json({ message: 'item created' });
};

const deleteItem = (req, res) => {
    // TODO: implement delete item
    // Tip: array.findIndex()?
    res.json({ message: 'delete placeholder' });
};

const putItem = (req, res) => {
    // TODO: implement modify item
    res.json({ message: 'put placeholder' });
};

export { getItems, getItemById, postItem, deleteItem, putItem };
