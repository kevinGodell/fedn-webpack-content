'use strict';

const filterByTerm = (inputArr, searchTerm) => {
  if (!searchTerm) throw new Error('searchTerm cannot be empty');

  if (!inputArr.length) throw new Error('inputArr cannot be empty');

  const regex = new RegExp(searchTerm, 'i');

  return inputArr.filter(arrayElement => {
    return arrayElement.url.match(regex);
  });
};

module.exports = filterByTerm;
