const header=document.createElement("div");
header.setAttribute("class","head");
header.innerHTML=`
<p class="title">Genrated Cat Api</p>
<img src="https://img.icons8.com/color-glass/96/000000/cat.png"/>
<div class="header">
<input class="search" placeholder="Search for tag">
<button onclick="findtag()" class="okbut">ok</button>
<button onclick="back()" class="okbut">Back</button>
</div>`;
document.body.append(header);

  async function getus() {   
  
  const data= await fetch("https://cataas.com/api/cats");
  const main= await data.json();
    getdata(main)
  }
    function getdata(main)
    {
  const container=document.createElement("div");
  container.setAttribute("class","container");
   main.forEach((el)=>{
    const card=document.createElement("div");
    card.setAttribute("class","card")
     let id=`${el.id}`
     const url=`https://cataas.com/cat/${id}`
    
    card.onclick = () => {
            let url = `https://cataas.com/cat/${id}`
            window.open(url, 'popUpWindow', 'height=500,width=800,left=100,top=100,resizable=yes');
        };
    const elements=`${el.tags}`;
    const abc=elements.split(",");
     const hg=document.createElement("div");
   
    // for(var i=0;i<abc.length;i++)
      // {
        // console.log(abc[i]);
      //   hg.innerHTML=`<p>${abc[i]}</p>`;
      //    container.append(hg);
      // }
         
  card.innerHTML=`  <p class="ids"><span>Id:</span> ${el.id}</p>
   <p class="time"><span>Created At:</span> ${new Date(el.created_at).toDateString()}</p>
  <p class="tags"><span>Tags:</span> ${el.tags}</p>
  `;
    container.append(card);
 });
   
   document.body.append(container);
 }
getus();

function back()
{
   document.querySelector(".page").remove();
    getus();
}

function findtag()
{
  const value=document.querySelector(".search").value;
  fetch("https://cataas.com/api/cats",
        {
        method:"GET"
        })
    .then((data) => {
    return data.json();
  })
  .then((users) => found(users));
   

function found(x)
{
   var temp=[];
  x.forEach((el)=>{ const elements=`${el.tags}`;
  const abc=elements.split(",");
                    
                   //console.log(abc);
  
           for(var i=0;i<abc.length;i++)
             {  
             
               if(abc[i]==value)
                 {
                temp.push(el);
                 }
                 
             }
     
       
     });
  if(temp.length!=0)
    { document.querySelector(".container").remove();
   getdata(temp);
    }
  else
    {
     alert("There is no cat found with this tag");
    }
   
   }
                
  }
  function back()
  {
    document.querySelector(".container").remove();
    getus();   
  }