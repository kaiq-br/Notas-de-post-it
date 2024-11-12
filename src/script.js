const notes = [
    {   user:'kaique', 
        photoURL: 'https://photos.google.com/photo/AF1QipPpkrhNRQaoVfAPkIObHEs5hE5-L_e-FtEWf1HZ', 
        phrase:'O sucesso é a única opção.'},
    {   user:'outro', 
        photoURL:'https://i.pinimg.com/564x/ef/b9/d0/efb9d088e9f52c743492d01f9b99105f.jpg', 
        phrase:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '},
    {   user:'', 
        photoURL:'https://cdn-icons-png.flaticon.com/512/634/634741.png', 
        phrase:''}
]

const imgPost = document.querySelector("img");
const namePost = document.querySelector("h2");
const textPost = document.querySelector("p");

let index = 0;

updateNote();

function updateNote(){
    const { photoURL, user, phrase} = notes[index];
    imgPost.src = photoURL;
    namePost.innerText = user;
    textPost.innerText = phrase;
    index++;
    if (index === notes.length) {
        index = 0;
      }
      setTimeout(() => {updateNote(); }, 10000);  }