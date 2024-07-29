const containere1 = document.querySelector(".container");
 

const careers = ["CSE student","PROGRAMMER", "HACKER", "ROBTICIAN", "HARDWORKING MAN", "DETERMINED"];

let careerindex = 0;
let chracterindex = 0;
updatetext();
function updatetext()
{
    chracterindex++;
    containere1.innerHTML = ` <h1>I am ${careers[careerindex].slice(0.1) === "I" ? "an" : "a"} ${careers[careerindex].slice(0, chracterindex)}</h1>`;
   
    if (chracterindex==careers[careerindex].length)
    {
        careerindex++;
        chracterindex = 0;
    }
        if (careerindex == careers.length)
    {
        careerindex = 0;
    }
    setTimeout(updatetext, 400);
 }
