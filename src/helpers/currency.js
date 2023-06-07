function formatCurrency($value) {
    return (import.meta.env.VITE_APP_CURRENCY ?? 'LKR') + " " +$value.toFixed(2);
}

export {
    formatCurrency
};