// Functions Library Start

function getInputFieldValueById(id){
  return document.getElementById(id).value;
}

function getTextFieldValueById(id){
  return document.getElementById(id).innerText;
}

// Universal donation handler function
function handleDonation(donateInputId, currentFundId, mainBalanceId, donationTitleId) {
  const toAddDonationFund = parseFloat(getInputFieldValueById(donateInputId));
  document.getElementById(donateInputId).value = ''; // Clear the input field
  const currentDonationFund = parseFloat(getTextFieldValueById(currentFundId));
  const mainBalance = parseFloat(getTextFieldValueById(mainBalanceId));
  const donationTitle = getTextFieldValueById(donationTitleId);

  if (mainBalance >= toAddDonationFund && !isNaN(toAddDonationFund) && toAddDonationFund > 0) {
    // Calculation
    const updateFund = currentDonationFund + toAddDonationFund;
    const updateMainbalance = mainBalance - toAddDonationFund;

    // Inject in code
    document.getElementById(mainBalanceId).innerText = updateMainbalance;
    document.getElementById(currentFundId).innerText = updateFund;

    // Add to history
    let historyDiv = document.getElementById("history-div");

    // Get the current date in the desired format
    const currentDate = new Date().toString();

    const p = document.createElement("div");
    p.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm mt-8 mb-6">
                    <div class="card-body">
                        <p class="text-xl font-bold">${toAddDonationFund} Taka is ${donationTitle}</p>
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
    textP.innerHTML = `<p class="py-4 text-xl font-light text-center text-text">You have donated ${toAddDonationFund} Taka for humankind</p>`;
    modalP.appendChild(textP);
  
    const modal = document.getElementById("my_modal_5");
    modal.showModal(); // Opens the modal
  
  } else {
    alert("Invalid, Try again");
  }
}

// Function to toggle views
function toggleView(showId, hideId, activeBtnId, inactiveBtnId) {
  document.getElementById(showId).classList.remove("hidden");
  document.getElementById(hideId).classList.add("hidden");

  // Button color change
  document.getElementById(activeBtnId).classList.add("bg-primary");
  document.getElementById(inactiveBtnId).classList.remove("bg-primary");
}

// Functions Library End

// Toggling for donation and history

// for history button
document.getElementById("history-btn").addEventListener("click", function(){
  toggleView("history-div", "Donation-div", "history-btn", "donation-btn");
});

// for donate button
document.getElementById("donation-btn").addEventListener("click", function(){
  toggleView("Donation-div", "history-div", "donation-btn", "history-btn");
});

// Event listeners for donation buttons
document.getElementById("donate-btn1").addEventListener("click", function() {
  handleDonation("donate-input", "currentFund", "main-balance", "donation-title");
});

// Add more event listeners for other donation buttons here
// Example:
// document.getElementById("btn-donate-another").addEventListener("click", function() {
//   handleDonation("donate-another", "currentFund-another", "main-balance", "donation-title-another");
// });