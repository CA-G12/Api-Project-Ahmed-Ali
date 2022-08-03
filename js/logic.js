const characters = 'https://breakingbadapi.com/api/characters';
const quotes = 'https://breakingbadapi.com/api/quotes';

//! Fetch Api Data
const fetch = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    let data = '';
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.open('GET', url);
  xhr.send();
  return data;
};

//! Search Functions
const allFunctions = (() => {
  return {
    search: (data, input, key) => {
      return data.filter((c) => c[key] === input);
    },

    replaceUrl: (str) => {
      const editedStr = str.replaceAll(' ', '+');
      return `https://api.giphy.com/v1/gifs/search?api_key=Rs4NNXOVGGQuEU75DPtNdsBjCD0P65hE&q=${editedStr}+&limit=10&offset=0&rating=g&lang=en`;
    },
  };
})();

// if (typeof module !== 'undefined') {
//   module.exports = allFunctions;
// }
