export const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('donation');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

export const saveDatatoLocalStorage = (id, price) => {

    const data = getDataFromLocalStorage();
    const donationprice = getDonationPrice();
    const isIdExists = data?.includes(id);

    if (!isIdExists) {
        data.push(id);
        donationprice.push(price)
        localStorage.setItem('price', JSON.stringify(donationprice))

        localStorage.setItem('donation', JSON.stringify(data));
        return true;
    }
    return false
}

export const getDonationPrice = () => {
    const data = localStorage.getItem('price');
    if (data) {
        return JSON.parse(data)
    }
    return []
}