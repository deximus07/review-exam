function Developer(name, lang, school){
    this.name = name
    this.lang= lang
    this.school= school
}

Developer.prototype.showDeveloperDetails = function(){
    let details = []
    let detailDiv = document.createElement('div')
    let ulElement = document.createElement('ul')
    detailDiv.appendChild(ulElement)
    document.body.appendChild(detailDiv)
    details.push(this.name, this.lang, this.school)


    for(let detail of details){
        let liElement = document.createElement('li')
        ulElement.appendChild(liElement)
        liElement.innerText = detail
    }
}

let pythonDev = new Developer('Adrian', 'Python', 'Code Partners')
let javascriptDev = new Developer('Ana', 'Javascript', 'Code Partners')
let goDev = new Developer('Paul', 'Google', 'Code Partners')
let javaDev = new Developer('Jourdane', 'JAVA', 'Code Partners')

let developers = []
developers.push(pythonDev, javascriptDev, goDev, javaDev)

function displayDeveloperDetails(arr){
    for (let element of arr){
        element.showDeveloperDetails()
    }
}
displayDeveloperDetails(developers)

