// var component = require('./component');

// document.body.appendChild(component());

import sortBy from 'lodash/sortBy';
import {users} from './users';
import {User} from './User';
import './user.scss';

// sortBy(users, 'name')	
//     .map(user => {
//         return new User(user.name, user.age);
//     })
//     .forEach(user => {
//         console.log(user.display);
//     });


var sortedUsers = sortBy(users, 'name')
  .map(function(user) {
      return new User(user.name, user.age);
  });
    
var myDiv = document.createElement("div");
myDiv.className = "container";
document.body.appendChild(myDiv);
document.querySelector('.container').innerHTML = buildHTML();

function buildHTML() {
  var html = '';
  sortedUsers.forEach(user => {
      html += `<p class="user">${user.display}</p>`;
  });
  html += `<div class="test-link"><a href="https://css-tricks.com/snippets/sass/sass-things-links/">Test link<a/></div>`;
  return html;
}