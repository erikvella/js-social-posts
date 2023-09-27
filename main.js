// 1 Creare un array contenente tutti i post da stampare

// 2 creare un ciclo per generarli autonomamente

// 3 stampo in pagina

// prendo le mie constanti/variabili

const feed = document.querySelector('#container') ;
let likedPosts = [2 , 3];
const likeBtn = document.querySelectorAll('.js-like-button');
let likeCounters = document.querySelectorAll('.js-likes-counter');


// array con tutti i post


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author":
        {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": 
        {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": 
        {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": 
        {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": 
        {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



// ciclo for each

for(let post of posts){
  
    console.log(posts);

  
  container.innerHTML += ` <div class="post">
  <div class="post__header">
      <div class="post-meta">                    
          <div class="post-meta__icon">
              <img class="profile-pic" src=${post.author.image} alt="Phil Mangione">                    
          </div>
          <div class="post-meta__data">
              <div class="post-meta__author">${post.author.name}</div>
              <div class="post-meta__time">${post.created}</div>
          </div>                    
      </div>
  </div>
  <div class="post__text">${post.content}</div>
  <div class="post__image">
      <img src=${post.media} alt="">
  </div>
  <div class="post__footer">
      <div class="likes js-likes">
          <div class="likes__cta">
              <a class="like-button  js-like-button" href="#" data-postid=${post.id}>
                  <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                  <span class="like-button__label">Mi Piace</span>
              </a>
          </div>
          <div class="likes__counter">
              Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
          </div>
      </div> 
  </div>            
</div>`
}

// Rendo dinamico il tasto dei Likes 

function isPostLiked(id){
    // se l'id è incluso nell'array dei post che mi piacciono, restutuisce true altrimenti false
    return likedPosts.includes(id);
}

// faccio un ciclo for each dei bottoni 

likeBtn.forEach((btn , index) => {
// do una proprietà custom ai bottoni per identificarli 
    btn._id = post[index].id;
// salvo l'indice dell'array nel bottone
   btn._index = index;
// do il listener di eventi ai bottoni
   btn.addEventListener('click' , handleLikeBtn);
    
});




// funzione per regolare i like con rispettivo counter

function handleLikeBtn(event){
//   neutralizzo la funzionalità del link (tag a) così non ricarica la pagina
event.preventDefault();
// metto/tolgo la classe .like-button--like 
this.classList.toggle('like-button--like');
// uso find() 
const postSelected = posts.find(post => post.id === this._id);
// se l'id del bottone è incluso nell'array dei post che mi piacciono devo:
// - leggere i numeri di likes e decrementarli
// - togliere l'id dall'elenco likedPosts
if(likedPosts.includes(this._id)){
  // sovrascrivo likedPosts con un filter escludendo l'elemento che ha lo stesso id
    likedPosts.filter(likesId => likesId !== this._id);
    postSelected.likes--;
}else{
    postSelected.likes++;
    likedPosts.push(this._id);
}

// stampo il conteggio dei likes aggiornati

likeCounters[this.index].innerText = postSelected.likes;
}