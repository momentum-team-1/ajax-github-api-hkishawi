    let dataSection = document.querySelector("#githubdata")

    fetch('https://api.github.com/users/hkishawi')
    //promise object represents eventual completion/failure of asynchornous operation and its resulting value. fetch is getting a promise
    .then(function(response) {
        //^we are accessing data from the response 
        console.log("response")
        return response.json()
    })
    .then(function(data) {
        //data from json can be used
        console.log(data)
        const divEl = document.createElement('li')
        divEl.innerText = data.name
        dataSection.appendChild(divEl)
        return data.repos_url
    })
    .then(reposUrl => fetch(reposUrl))
    //this is same as .then(function(reposUrl)
    //return fetch(reposUrl)
    .then(response => response.json())
    .then(function (reposData) {
        console.log(reposData)
        const repoList = document.createElement("ul")
        repoList.classList.add(
            ""
        )
        dataSelection.appendChild(repoList)
        for (let repo of reposData) {
            console.log(repo.full_name)
            const listItem = document.createElement('li')
            listItem.textContent = repo.full_name
            listItem.classList.add("")
            repoList.appendChild(listItem)
        }
    })