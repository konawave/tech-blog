const loginHandler = async (event) => {
    event.preventDefault();
    console.log('loginHandler reached');
    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

        if (email && password) {
            const response = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to log in.');
            }
        }
    };

    const signupHandler = async (event) => {
        event.preventDefault();
    
        const email = document.querySelector('#emailSignup').value.trim();
        const password = document.querySelector('#passwordSignup').value.trim();
    
        if (email && password) {
            const response = await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                const responseData = await response.json();
          if (response.status === 400) {
            const errorMessage = responseData.message;
            displayPasswordError(errorMessage); // Display the password length error message in the modal
          } else {
            displayPasswordError('Password too short. Must be 8 characters or longer');
          }
        }
    }};

document
    .querySelector('#login')
    .addEventListener('submit', loginHandler);

document
    .querySelector('#signupBtn')
    .addEventListener('submit', signupHandler);



