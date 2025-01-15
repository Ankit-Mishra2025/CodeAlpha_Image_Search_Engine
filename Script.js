const accessKey="xJ74LZs7-cwxWtbLiagFUiUQ8eKmqPU7eByb-MYDaWY";

let input=document.querySelector('.search-box input')
let Output=document.getElementById("search-data");
let ListResult=document.querySelector('.images')



let page=1;
let keyword=""


async function getResponse() {
    let url='https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=xJ74LZs7-cwxWtbLiagFUiUQ8eKmqPU7eByb-MYDaWY'

    let response=await fetch(url);
    let data=await response.json();

    let results=data.results;
    console.log(results);


    
 results.map((result)=>{

    let li=document.createElement('li') 
    li.classList.add("image");
    let html=`<img src="${result.urls.small}" alt="img" class="photo"> 
        <div class="details">
            <div class="user">
                <img src="camera.svg" alt="img">
                <span></span>
            </div>
            <div class="download">
               
                <span>Downlaod<img src="download.svg" alt="img"></span>
            </div>
        </div>`

li.innerHTML=html
ListResult.appendChild(li)


   })

}

Output.addEventListener("click", ()=>{
    
    page=2;
    getResponse();
  
})






