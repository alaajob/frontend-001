let BigBox    = document.querySelector(".box");
let smallBox  = document.querySelector(".small-box");
let inputMail = document.querySelector("#mail"); //add class error
let mailName  = document.querySelector(".mail-name");
let Msg       = document.querySelector(".msg"); //add class show
let btnSubsc  = document.querySelector("#btn-subsc"); //remove class hide


btnSubsc.onclick = ()=>{
  if(inputMail.value == ''){
    error(inputMail , Msg);
  }else{
    if(!validMail(inputMail.value.trim())){
      error(inputMail , Msg);
    }else{
      validMail(inputMail.value.trim());
      boxes(BigBox , smallBox);
      mailName.innerHTML = inputMail.value.trim();
    }
    inputMail.value = '';
  }
}
function error(inputeRR , msgeRR){
  inputeRR.classList.add("error");
  msgeRR.classList.add("show");
  setTimeout(() => {
    inputeRR.classList.remove("error");
    msgeRR.classList.remove("show");
  }, 1500);
}
function boxes(bigbox , smallbox){
  bigbox.classList.add("hide");
  smallbox.classList.remove("hide");
}
function validMail(mailVal){
  let re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mailVal));
}
