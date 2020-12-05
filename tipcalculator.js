let billAmount = document.getElementById("billamount");
let percentageTip = document.getElementById("percentagetip");
let numberOf = document.getElementById("people");
let btn = document.getElementById("btn");

let tipAmount = 0;
let totalAmount = 0;

btn.addEventListener("click",function(){
    calculateTip();
    setTimeout(function(){
        billAmount.value = "";
        percentageTip.value = "";
        numberOf.value = "";
    },1);
});

function calculateTip(){
    
    let billAmt = parseFloat(billAmount.value);
    let perTip = parseFloat(percentageTip.value);
    let nPerson = parseFloat(numberOf.value);

    tipAmount = billAmt * (perTip / 100);
    totalAmount = (billAmt - tipAmount);

    tipAmount = (billAmt * (perTip / 100))/ nPerson;
    if(isNaN(tipAmount) || tipAmount == ""){
        document.getElementById("result").innerHTML = `<div class="amount"><span style="color: #ef8888;">Please Enter valid data!!</span>
        </div>`;
    }
    else{
    document.getElementById("result").innerHTML = `<div class="amount">Tip amount per people is <span class="amt">$${tipAmount}</span>
                                                    </div>
                                                    <div class="amount">
                                                        Total Remaining amount is <span class="amt">$${totalAmount}</span>
                                                    </div>`;
    }
}
