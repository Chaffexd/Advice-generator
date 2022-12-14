const advice = document.getElementById("advice");
const adviceNum = document.getElementById("adviceNum");
const button = document.getElementById("getAdvice");

setInterval(async function(){
    const response = await fetch(`https://api.adviceslip.com/advice?t=` + Math.random(), {cache: 'no-cache'});
    if(response.ok) {
        
        const responseJson = await response.json();
        const data = responseJson.slip;
        console.log(data);

        const returnedAdvice = data.advice;
        console.log(returnedAdvice);
        const idAdvice = data.id;
    
        adviceNum.innerText = `ADVICE #${idAdvice}`;
        advice.innerText = `"${returnedAdvice}"`;
    } else {
        throw new Error("Error on the call")
    }
  }, 8000);

const getAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice?t=` + Math.random(), {cache: 'no-cache'});
    
    const responseJson = await response.json();
    const data = responseJson.slip;
    console.log(data);

    const returnedAdvice = data.advice;
    console.log(returnedAdvice);
    const idAdvice = data.id;

    adviceNum.innerText = `ADVICE #${idAdvice}`;
    advice.innerText = `"${returnedAdvice}"`;
}
button.addEventListener("click", () => {
    getAdvice();
});

