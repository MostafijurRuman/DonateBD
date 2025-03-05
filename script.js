//Functions Library Start

function getInputFieldValueById(id){
  return  document.getElementById(id).value;
}

function getTextFieldValueById(id){
  return  document.getElementById(id).innerText;
}
// Functions Library End

// Toggling for donation and history

// for history button
document.getElementById("history-btn").addEventListener("click",function(){
  document.getElementById("history-div").classList.remove("hidden")
  document.getElementById("Donation-div").classList.add("hidden")

  //history button color change
  document.getElementById("history-btn").classList.add("bg-primary")
  document.getElementById("donation-btn").classList.remove("bg-primary")
})

// for donate button
document.getElementById("donation-btn").addEventListener("click",function(){
  document.getElementById("Donation-div").classList.remove("hidden")
  document.getElementById("history-div").classList.add("hidden")
  console.log(document.getElementById("history-div").classList)
  //donation button color change
  document.getElementById("donation-btn").classList.add("bg-primary")
  document.getElementById("history-btn").classList.remove("bg-primary")
})

// DonateBD card Code start here

document.getElementById("btn-donate-noyakhali").addEventListener("click", function() {

  const toAddDonationFund = parseFloat(getInputFieldValueById("donate-noyakhali"));
  document.getElementById("donate-noyakhali").value = ''; // Clear the input field
  const currentDonationFund = parseFloat(getTextFieldValueById("currentFund-noyakhali"));
  const mainBalance = parseFloat(getTextFieldValueById("main-balance"));
  const donatinTitle = getTextFieldValueById("donation-title");

  if (mainBalance > toAddDonationFund && !isNaN(toAddDonationFund) && toAddDonationFund > 0) {
    // Calculation
    const updateFund = currentDonationFund + toAddDonationFund;
    const updateMainbalance = mainBalance - toAddDonationFund;

    // Inject in code
    document.getElementById("main-balance").innerText = updateMainbalance;
    document.getElementById("currentFund-noyakhali").innerText = updateFund;

    // Add to history
    let historyDiv = document.getElementById("history-div");

    // Get the current date in the desired format
    const currentDate = new Date().toString();

    const p = document.createElement("div");
    p.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm mt-8 mb-6">
                    <div class="card-body">
                        <p class="text-xl font-bold">${toAddDonationFund} Taka is ${donatinTitle}</p>
                        <p class="text-[16px] font-light text-text">Date: ${currentDate}</p>
                    </div> 
                </div> 
    `;

    // Append the new element to the history div
    historyDiv.appendChild(p);

    // showing a modal after successful donation
  const modalP = document.getElementById("modal-p");
  modalP.innerHTML = ''; // Clear previous content
  const textP = document.createElement("p");
  textP.innerHTML = `<p class="py-4 text-xl font-light text-text">You have donated ${toAddDonationFund} Taka for humankind</p>`;
  modalP.appendChild(textP);
  
  const modal = document.getElementById("my_modal_5");
  modal.showModal(); // Opens the modal
  
  } else {
    alert("Invalid, Try again");
  }

});
