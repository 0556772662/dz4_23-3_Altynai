
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "peoples.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load',() => {
        const peoples = JSON.parse(request.response)
        document.querySelector('.one').innerHTML = [peoples[0].name,peoples[0].age].join('')
        document.querySelector('.two').innerHTML = [peoples[1].name,peoples[1].age].join('')
        document.querySelector('.three').innerHTML = [peoples[2].name,peoples[2].age].join('')
    })
})

