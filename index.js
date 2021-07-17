const generateBackground = document.querySelector('#generate-background');
const pictureDiv = document.querySelector('#picture');
const picName = document.querySelector('h1');

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
        picName.textContent = res.data[index].name;
        pictureDiv.appendChild(newImg).src = res.data[index].url;
        console.log(res.data[index].name)
        console.log(res.data[index].url)
        
    })
}

generateBackground.addEventListener('click', displayPicture);
