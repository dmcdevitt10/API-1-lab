const getResButton = document.querySelector('button')
const body = document.querySelector('body')

function getResidents(){
    axios.get("https://swapi.dev/api/planets/2").then((result) => {
            result.data.residents.forEach((resident) => {
                axios.get(resident).then((result) => {
                    let newRes = document.createElement('h2')
                    newRes.innerHTML = result.data.name
                    body.appendChild(newRes)
                })
            })
    })
        
}
    

getResButton.addEventListener('click', getResidents)