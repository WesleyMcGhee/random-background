const generateBackground = document.querySelector('#generate-background');
const copyBackground = document.querySelector('#copy-button');      
const pictureDiv = document.querySelector('#picture');
const picName = document.querySelector('h1');
let imgUrl = '';

const randNum = (num) => {
    return Math.floor((Math.random() * num));
}


const displayPicture = () => {
    axios.get('http://localhost:4000/api/background').then((res) => {
        console.log(res.data);
        if(document.querySelector('img')){
            document.querySelector('img').remove();
        }
        let index = randNum(res.data.length);
        let newImg = document.createElement('img');
        imgUrl = res.data[index].url;  
        picName.textContent = res.data[index].name;
        pictureDiv.appendChild(newImg).src = res.data[index].url;
        console.log(res.data[index].name)
        console.log(res.data[index].url)
    })
};


const copyUrl = () => {
    navigator.clipboard.writeText(imgUrl).then(() => {
        let notification = document.getElementById('notification');
        // notification.innerHTML = 'URL Copied Successfully!';
        notification.style.visibility = 'visible';
        // document.querySelector('#button-container').appendChild(notification)
        setTimeout(() => {
            notification.style.visibility = 'hidden';
        }, 2000);
    });
    console.log(imgUrl);
};

generateBackground.addEventListener('click', displayPicture);
copyBackground.addEventListener('click', copyUrl);
