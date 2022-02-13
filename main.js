// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName('like-glyph')
for (const heart of hearts) {
  heart.addEventListener('click', () => {
  mimicServerCall()
  .then(data => console.log(data))
  .catch(error => {
    const h2Modal = document.querySelector('.hidden');
    h2Modal.classList.remove('hidden');
    const p = document.querySelector('#modal-message')
    p.textContent = error;
    setTimeout(() => h2Modal.classList.add('hidden'), 300);
    heart.textContent = FULL_HEART;
    heart.classList.add('activated-heart');
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
