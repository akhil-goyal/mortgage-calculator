// Packages
import React, { useContext } from 'react';

// Contexts
import { calculatorValues } from 'contexts/calculator-context';

// Others
import './results.css';

const Results = () => {

    const {
        purchasingPrice,
        deposit,
        mortgageTerm,
        interestRate,
    } = useContext(calculatorValues);

    const borrowingAmount = purchasingPrice - deposit;
    const monthlyPayment = (borrowingAmount * (interestRate / 100 / 12)) / (1 - (((interestRate / 100 / 12) + 1) ** (12 * (0 - mortgageTerm))));
    const totalRepaid = monthlyPayment * 12 * mortgageTerm;
    const totalInterestPaid = totalRepaid - borrowingAmount;
    const depositPercentage = deposit / purchasingPrice * 100;
    const loanToValue = borrowingAmount / purchasingPrice * 100;

    return (
        <>
            <div className="results-title">
                <h2><u>Results</u></h2>
            </div>

            <div className="results">

                <div>
                    <h4><strong>${borrowingAmount.toFixed(2)}</strong></h4>
                    <em>Amount to borrow</em>
                </div>

                <div>
                    <h4><strong>${monthlyPayment.toFixed(2)}</strong></h4>
                    <em>Monthly payment</em>
                </div>

                <div>
                    <h4><strong>${totalRepaid.toFixed(2)}</strong></h4>
                    <em>Total Repaid</em>
                </div>

                <div>
                    <h4><strong>${totalInterestPaid.toFixed(2)}</strong></h4>
                    <em>Total Interest Paid</em>
                </div>

                <div>
                    <h4><strong>{depositPercentage.toFixed(2)}%</strong></h4>
                    <em>Deposit</em>
                </div>

                <div>
                    <h4><strong>{loanToValue.toFixed(2)}%</strong></h4>
                    <em>Loan to value</em>
                </div>

            </div>
        </>
    )
}

export default Results;