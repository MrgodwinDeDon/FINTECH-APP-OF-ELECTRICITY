const select_utility = document.getElementById("select_utility");
const select_variant = document.getElementById("variant");

let variant_option = "<0ption selected disabled>select variant</option>";
variant.innerHTML = select_option; //displaying the bdefault variant

select_utility.addEventListener("change",function(evt){

    switch(evt.target. value){
        case "airtime":
          
