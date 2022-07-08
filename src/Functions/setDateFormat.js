const setDateFormat = d => {
    //yyyy-MM-ddThh:mm
    const datee = new Date(Date.parse(d));
    const y = datee.getFullYear();
    const m = ('' + (datee.getMonth() + 1)).padStart(2, '0');
    const day = ('' + datee.getDate()).padStart(2, '0');
    const h = ('' + datee.getHours()).padStart(2, '0');
    const min = ('' + datee.getMinutes()).padStart(2, '0');
    const out = y + '-' + m + '-' + day + 'T' + h + ':' + min;
    return out;
}

export default setDateFormat