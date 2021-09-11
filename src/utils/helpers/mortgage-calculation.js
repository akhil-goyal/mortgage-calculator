export const mortgageResult = (
    purchasingPrice,
    deposit,
    mortgageTerm,
    interestRate
) => {

    const borrowingAmount = purchasingPrice - deposit;
    const monthlyPayment = (borrowingAmount * (interestRate / 100 / 12)) / (1 - (((interestRate / 100 / 12) + 1) ** (12 * (0 - mortgageTerm))));
    const totalRepaid = monthlyPayment * 12 * mortgageTerm;
    const totalInterestPaid = totalRepaid - borrowingAmount;
    const depositPercentage = deposit / purchasingPrice * 100;
    const loanToValue = borrowingAmount / purchasingPrice * 100;

    return {
        borrowingAmount,
        monthlyPayment,
        totalRepaid,
        totalInterestPaid,
        depositPercentage,
        loanToValue
    }

}