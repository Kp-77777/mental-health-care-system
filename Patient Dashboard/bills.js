document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded, displaying bills...");
    loadBills(); // Load previously generated bills
});

// Display the list of generated bills
function loadBills() {
    const billsContainer = document.getElementById("bills-container");
    billsContainer.innerHTML = ""; // Clear previous bills

    // Retrieve bills from local storage
    const bills = JSON.parse(localStorage.getItem("generatedBills")) || [];

    if (bills.length === 0) {
        billsContainer.innerHTML = "<p>No bills available.</p>";
        return;
    }

    bills.forEach((bill) => {
        const billElement = document.createElement("div");
        billElement.classList.add("bill");
        billElement.innerHTML = `
            <p><strong>Patient:</strong> ${bill.patientName}</p>
            <p><strong>Mobile:</strong> ${bill.mobile}</p>
            <p><strong>Visit Date:</strong> ${bill.visitDate}</p>
            <p><strong>Billing Amount:</strong> $${bill.billingAmount}</p>
            <p><strong>Bill Date:</strong> ${bill.billDate}</p>
        `;
        billsContainer.appendChild(billElement);
    });
}
