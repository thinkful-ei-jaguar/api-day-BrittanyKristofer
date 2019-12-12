
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Brittany';


const listApiFetch = (...args) => { // The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
    let error = null;
    fetch(...args)
        .then(res => {
            if (!res.ok) {
                error = { code: res.status } // define our error
            }
            return res.json(); // regardless if err or not, return res.json()
        })
        .then(data => {
            if (error) {
                error.message = data.message;
                return Promise.reject(error);
            }
            return data;
        })
}

// READ
function getItems() {
    return listApiFetch(BASE_URL + '/items');
}

// CREATE 
function createItem(name) {
    const newItem = JSON.stringify({
        name
    });
    return listApiFetch(`${BASE_URL}/items`, // we are posting a new item to thinkful api with our new item name 
        {
            'method': 'POST',
            'headers': new Headers({
                'Content-Type': 'application/json'
            }),
            'body': newItem
        });
}

//UPDATE
function updateItem(id, updateData) {
    const body = JSON.stringify(updateData);

    return listApiFetch(`${BASE_URL}/items/${id}`,
        {
            'method': 'PATCH',
            'headers': new Headers({
                'Content-Type': 'application/json'
            }),
            'body': body
        });
}

const deleteItem = id => {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
        'method': 'DELETE',
        'headers': new Headers({
            'Content-Type': 'application/json'
        })
    });
}

export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
}


