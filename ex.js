let UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase="abcdefghijklmnopqrstuvwxyz";
let Numbers="0123456789";
let Spl="@~$*_";

const inputEle=document.getElementById("inputBox");
const submitBtn=document.getElementById("submit-Btn");
const pswdlength=document.getElementById("pswdlength");
const displaylen=document.getElementById("lengthValue");
const uppercase=document.getElementById("upperChar");
const lowercase=document.getElementById("lowerChar");
const numbers=document.getElementById("numbers");
const splchar=document.getElementById("splchar");
copyicon=document.getElementById("img");
copyicon.addEventListener("click",function(){
    let copyText = document.getElementById("inputBox");
    if(copyText.value!=""||copyText.value>=1){

        copyicon.src="check.png";
        copyText.select();
        document.execCommand("copy");
        console.log("Copied the text: "+copyText.value)
        copyicon.title="Password Copied";
        setTimeout(function(){
            copyicon.title="";
            copyicon.src="copy.png";
        },5000);
    }


})
submitBtn.addEventListener("click",function(){
    
    // console.log(inputEle);
    let allchar="";
    if(uppercase.checked){
        allchar+=UpperCase;
    }
    if(lowercase.checked){
        allchar+=LowerCase;
    }
    if(numbers.checked){
        allchar+=Numbers;
    }
    if(splchar.checked){
        allchar+=Spl;
    }
    if(allchar==""){
        alert("checkBoxes are not checked!!!");
        console.log("checkBoxes are not checked");
    }
    else{
        generatePassword(pswdlength.value,allchar);
     
    // document.getElementById("gfg")
    //     .innerHTML = "Copied the text: "
    //     + copyGfGText.value;
    }
    
})
function generatePassword(pswdlen,allchar){
    let pswd="";
    let i=0;
    while(i<=pswdlen){
        pswd+=allchar.charAt(Math.random()*allchar.length);
        i++;
    }
    if(Number.isInteger(Number(pswd.charAt(0)))){
        console.log("Invalid password generated");
        generatePassword(pswdlen,allchar);
        return;
        
    }
    inputEle.value=pswd;
    displaylen.textContent=pswdlength.value;
    console.log(pswd);
}

// console.log(inputEle);