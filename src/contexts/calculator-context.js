import React, { createContext, useState } from 'react';

// Creating a new context.
export const calculatorValues = createContext();

const CalculatorContext = ({ children }) => {

    // Initial states.
    const [purchasingPrice, setPurchasingPrice] = useState(200000);
    const [deposit, setDeposit] = useState(50000);
    const [mortgageTerm, setMortgageTerm] = useState(7);
    const [interestRate, setInterestRate] = useState(2);

    const handlePurchasingPriceChange = e => {
        setPurchasingPrice(e)
    }

    const handleDepositChange = e => {
        setDeposit(e)
    }

    const handleMortgageTermChange = e => {
        setMortgageTerm(e)
    }

    const handleInterestRateChange = e => {
        setInterestRate(e)
    }

    // Passing the states such that they may be used
    // by the children components that fall under the scope
    // of this provider.
    return (
        <calculatorValues.Provider
            value={{
                purchasingPrice,
                deposit,
                mortgageTerm,
                interestRate,
                handlePurchasingPriceChange,
                handleDepositChange,
                handleMortgageTermChange,
                handleInterestRateChange
            }}>
            {children}
        </calculatorValues.Provider>
    )
}

export { CalculatorContext };