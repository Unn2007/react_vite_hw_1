export const formatStatNumber = (num) => {
    const str = num.toString()
    if ((str.length>3)&&(str.length<6)) {return `${str.slice(0,(str.length-3))},${str.slice((str.length-3))}`}
    return str
    }