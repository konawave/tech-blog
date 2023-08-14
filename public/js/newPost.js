const newPost = document.querySelector('#newPostBtn')

const postHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/newPost', {
            method: 'POST',
            body: JSON.stringify({ postTitle, postDesc }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            const responseData = await response.json();
      if (response.status === 400) {
        const errorMessage = responseData.message;
      } else {
        console.log("nope!");
      }
    }
};

const modal = document.getElementById('#postModal');
// Function to close the modal
const closeModal = () => {
  modal.style.display = 'none';
};

// Get the close button inside the modal
const closeButton = document.querySelector('.close');
const closeBtn = document.querySelector('.close-button');

// Add event listener to close button in the modal
closeButton.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

// Add event listener to modal overlay to close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === closeButton) {
    closeModal();
  }
});

newPost.addEventListener('click', postHandler);