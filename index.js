const generateBackground = document.querySelector('#generate-background');
const pictureDiv = document.querySelector('#picture');


const randNum = (num) => {
    return Math.floor((Math.random() * num));
}
const displayPicture = () => {
    axios.get('http://localhost:4000/api/background').then((res) => {
        console.log(res.data);
        let index = randNum(res.data.length);
        console.log(res.data[index].name)
        console.log(res.data[index].url)
        
    })
}

generateBackground.addEventListener('click', displayPicture);
