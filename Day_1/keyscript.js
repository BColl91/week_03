     const keyCodeDisplay = document.getElementById('keyCodeDisplay');

     document.addEventListener('keydown', (event) => {

         const keyCode = event.keyCode;

         keyCodeDisplay.textContent = `Key Code: ${keyCode}`;
     });