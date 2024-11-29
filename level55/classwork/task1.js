const form = document.getElementById('myForm');
        
form.addEventListener('submit', function(event) {
    event.preventDefault();
            
    const textValue = form.elements['textValue'].value;
            
    console.log('Input Value:', textValue);
    alert('Input Value: ' + textValue);
});