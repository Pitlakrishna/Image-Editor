const fileInput = document.querySelector(".file-input"),
previewImg= document.querySelector(".preview-img img");
filterOptions=document.querySelectorAll(".filter button");
filterName=document.querySelector(".filter-info .name");
filterSlider=document.querySelector(".slider input");
rotateOptions=document.querySelectorAll(".rotate button");
filterValue=document.querySelector(".filter-info .value");
resetImgBtn=document.querySelector(".reset-filters");
chooseImgBtn= document.querySelector(".choose-img");
saveImgBtn=document.querySelector(".save-img");

let saturation = "100" , brightness = "100" , inversion = "0" , grayscale = "0" ;
let rotate=0, flipHorizontal=1 ,flipVertical = 1 ;

const applyFilter = () => {
    previewImg.style.transform=`rotate(${rotate}deg)  scale(${flipHorizontal} ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) `;
}
const loadImage = () => {
    let file = fileInput.files[0];  // getting user selecetd file
    if(!file) return;        // return if user hasnot selected files
    previewImg.src=URL.createObjectURL(file); //passing file url s preview img src
    previewImg.addEventListener("load",() => {
        resetImgBtn.click();  //clicking rest btn ,so the filter value reset if the user select new img
        document.querySelector(".container").classList.remove("disable");
    });
}

filterOptions.forEach(option => {
    option.addEventListener("click", () => {  
        //adding click event listner to all filter buttons
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if(option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if(option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`
        } else if(option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});
const updateFilter = () => {
    filterValue.innerText=`${filterSlider.value}%`;
    const selectedFilter = document.querySelector('.filter .active'); //getting sected filter btn
    
    if (selectedFilter.id === "brightness"){
        brightness=filterSlider.value;
    }
    else if(selectedFilter.id === "saturation"){
        saturation=filterSlider.value;
    }
    else if(selectedFilter.id === "inversion"){
        inversion=filterSlider.value;
    }
    else{
        grayscale = filterSlider.value;
    }
    applyFilter();
}
rotateOptions.forEach(optn => {
    optn.addEventListener("click", () => {   //adding click event listener to all rotate/flip buttons
        // console.log(optn);
        if(optn.id === "left"){
            rotate -= 90;  // if you click on it it will rotate value by -90 degress
        }
        else if(optn.id === 'right'){
            rotate +=90 ;       // if you click on it it will rotate value by +90 degress
        }
        else if(optn.id==="horizontal"){
            flipHorizontal =flipHorizontal === 1 ? -1 : 1 ;   //if flipHorizontal value is 1 , set this to -1 else set 1
        }
        else{
            flipVertical = flipVertical === 1 ? -1:1;  ////if flipVertical value is 1 , set this to -1 else set 1
        }
        applyFilter();

    });
});
const resetFilter =()=>{ // resetting all variable values to it's default value
    saturation = 100 ; brightness = 100 ; inversion = 0 ;grayscale = 0 ;
    rotate=0; flipHorizontal=1 ;flipVertical = 1 ;
    filterOptions[0].click();   // clicking brightness btn,  so the brightness selected by defafult
    applyFilter();

}
const saveImage = () => {
    // console.log("save imag btn clicked");
    const canvas =document.createElement("canvas");  //creating  a canvas Element
    const ctx = canvas.getContext("2d");  // canvas getcontext return a drawing context on the canvas
    canvas.width=previewImg.naturalWidth;  // setting canvas  widht to actual image width
    canvas.height=previewImg.naturalHeight;   // setting canvas  Height to actual image widt
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) `;
    ctx.translate(canvas.width / 2 ,canvas.height / 2); //translating canvas from  the center
    if(rotate !== 0){
        ctx.rotate(rotate * Math.PI / 180);
    }
   
    // applying user selected filters to canvas filter
    ctx.scale(flipHorizontal,flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2 , -canvas.height / 2 , canvas.width , canvas.height);
    
    const link=document.createElement('a');
    link.download="image.jpg";
    link.href=canvas.toDataURL();
    link.click();
}
fileInput.addEventListener("change", loadImage);  
chooseImgBtn.addEventListener("click",() => fileInput.click());
resetImgBtn.addEventListener("click",resetFilter);
saveImgBtn.addEventListener("click",saveImage);
filterSlider.addEventListener("input", updateFilter);
