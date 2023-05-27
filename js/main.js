const select_utility = document.getElementById("select_utility");
const select_variant = document.getElementById("variant");

let variant_option = "<option selected disabled>select variant</option>";
variant.innerHTML = variant_option; //displaying the default variant

select_utility.addEventListener("change",function(evt)){

}switch(evt.target.value)
case "airtime": 
variant_option = `<option value="AIRTEL">Airtel Airtime</option>
                    <option value="MTN">MTN Airtime</option>
                    <option value="GLO">GLO Airtime</option>
                    <option value="9MOBILE">9MOBILE Airtime</option>
                    `;
//variant.innerHTML = variant_option;
break;
case "TV";
variant_option = `<option value="DSTV">DSTV Subscription</option>
                <option value="GOTV">GOTV Subscription</option>
                <option value="STARTIMES">STARTIMES Subscription</option>
                `;

//variant.innerHTML = variant_option;
break;

case "electricity":
    variant_option = `<option value="IKEDC">Ikeja Electricity-IKEDC</option>
                        <option value="KAEDC">Kano Electricity-IKEDC</option>
                        <option value="POEDC">Portharcourt Electricity-IKEDC</option>
                        <option value="JEDC">Jos Electricity-IKEDC</option>
                        <option value="EEDC">Eko Electricity-IKEDC</option>
                        <option value="AEDC">Abuja Electricity-IKEDC</option>
                        <option value="KAEDC">Kaduna Electricity-IKEDC</option>
                        <option value="IBEDC">Ibadan Electricity-IKEDC</option>
                        <option value="EEDC">EnuguElectricity-IKEDC</option>
                        <option value="BEDC">Benin Electricity-IKEDC</option>
                    `;
                    break
                    variant.innerHTML =variant_option


 


          
        










