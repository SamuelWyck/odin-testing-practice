

function analyzeArray(array) {
    if (array.length === 0) {
        return {
            "average": null,
            "min": null,
            "max": null,
            "length": 0
        };
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let num of array) {
        sum += num;
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    const avg = sum / array.length;

    return {
        "average": avg,
        "min": min,
        "max": max,
        "length": array.length
    };
};


export default analyzeArray;