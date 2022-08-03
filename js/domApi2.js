let gifsContainer = document.querySelector('.all-gif');
fetch(allFunctions.replaceUrl('Walter White'), (data) => renderGifs(data));
buttonSearch.addEventListener('click', () => {
  fetch(allFunctions.replaceUrl(input.value), (data) => renderGifs(data));
});

const renderGifs = (data) => {
  for (let i = 0; i < 10; i++) {
    gifsContainer.innerHTML += `
            <div class="gif">
                <img src="${data.data[i].images.downsized_medium.url}"
                    alt="">
            </div>
  `;
  }
};
