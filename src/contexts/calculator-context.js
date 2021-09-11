// Packages
import React, { createContext, useState } from 'react';

// Others
import { defaultValues } from 'utils/static';

// Creating a new context.
export const calculatorValues = createContext();

const CalculatorContext = ({ children }) => {

    const {
        defaultPurchasingPrice,
        defaultDeposit,
        defaultMortgageTerm,
        defaultInterestRate
    } = defaultValues;

    // Initial states.
    const [purchasingPrice, setPurchasingPrice] = useState(defaultPurchasingPrice);
    const [deposit, setDeposit] = useState(defaultDeposit);
    const [mortgageTerm, setMortgageTerm] = useState(defaultMortgageTerm);
    const [interestRate, setInterestRate] = useState(defaultInterestRate);

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