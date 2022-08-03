
const characters = 'https://breakingbadapi.com/api/characters';
const quotes = 'https://breakingbadapi.com/api/quotes';
const input = document.querySelector("input")
const buttonSearch = document.querySelector("button")
let loader = document.querySelector(".loader");
let h5_3 = document.createElement('h5')
let allQuotes = document.querySelector(".all-quotes")
let charactersContainer = document.querySelector(".characters-container");


window.addEventListener('load', function(){
    loader.style.display = 'none';
})

buttonSearch.addEventListener('click' , ()=>{
    if(input.value){
        charactersContainer.innerHTML= "";
        fetch(characters, (data)=>{
            characterDetails(allFunctions.search(data,input.value , "name")[0]); 
            fetch(quotes, (data)=>{
                someQuotes(allFunctions.search(data,input.value , "author") ); 
            })
        })
    }
}
);
for(let i = 0 ; i < 6 ; i++){
    fetch(characters, (data)=>{
        characterDetails(data[i]); 
    })
}



function characterDetails (character ,){
    let div1 = document.createElement('div')
let img = document.createElement('img')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let h3 = document.createElement('h3')
let h5_1 = document.createElement('h5')
let h5_2 = document.createElement('h5')



    div1.classList.add('character');
    img.classList.add('character-img');
    div2.classList.add('overlay');
    div3.classList.add('about');


    h3.innerText = character.name;
    div3.appendChild(h3)

    h5_1.innerText = character.portrayed;
    div3.appendChild(h5_1)

    
    h5_2.innerText = character.occupation[0];
    div3.appendChild(h5_2)
    
    div2.appendChild(div3)
    
    img.src = character.img;
 
    div1.appendChild(img)
    div1.appendChild(div2)
    charactersContainer.appendChild(div1)
}

function someQuotes(quotes){
    h5_3.innerText = quotes[0].quote;
    div3.appendChild(h5_3)
    allQuotes.innerHTML =``;
    for(let i = 0 ; i < 4 ; i++ ){
        let divQuotes = document.createElement('quotes')
        let p = document.createElement('p')
        divQuotes.classList.add("quotes");
        p.innerText =quotes[i].quote
        divQuotes.appendChild(p);
        allQuotes.appendChild(divQuotes)

    }
}
