const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const globe = document.querySelector('.globe')
const square = document.querySelector('.square ion-icon')
const h1 = document.querySelector('h1')
const p = document.querySelector('.desc p')

const country = [
    "Indonesia", "Japan", "Brazil", "Russia", "Egypt"
]

const desc = [
    "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans.", 
    "The capital of Japan and its largest city is Tokyo; the Greater Tokyo Area is the largest metropolitan area in the world, with more than 37 million inhabitants.", 
    "Brazil, officially the Federative Republic of Brazil, is the largest and easternmost country in South America and Latin America.",
    "Russia is a highly urbanised country, with 16 of its population centres having more than 1 million inhabitants. Its capital and largest city is Moscow.",
    "Egypt is a country spanning the northeast corner of Africa and the Sinai Peninsula in the southwest corner of Asia."
]

const globeTransition = ()=> {
    globe.animate([
        { scale: 1 },
        { scale: 1.5 }
      ], {
        duration: 500,
        iterations: 1
    });
}

prevBtn.onclick = ()=> {
    globeTransition()

    if(h1.innerHTML === country[4]){
        h1.innerHTML = country[3]
        p.innerHTML = desc[3]
        
        globe.style.backgroundPosition = '65% 150px'
        nextBtn.disabled = false
    } else if(h1.innerHTML === country[3]){
        h1.innerHTML = country[2]
        p.innerHTML = desc[2]

        globe.style.backgroundPosition = '17% -20px'
    } else if(h1.innerHTML === country[2]){
        h1.innerHTML = country[1]
        p.innerHTML = desc[1]

        globe.style.backgroundPosition = '107% 110px'
    } else {
        h1.innerHTML = country[0]
        p.innerHTML = desc[0]

        globe.style.backgroundPosition = '96% 0'
        prevBtn.disabled = true
    }
}
nextBtn.onclick = ()=> {
    globeTransition()

    if(h1.innerHTML === country[0]){
        h1.innerHTML = country[1]
        p.innerHTML = desc[1]
        
        globe.style.backgroundPosition = '107% 110px'
        prevBtn.disabled = false
    } else if(h1.innerHTML === country[1]){
        h1.innerHTML = country[2]
        p.innerHTML = desc[2]

        globe.style.backgroundPosition = '17% -20px'
    } else if(h1.innerHTML === country[2]){
        h1.innerHTML = country[3]
        p.innerHTML = desc[3]

        globe.style.backgroundPosition = '65% 150px'
    } else {
        h1.innerHTML = country[4]
        p.innerHTML = desc[4]

        globe.style.backgroundPosition = '55% 60px'
        nextBtn.disabled = true
    }
}