// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data)
        response.data.articles.javascript.forEach(article => createCard(article));
        response.data.articles.bootstrap.forEach(article => createCard(article));
        response.data.articles.jquery.forEach(article => createCard(article));
        response.data.articles.node.forEach(article => createCard(article));
        response.data.articles.technology.forEach(article => createCard(article));
    })

    .catch(error => {
        console.log('Network request was unsuccessful')
        console.log(error)
    })


function createCard(obj) {
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let iContainer = document.createElement('div')
    let aImg = document.createElement('img')
    let aName = document.createElement('span')
    
    card.classList.add('card')
    headline.classList.add('headline')
    headline.textContent = obj.headline
    author.classList.add('author')
    iContainer.classList.add('img-container')
    aImg.src = obj.authorPhoto
    aName.textContent = obj.authorName
    
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(iContainer)
    author.appendChild(aName)
    iContainer.appendChild(aImg)

    let cards = document.querySelector('.cards-container')
    cards.appendChild(card)

    return card
}