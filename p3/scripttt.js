// const fileInput = document.querySelector('.file-input');
// previewImg= document.querySelector('.preview-img img');
// filterOptions=document.querySelectorAll('.filter button');
// filterName=document.querySelector('.filter-info .name');
// filterSlider=document.querySelector('.slider input');
// filterValue=document.querySelector('.filter-info .value');
// chooseImgBtn= document.querySelector('.choose-img');

// let saturation = 100 , brightness = 100 , inversion = 0 , grayscale = 0 ;
 
// const loadImage = () => {
//     let file=fileInput.files[0];  // getting user selecetd file
//     if(!file) return;        // return if user hasnot selected files
//     previewImg.src=URL.createObjectURL(file); //passing file url s preview img src
//     previewImg.addEventListener('load',() => {
//         document.querySelector('.container').classList.remove('disable');
//     })
// }

// filterOptions.forEach(option => {
//     option.addEventListener('click',() =>{  //adding click event listner to all filter buttons
//         document.querySelector('.filter .active').classList.remove('active');
//         option.classList.add('active');
//         filterName.innerText=option.innerText;

//         if(option.id ==="brightness"){
//             filterSlider.max="200";
//             filterSlider.value=brightness ;
//             filterValue.innerText=  `${brightness}%`;
//         }
//         else if (option.id ==="saturation" ){
//             filterSlider.min="200";
//             filterSlider.value=saturation ;
//             filterValue.innerText= `${saturation}%`;
//         }
//         else if (option.id ==="inversion" ){
//             filterSlider.max="100";
//             filterSlider.value=inversion ;
//             filterValue.innerText= `${inversion}%`;
//         }else {
//             filterSlider.max="100";
//             filterSlider.value=grayscale ;
//             filterValue.innerText= `${grayscale}%`;
//         }
//     });
// });
// const updateFilter = () => {
//     filterValue.innerText=`${filterSlider.value}%`;
//     const selectedFilter = document.querySelector('.filter .active'); //getting sected filter btn
    
//     if (selectedFilter.id === "brightness"){
//         brightness=filterSlider.value;
//     }
//     else if(selectedFilter.id === "saturation"){
//         saturation=filterSlider.value;
//     }
//     else if(selectedFilter.id === "inversion"){
//         inversion=filterSlider.value;
//     }
//     else{
//         grayscale = filterSlider.value;
//     }
// };
// fileInput.addEventListener('change', loadImage);  
// chooseImgBtn.addEventListener('click',() => fileInput.click());
// filterSlider.addEventListener('input', updateFilter);
