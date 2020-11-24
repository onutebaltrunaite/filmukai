const container = document.getElementById('container')
const filmPage = document.getElementById('filmPage')
const mTitle = document.getElementById('mTitle')
const mYear = document.getElementById('mYear')
const mRating = document.getElementById('mRating')
const mDescrip = document.getElementById('mDescrip')
const commentSec = document.getElementById('commentSec')
const cardImg = document.getElementById('cardImg')
const inputComment = document.getElementById('inputComment')
const inputName = document.getElementById('inputName')
const submitComment = document.getElementById('submitComment')
const goBack = document.getElementById('goBack')

goBack.addEventListener('click', goingBackToList)
submitComment.addEventListener('click', addComments)

let currentMovie = []

let films = [
    {
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "Parasite",
      year: "2019",
      rating: "8.6",
      id: "1",
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      comments: []
      
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "The Queen's Gambit ",
      year: "2020",
      rating: "8.8",
      id: "2",
      description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
      comments: [{
        name: "John",
        comment: "So boring, i fall asleep to it and hibernated through whole winter"
      }]
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "Joker ",
      year: "2019",
      rating: "8.5",
      id: "3",
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      comments: [
        {
          name: "Marry",
          comment: "Put on a happy face :)"
        },
        {
          name: "Batman",
          comment: "My parents was not impressed with this"
        },
      ]
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
      title: "The Godfather",
      year: "1972",
      rating: "9.2",
      id: "4",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      comments: []
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
      title: "Pulp Fiction",
      year: "1994",
      rating: "8.9",
      id: "5",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      comments: []
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "The Shining",
      year: "1980",
      rating: "8.4",
      id: "6",
      description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      comments: [{
        name: "Jane",
        comment: "Soundtrack is epic"
      }]
    },
  ]

// console.log(films)

showMovies()
function showMovies() {

    films.map(item => {

        let card = document.createElement('div')
        card.classList.add('cardStyle')
        card.setAttribute('id', item.id)
        card.addEventListener('click', showMovie)

        let img = document.createElement('img')
        img.style.margin = '10px'
        img.src = item.image
        img.style.pointerEvents = 'none'

        let title = document.createElement('div')
        title.innerText = item.title
        title.style.pointerEvents = 'none'

        let rating = document.createElement('div')
        rating.innerText = item.rating
        rating.style.pointerEvents = 'none'

        let year = document.createElement('div')
        year.innerText = item.year
        year.style.pointerEvents = 'none'

        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(rating)
        card.appendChild(year)

        container.appendChild(card)

    })
}



function showMovie(event) {

    container.style.display = 'none'
    filmPage.style.display = 'block'

    let chosenMovie = films.filter(item => item.id === event.target.id)
    
    
    currentMovie.push(chosenMovie)
    // console.log(currentMovie)

    cardImg.src = chosenMovie[0].image
    mTitle.innerText = chosenMovie[0].title
    mYear.innerText = chosenMovie[0].year
    mRating.innerText = chosenMovie[0].rating
    mDescrip.innerText = chosenMovie[0].description

    // chosenMovie[0].comments.map(item => {

    //   let name = document.createElement('div')
    //   name.classList.add('name')
    //   name.innerText = item.name

    //   let comment = document.createElement('div')
    //   comment.innerText = item.comment

    //   commentSec.appendChild(name)
    //   commentSec.appendChild(comment)

    // })
    showComments()
}

function showComments() {
  commentSec.innerHTML = ''
  currentMovie[0][0].comments.map((item, index) => {

    let commentCard = document.createElement('div')
    commentCard.classList.add('commentStyle')
    
    // console.log()
    

    let name = document.createElement('div')
    name.classList.add('name')
    name.innerText = item.name

    let comment = document.createElement('div')
    comment.innerText = item.comment

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'REMOVE'
    deleteBtn.style.margin = '15px'
    deleteBtn.style.backgroundColor = 'red'
    deleteBtn.addEventListener('click', removingComment)
    deleteBtn.setAttribute('id', index)


    commentCard.appendChild(name)
    commentCard.appendChild(comment)
    commentCard.appendChild(deleteBtn)

    commentSec.appendChild(commentCard)


  })
  inputName.value = ''
  inputComment.value = ''
}

function goingBackToList() {
  currentMovie = []
  filmPage.style.display = 'none'
  container.style.display = 'flex'
}

function addComments() {
  // let newComm = document.createElement('div')
  // newComm = inputComment.value
  // console.log(newComm)

  let myCommen = {
    name: inputName.value,
    comment: inputComment.value,
  }

  console.log(currentMovie)
  currentMovie[0][0].comments.push(myCommen)
  
  showComments()

}

function removingComment(event) {
  let commentIndex = event.target.id
  currentMovie[0][0].comments = currentMovie[0][0].comments.filter((item, index) => index != commentIndex)
  
  console.log(currentMovie[0][0].comments)
  showComments()
}