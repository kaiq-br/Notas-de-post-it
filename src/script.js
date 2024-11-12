const notes = [
    {   user:'- Kaique', 
        photoURL: 'https://i.pinimg.com/736x/49/70/9e/49709ec0e7c8b8f526ea5a6d9104a44e.jpg', 
        phrase:'O sucesso é a única opção.'},
    {   user:'- Outro', 
        photoURL:'https://i.pinimg.com/564x/cb/c0/49/cbc0494a8fe08414294c01fd0faea49d.jpg', 
        phrase:'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '},
    {   user:'- Anônimo', 
        photoURL:'https://i.pinimg.com/564x/a8/da/b0/a8dab068448052fa6f2738b338c53289.jpg', 
        phrase:'Anônimo Anônimo Anônimo Anônimo Anônimo Anônimo Anônimo'}
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