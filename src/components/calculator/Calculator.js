// Packages
import React, { useContext } from 'react';
import { Slider } from 'antd';

// Contexts
import { calculatorValues } from 'contexts/calculator-context';

// Helper Functions
import { defaultValues } from 'utils/static';
import { separateByComma } from 'utils/helpers/comma-separation';

// Others
import './calculator.css';

const Calculator = () => {

    const { siteColor } = defaultValues;

    const {
        purchasingPrice,
        deposit,
        mortgageTerm,
        interestRate,
        handlePurchasingPriceChange,
        handleDepositChange,
        handleMortgageTermChange,
        handleInterestRateChange
    } = useContext(calculatorValues);

    return (
        <>

            <div className="flex calculator-title">
                <h2><u>Mortgage Variables</u></h2>
            </div>

            <div className="grid-2 sliders">

                <div className="center">
                    <h3>${separateByComma(purchasingPrice)}</h3>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        onChange={handlePurchasingPriceChange}
                        defaultValue={purchasingPrice}
                        min={0}
                        max={1000000}
                        step={500}
                    />
                    <em>Purchasing House Price</em>
                </div>

                <div className="center">
                    <h3>${separateByComma(deposit)}</h3>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        onChange={handleDepositChange}
                        defaultValue={deposit}
                        min={0}
                        max={300000}
                        step={500}
                    />
                    <em>Deposit</em>
                </div>

                <div className="center">
                    <h3>{mortgageTerm.toFixed(1)} years</h3>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        onChange={handleMortgageTermChange}
                        defaultValue={mortgageTerm}
                        min={5}
                        max={40}
                        step={1}
                    />
                    <em>Mortgage Term</em>
                </div>

                <div className="center">
                    <h3>{interestRate.toFixed(2)}%</h3>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        onChange={handleInterestRateChange}
                        defaultValue={interestRate}
                        min={0.1}
                        max={10}
                        step={0.1}
                    />
                    <em>Interest Rate</em>
                </div>

            </div>
        </>
    )
}

export default Calculator;