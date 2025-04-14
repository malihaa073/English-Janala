console.log("connected");
document.getElementById('get-Started-btn').addEventListener('click',(e) =>
{

   e.preventDefault(); // Prevent default behavior
   const nameInput = document.getElementById("nameInput");
   const password = document.getElementById("pass");

   const names = nameInput.value.trim();
   const pass =password.value;
   if( names && pass == '123456')
   {
    console.log("Right");
    alert("Okay");
    document.getElementById("login").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("All").style.display = "block";
    document.getElementById("footer").style.display ="flex";
    document.getElementById("faq").style.display = "block";
    nameInput.value = "";
    password.value = "";
   }else if(names.length <1 )
   {
    alert("Fill the username");
   }
    else {
    console.log("Wrong input");
    alert("Invalid Password!");
}
})

const showLoader =()=>{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("insideLessonContainer").classList.add("hidden")
}
const hideLoader =()=>{
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("insideLessonContainer").classList.remove("hidden")
}
function smoothScrollTo(sectionId, buttonId) {
    removeActiveBtn(); // Remove active class from other buttons

    const section = document.getElementById(sectionId);
    const button = document.getElementById(buttonId);

    // Ensure section is visible before scrolling
    section.style.display = "block";

    setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // Delay to ensure visibility

    // Add active class to clicked button
    button.classList.add("active");
}
function activeLearn(){
    smoothScrollTo("All", "btn-learn");
  // removeActiveBtn();
  //  document.getElementById("All").style.display = "block";
   // document.getElementById("faq").style.display = "none";
  //  document.getElementById('btn-learn').classList.add("active");
    // Smooth scroll to FAQ section
 //   document.getElementById("btn-learn").scrollIntoView({ behavior: "smooth", block: "start" });
  //  document.getElementById("learn").scrollIntoView({ behavior: "smooth", block: "start" });
}
function activeFaq(){
    smoothScrollTo("faq", "btn-faq");

  //  removeActiveBtn(); // Remove active class from other buttons

  //  const faqSection = document.getElementById("faq");
   // const faqButton = document.getElementById("btn-faq");

    // Make sure FAQ section is visible before scrolling
  //  faqSection.style.display = "block";
   
  //  setTimeout(() => {
   //     faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
 //  }, 100); // Slight delay ensures visibility before scrolling
  //  document.getElementById("All").style.display = "none";
    // Add active class to button
  //  faqButton.classList.add("active");
}
function activeLogout()
{
    removeActiveBtn();
    document.getElementById("faq").style.display = "none";
    document.getElementById("All").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("footer").style.display = "flex";
}
function removeActiveBtn(){
    const activeClass= document.getElementsByClassName("active")
    for(let active of activeClass)
    {
      active.classList.remove("active")
    }
    console.log(activeClass);

  }
const loadLearn = () => {
    console.log("Loading");
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => displayLearn(data.data));
};

const loadInsideLearn = (id) => {
    console.log(`Fetching data for level: ${id}`);
    document.getElementById("noLessonMessage").style.display = "none";
    showLoader();
    document.getElementById("insideLessonContainer").style.display = "grid"; 
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            removeActiveBtn();
            const ClickActive =document.getElementById(`btn-${id}`);
            ClickActive.classList.add("active");
            console.log(ClickActive);
            
            displayInsideLearn(data.data);

              // Apply smooth scrolling to the lesson container
              document.getElementById("insideLessonContainer").scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        });
};


const loadVideoDetails =(showId) => {
    console.log(showId);
    const url = `https://openapi.programming-hero.com/api/word/${showId}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => 
    {
      displayShowDetails(data.data);
      
    })
  };
  const displayShowDetails =(id) => {
    console.log(id);
    document.getElementById("videoDetails").showModal();
    const detailsContainer =document.getElementById("details-container");
   detailsContainer.innerHTML=`
   <div class="card box-border border-2 border-[#edf7ff] rounded-xl bg-white object-cover shadow-sm">
    <div class="card-body">
      <h2 class="card-title text-black font-poppins text-4xl font-semibold leading-[40px] tracking-normal text-left pb-5">${id.word} (${id.pronunciation})</h2>
      <p class="text-black font-poppins text-2xl font-semibold leading-[40px] tracking-normal text-left pb-2">Meaning</p>
      <p class=" pb-3 text-black font-[Hind-Siliguri] text-xl font-medium leading-[40px] tracking-normal text-left">${id.meaning ? id.meaning : "No meaning found"}</p>

      <p class="text-black font-poppins text-2xl font-semibold leading-[40px] tracking-normal text-left">Example</p>
      <p class="text-black font-[Poppins] text-xl font-normal leading-[40px] tracking-normal text-left pt-2">${id.sentence}</p>
      <p class="text-black font-[Hind-Siliguri] text-xl font-medium leading-[40px] tracking-normal text-left">সমার্থক শব্দ গুলো</p>
      <!-- Synonyms Cards -->
<div class="flex flex-wrap gap-4">
    ${id.synonyms.length > 0 
        ? id.synonyms.map(synonym => `
            <p class="box-border border border-[#D7E4EF] rounded-[6px] bg-[#EDF7FF] p-[6px_20px] text-center text-[#000]">
                ${synonym}
            </p>
        `).join('') 
        : ``
    }
</div>
      <div class="card-actions justify-end">
     
      </div>
    </div>
  </div>`
  };

const displayLearn = (data) => {
    console.log(data);
    const container = document.getElementById("learn");
    container.innerHTML = ""; // Clear existing content

    for (let level of data) {
        const learnDiv = document.createElement("div");
        learnDiv.innerHTML = `
        <div class="relative flex flex-row justify-center items-center box-border border border-[#422AD5] rounded-md hover:bg-[#422AD5]  group">
           
             
              
            <!-- Wrap Button to Apply Full Hover Effect -->
            <button id="btn-${level.level_no}" onclick="loadInsideLearn('${level.level_no}')" class="p-3 flex flex-row gap-2 text-[#422AD5] group-hover:text-white w-full text-center">
               <img class="w-6 h-6 " src="https://img.icons8.com/?size=40&id=6eFvVwcFeLx0&format=gif" alt="" srcset="" >  Lesson-${level.level_no}
            </button>
        </div>
        `;
        container.append(learnDiv);
    }
};

function displayInsideLearn(dataArray) {
    console.log("Displaying words:", dataArray); // Debugging

    const secId = document.getElementById("insideLessonContainer");
    secId.innerHTML = ""; // Clear previous content

    if (!dataArray || dataArray.length === 0) {
     
        secId.innerHTML = `
         <div class="flex flex-col pt-1  pb-10 mt-28 mb-36 gap-2 mx-auto  col-span-full justify-center items-center">
        <img class="" src="./assets/alert-error.png" alt="" srcset="">
        <p class="text-[13.38px] font-normal leading-[24px] tracking-[0%] text-center text-[rgb(121,113,107)] font-[Hind-Siliguri]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <p class="text-[34.31px] font-medium leading-[40px] tracking-[0%] text-center text-[rgb(41,37,36)] font-[Hind-Siliguri]">নেক্সট Lesson এ যান</p>
     </div>
        `;
        hideLoader();
        return;
        
    }

    dataArray.forEach((data) => {
        const divVideo = document.createElement("div");
        divVideo.innerHTML = `
          <div class="rounded-[24px] h-[372px] bg-white p-4 shadow-md m-2">
              <div class="mx-auto flex flex-col justify-center items-center py-16">
                  <p class="text-[25px] font-bold">${data.word}</p>
                  <p class="text-[20px] font-bold leading-[24px]  text-center text-black font-[Inter]">Meaning / Pronunciation</p>
                  <p class="text-[14px] font-semibold leading-[52px] tracking-[0%] text-left text-[#18181B] font-[Hind Siliguri]">"${data.meaning || 'অর্থ নেই '} / ${data.pronunciation || 'অর্থ নেই '}"</p>
              </div>
              <div class="flex flex-row justify-between px-3">
                 <button onclick="loadVideoDetails('${data.id}')" class="rounded-lg bg-[#1A91FF1A] p-4 hover:bg-[#d9d7e7] hover:text-white"> <img src="./assets/fi-sr-info.png" alt="Info"></button> 
                  <button  class="rounded-lg bg-[#1A91FF1A] p-4 hover:bg-[#d9d7e7] hover:text-white"><img src="./assets/fi-sr-volume.png" alt="Volume"></button>
              </div>
          </div>
        `;
        secId.append(divVideo);
        hideLoader();
    });
}


// Load initial data
loadLearn();
