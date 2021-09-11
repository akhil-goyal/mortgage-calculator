// Packages
import React from 'react';
import { Slider } from 'antd';

// Files
import './calculator.css'

const Calculator = () => {

    const siteColor = '#073b07';

    return (
        <>

            <div className="flex calculator-title">
                <h2><u>Mortgage Variables</u></h2>
            </div>

            <div className="grid-2 sliders">

                <div className="center">
                    <h4>10000</h4>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        defaultValue={10000}
                        min={0}
                        max={1000000}
                        step={500}
                    />
                    <em>Purchasing House Price</em>
                </div>

                <div className="center">
                    <h4>20000</h4>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        defaultValue={20000}
                        min={0}
                        max={300000}
                        step={500}
                    />
                    <em>Deposit</em>
                </div>

                <div className="center">
                    <h4>2</h4>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        defaultValue={2}
                        min={5}
                        max={40}
                        step={1}
                    />
                    <em>Mortgage Term</em>
                </div>

                <div className="center">
                    <h4>2</h4>
                    <Slider
                        handleStyle={{ borderColor: siteColor }}
                        trackStyle={{ backgroundColor: siteColor }}
                        defaultValue={2}
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