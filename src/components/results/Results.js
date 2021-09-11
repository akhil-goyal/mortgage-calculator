// Packages
import React, { useContext } from 'react';

// Contexts
import { calculatorValues } from 'contexts/calculator-context';

// Helper Functions
import { mortgageResult } from 'utils/helpers/mortgage-calculation';
import { separateByComma } from 'utils/helpers/comma-separation';

// Others
import './results.css';

const Results = () => {

    const {
        purchasingPrice,
        deposit,
        mortgageTerm,
        interestRate,
    } = useContext(calculatorValues);

    const {
        borrowingAmount,
        monthlyPayment,
        totalRepaid,
        totalInterestPaid,
        depositPercentage,
        loanToValue
    } = mortgageResult(purchasingPrice, deposit, mortgageTerm, interestRate);

    return (
        <>
            <div className="results-title">
                <h2><u>Results</u></h2>
            </div>

            <div className="results">

                <div>
                    <h4><strong>${separateByComma(borrowingAmount)}</strong></h4>
                    <em>Amount to borrow</em>
                </div>

                <div>
                    <h4><strong>${separateByComma(monthlyPayment.toFixed(2))}</strong></h4>
                    <em>Monthly payment</em>
                </div>

                <div>
                    <h4><strong>${separateByComma(totalRepaid.toFixed(2))}</strong></h4>
                    <em>Total Repaid</em>
                </div>

                <div>
                    <h4><strong>${separateByComma(totalInterestPaid.toFixed(2))}</strong></h4>
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