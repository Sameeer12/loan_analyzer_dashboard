export const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

export const objectToTableData = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({
        name: key,
        ...value
    }))
}