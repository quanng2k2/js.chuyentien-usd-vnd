function convertMonney() {
    let valueInput= document.getElementById("valueInput").value;
    // console.log("valueInput", valueInput);
    let valueFromCurrency=document.getElementById("fromCurrency").value;
    // console.log("valuefromcurrency", valueFromCurrency);
    let valueToCurrency = document.getElementById("toCurrency").value;
    // console.log("valueToCurrency", valueToCurrency);
    if(valueFromCurrency== "USD" && valueToCurrency=="VN") {
        document.getElementById("result").innerHTML= valueInput *23000;
    } else if(valueFromCurrency == "VN" && valueToCurrency == "USD"){
        document.getElementById("result").innerHTML = `${valueInput /23000} $`;
    }
}
