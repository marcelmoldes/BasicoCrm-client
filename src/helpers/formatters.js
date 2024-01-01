import numeral from "numeral";


export default {
    formatAmount(amount, symbol = '') {
        return symbol + numeral(amount).format('0,0');
    },
    formatDate(date) {
        return new Date(date).toLocaleDateString(
            'en-gb',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'utc'
            }
        );
    },



}