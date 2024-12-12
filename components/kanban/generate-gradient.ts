export const generateColumnStyle = (index: number, total = 1) => {
    const intensity = 100 - (index / (total - 1)) * 50
    // оттенок, насыщенность, светлость
    return { backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)` }
}
