export function setDateTomorrow() {
    const today = new Date();
    const tomorrow = today.setDate(today.getDate() + 1);
    return formatDate(tomorrow);
}

export function formatDate(data) {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
