// Packages
import React from 'react';

// Files
import './results.css';

const Results = () => {
    return (
        <>
            <div className="results-title">
                <h2><u>Results</u></h2>
            </div>

            <div className="results">

                <div>
                    <h4><strong>1234</strong></h4>
                    <em>Amount to borrow</em>
                </div>

                <div>
                    <h4><strong>2345</strong></h4>
                    <em>Monthly payment</em>
                </div>

                <div>
                    <h4><strong>3456</strong></h4>
                    <em>Total Repaid</em>
                </div>

                <div>
                    <h4><strong>4567</strong></h4>
                    <em>Total Interest Paid</em>
                </div>

                <div>
                    <h4><strong>5678</strong></h4>
                    <em>Deposit</em>
                </div>

                <div>
                    <h4><strong>6789</strong></h4>
                    <em>Loan to value</em>
                </div>

            </div>
        </>
    )
}

export default Results;