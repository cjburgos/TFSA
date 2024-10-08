
const calculateTokenConversionRate = (amount, leftRate, rightRate) => {
    return amount * (leftRate / rightRate);
};

export { calculateTokenConversionRate };