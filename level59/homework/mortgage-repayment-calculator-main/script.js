document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mortgageForm');
    const clearAllButton = document.getElementById('clearAll');
    const resultsContent = document.getElementById('resultsContent');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateMortgage();
    });

    clearAllButton.addEventListener('click', clearForm);

    function calculateMortgage() {
        const mortgageAmount = parseFloat(document.getElementById('mortgageAmount').value);
        const mortgageTerm = parseFloat(document.getElementById('mortgageTerm').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

        if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
            showError('Please fill in all fields with valid numbers.');
            return;
        }

        const monthlyInterestRate = interestRate / 100 / 12;
        const totalPayments = mortgageTerm * 12;

        let monthlyPayment;
        if (mortgageType === 'repayment') {
            monthlyPayment = (mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
                (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        } else {
            monthlyPayment = mortgageAmount * monthlyInterestRate;
        }

        const totalRepayment = monthlyPayment * totalPayments;

        displayResults(monthlyPayment, totalRepayment);
    }

    function displayResults(monthlyPayment, totalRepayment) {
        resultsContent.innerHTML = `
            <div class="result-item">
                <h3>Your monthly repayments</h3>
                <p class="monthly-payment">£${monthlyPayment.toFixed(2)}</p>
            </div>
            <div class="result-item">
                <h3>Total you'll repay over the term</h3>
                <p>£${totalRepayment.toFixed(2)}</p>
            </div>
        `;
    }

    function showError(message) {
        resultsContent.innerHTML = `<p class="no-results">${message}</p>`;
    }

    function clearForm() {
        form.reset();
        resultsContent.innerHTML = '<p class="no-results">Complete the form to see your results</p>';
    }
});