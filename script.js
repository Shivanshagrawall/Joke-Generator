const jokeContainer=document.querySelector('.joke');
const Btn=document.querySelector('.Btn');

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke=async (e)=>{
    e.preventDefault();
    console.log('1');

    try {
    const data= await fetch(url);
    const joke= await data.json();

    console.log(joke);

    jokeContainer.innerHTML=`<p>${joke.joke}</p>`;

    } catch (error) {
        jokeContainer.innerHTML=`Please check Internet Connection`;
        console.log(error);
    }
}

Btn.addEventListener('click',getJoke);
window.onload=getJoke;
