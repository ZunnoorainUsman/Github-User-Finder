let button = document.querySelector(".btn");

async function fetchData() {
    let val = document.getElementById("name").value;
    let url = `https://api.github.com/users/${val}`
    const ans = await fetch(url);
    return await ans.json();
}
let r = document.querySelector(".data");

button.addEventListener("click", async () => {
    try {
        let value = await fetchData();
        let data = document.querySelector(".main");
        let div4 = document.createElement("img");
        div4.className = "data";
        div4.src = value.avatar_url;
        data.appendChild(div4);
        let div = document.createElement("div");
        div.className = "data";
        div.textContent = `Name: ${value.name}`
        data.appendChild(div);
        let div2 = document.createElement("div");
        div2.className = "data";
        div2.textContent = `Followers: ${value.followers}`;
        data.appendChild(div2);
        let div3 = document.createElement("div");
        div3.className = "data";
        div3.textContent = `PublicRepos: ${value.public_repos}`;
        data.appendChild(div3);
        let div5 = document.createElement("div");
        div5.className = "data";
        div5.textContent = `following: ${value.following}`;
        data.appendChild(div5);
        let val = document.getElementById("name");
        val.value = ""
        
    } catch (error) {
        document.querySelector(".main").innerHTML="Not found"
    }
})


let val = document.getElementById("name");
val.addEventListener("keydown", async (inp) => {
    if (inp.key == "Enter") {
        let value = await fetchData();
        let data = document.querySelector(".main");
        let div4 = document.createElement("img");
        div4.className = "data";
        div4.src = value.avatar_url;
        data.appendChild(div4);
        let div = document.createElement("div");
        div.className = "data";
        div.textContent = `Name: ${value.name}`
        data.appendChild(div);
        let div2 = document.createElement("div");
        div2.className = "data";
        div2.textContent = `Followers: ${value.followers}`;
        data.appendChild(div2);
        let div3 = document.createElement("div");
        div3.className = "data";
        div3.textContent = `PublicRepos: ${value.public_repos}`;
        data.appendChild(div3);
        let div5 = document.createElement("div");
        div5.className = "data";
        div5.textContent = `following: ${value.following}`;
        data.appendChild(div5);
        let val = document.getElementById("name");
        val.value = ""
    }
})