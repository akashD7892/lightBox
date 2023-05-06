
function includePopupHtml(){

    let html = ' <div id="vis-pop"><span id="close" onclick="closePopup()"><img id="npop" src="close.png"></span><img id="left_arrow" src="left.jpg"  alt="leftImage" onclick="leftPop()"><img id="right_arrow"  src="right.jpg" alt="rightImage" onclick="rightPop()"><img id="mainPopImage" src="laptop1.jpg" alt="LaptopPhoto"></div>';

    let popdiv = document.createElement("div") ;
    popdiv.innerHTML = html ;
    document.body.insertBefore(popdiv,document.body.firstChild) ;
} 

//includePopupHtml() ; 

let img ;

function imagePopInit(target){
    img = document.getElementsByClassName(target);

    for( var i = 0 ; i < img.length ; i++ ){ 
        img[i].style.cursor = 'pointer' ;
        img[i].addEventListener('click', function(){
            document.getElementById("mainPopImage").src = this.src ;
            document.getElementById("vis-pop").style.display = 'block' ;
         }) 

    }
    
    includePopupHtml();
} 

function closePopup(){

    document.getElementById("mainPopImage").src = "" ;
    document.getElementById("vis-pop").style.display = 'none' ;
} 

function leftPop(){
    getcurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src ;
// alert("LeftPop");

}

function rightPop(){
    getcurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src ;
  //  alert("rigthPop");
} 

function getcurrentImage(){
    for( var i=0;i<img.length; i++){

        if(img[i].src == document.getElementById("mainPopImage").src){
            current=i;
        }
    }
}