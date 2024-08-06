
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    let p=document.querySelector("#fact");
    p.innerText=fact;
    console.log(fact);

    console.log("button was clicked");
})
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch (error) {
        // console.log("Error:", error);
        return "no fact found";
    }
}