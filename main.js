const countries_data = [
    {
        name: "Afghanistan",
        capital: "Kabul",
        languages: ["Pashto", "Uzbek", "Turkmen"],
        population: 40218234,
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        region: "Asia",
        area: 652230,
    },
    {
        name: "Åland Islands",
        capital: "Mariehamn",
        languages: ["Swedish"],
        population: 28875,
        flag: "https://flagcdn.com/ax.svg",
        region: "Europe",
        area: 1580,
    },
    {
        name: "Albania",
        capital: "Tirana",
        languages: ["Albanian"],
        population: 2837743,
        flag: "https://flagcdn.com/al.svg",
        region: "Europe",
        area: 28748,
    },
    {
        name: "Algeria",
        capital: "Algiers",
        languages: ["Arabic"],
        population: 43851043,
        flag: "https://flagcdn.com/dz.svg",
        region: "Africa",
        area: 2381741,
    },
    {
        name: "American Samoa",
        capital: "Pago Pago",
        languages: ["English", "Samoan"],
        population: 55197,
        flag: "https://flagcdn.com/as.svg",
        region: "Oceania",
        area: 199,
    },
    {
        name: "Andorra",
        capital: "Andorra la Vella",
        languages: ["Catalan"],
        population: 77265,
        flag: "https://flagcdn.com/ad.svg",
        region: "Europe",
        area: 468,
    },
    {
        name: "Angola",
        capital: "Luanda",
        languages: ["Portuguese"],
        population: 32866268,
        flag: "https://flagcdn.com/ao.svg",
        region: "Africa",
        area: 1246700,
    },
    {
        name: "Anguilla",
        capital: "The Valley",
        languages: ["English"],
        population: 13452,
        flag: "https://flagcdn.com/ai.svg",
        region: "Americas",
        area: 91,
    },
    {
        name: "Antarctica",
        languages: ["English", "Russian"],
        population: 1000,
        flag: "https://flagcdn.com/aq.svg",
        region: "Polar",
        area: 14000000,
    },
    {
        name: "Antigua and Barbuda",
        capital: "Saint John's",
        languages: ["English"],
        population: 97928,
        flag: "https://flagcdn.com/ag.svg",
        region: "Americas",
        area: 442,
    },
];

const container = document.querySelector(".container")
const input = document.querySelector("#id")
const button = document.querySelector(".btn")
const main = document.querySelector(".main")
const static = document.querySelector(".static")
static.classList.add("reverseSort")

countries_data.map(item => {
    const title = document.createElement("h1")
    title.textContent = `${item.name} -> ${item.population}`
    
    main.appendChild(title)
})

button.addEventListener("click",() => {
    main.textContent = ""
    console.log("salom")
    const newArr = countries_data.filter(item => {
       return item.name.toLowerCase().includes(input.value.toLowerCase().trim())
    })

if(newArr.length ==0){
    const text = document.createElement("p")
    text.style.textAlign = "center"
    text.style.paddingBlock = "34px"
    text.textContent = "There are no results"
    main.appendChild(text)
} else {
    newArr.map(item => {
        const title = document.createElement("h1")
        title.textContent = `${item.name} => ${item.population}`  
        main.appendChild(title)
      })

    static.addEventListener("click",() => {
        main.textContent = ""
        const sortdata =  newArr.sort((a,b) => b.population - a.population)
        sortdata.map(item => {
        const title = document.createElement("h1")
        title.textContent = `${item.name} => ${item.population}` 
        main.appendChild(title)
        })
     })    
  } 
})

static.addEventListener("click",() => {
    main.textContent = ""
    const copyArr = countries_data
    const sortdata =  copyArr.sort((a,b) => b.population - a.population)
    sortdata.map(item => {
        const title = document.createElement("h1")
        title.textContent = `${item.name} => ${item.population}`
        main.appendChild(title)
  })
})

container.appendChild(main)