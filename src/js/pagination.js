// npm install paginationjs
// import $ from 'jquery';
// import Pagination from 'paginationjs';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  restoreData,
  TASKS_KEY,
} from './localStorage';

const arrItem = infoItemLocalStorage(TASKS_KEY) || [];

console.log(arrItem);

$('#pagination-container').pagination({
  //   dataSource: arrItem,
  dataSource: [1, 2, 3, 4, 5],
  pageSize: 5,
  callback: function (data, pagination) {
    var html = '';
    for (var i = 0; i < data.length; i++) {
      html += '<p>' + data[i] + '</p>';
    }
    // template method of yourself
    // var html = template(data);
    $('#data-container').html(html);
  },
});
