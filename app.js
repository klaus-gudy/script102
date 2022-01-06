const data = document.getElementById('data');
const button1 = document.getElementById('button1');

button1.addEventListener('click', generate);

function generate(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100', true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = this.responseText;
            console.log(response);
        }
    }

    xhr.send();

    e.preventDefault();
}