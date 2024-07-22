
const randomNumber = ()=> Math.round(Math.random() * (255 - 1) + 1)


export const randomColor = () => {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}
