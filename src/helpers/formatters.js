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
    toProperCase(value){
        const firstLetter = value.charAt(0);
        const rest = value.slice(1);
        return firstLetter.toUpperCase() + rest


    },

formatPhoneNumber(number) {
    const phoneNumber = number.replace(/D/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(
        3,
        6
    )}-${phoneNumber.slice(6,10)}`
}


}