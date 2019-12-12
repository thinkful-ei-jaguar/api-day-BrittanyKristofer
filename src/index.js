import api from './api';
import store from './store';
import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  // api.getItems()
  //   .then(res => res.json())
  //   .then(res => console.log(res));

  // api.createItem('pears')
  //   .then(res => res.json())
  //   .then((newItem) => {
  //     return api.getItems();
  //   })
  //   .then(res => res.json())
  //   .then((items) => {
  //     console.log(items);
  //   });

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
