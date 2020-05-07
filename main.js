let dataSection = document.querySelector(".githubdata")

    function createImageElement(url) {
                return `<img src="${url}">`
    }

fetch('https://api.github.com/users/hkishawi')
    .then(function(response) {
        console.log("response")
        return response.json()
    })

    .then(function(response) {
        //data from json can be used as response
        const aboutMe = document.createElement("section")
        aboutMe.className = "about-me"
        aboutMe.innerText = ("About Me")
        dataSection.appendChild(aboutMe)

        const firstLi = document.createElement("div")
        firstLi.className = "name"
        firstLi.innerText = ("name: " + response.name)
        aboutMe.appendChild(firstLi)
        
        const  secLi = document.createElement("div")
        secLi.className = "location"
        secLi.innerText = ("located in: " + response.location)
        aboutMe.appendChild(secLi)

        const thirdLi = document.createElement("div")
        thirdLi.className = "email"
        thirdLi.innerText = ("email: " + response.blog)
        aboutMe.appendChild(thirdLi)

       const profilePic = document.createElement("div");
       profilePic.className = "profile-pic"
       profilePic.innerHTML = createImageElement(response.avatar_url)
       aboutMe.appendChild(profilePic);
       console.log("picture")
    })

    .then(function(header)
    // function createImageSection (response) {
    //     const avatar = new iamge 
    //     avatar.className = "avatar"
    //     avatar.src = response.avatar_urldataSection.appendChild(avatar)
    // }
    //^this is not working yet..

        // console.log(response)
        // const divEl = document.createElement('li')
        // divEl.className = "name"
        // divEl.innerText = response.name





    //     divEl.innerText = data.name
    //     dataSection.appendChild(divEl)
    //     return data.repos_url

    //     divEl.innerText = data.company
    // })

    // .then(function(company) {
    //     console.log("company")
    //     const divEl = document.createElement('li')
    //     divEl.innerText = data.company
    //     dataSection.appendChild(divEl)
    //     company.classList.add('company')
    // })
    // .then(reposUrl => fetch(reposUrl))
    // //this is same as .then(function(reposUrl)
    // //return fetch(reposUrl)
    // .then(response => response.json())
    // .then(function (reposData) {
    //     console.log(reposData)
    //     const repoList = document.createElement("ul")
    //     repoList.classList.add(
    //         ""
    //     )
    //     dataSelection.appendChild(repoList)
    //     for (let repo of reposData) {
    //         console.log(repo.full_name)
    //         const listItem = document.createElement('li')
    //         listItem.textContent = repo.full_name
    //         listItem.classList.add("")
    //         repoList.appendChild(listItem)
    //     }
    // })