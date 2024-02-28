export const euclideanDistance = (a: number[], b: number[]): number => {

    if (a.length !== b.length) {
        throw new Error('Vectors must be of same length');
    }

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += (a[i] - b[i]) ** 2;
    }

    return Math.sqrt(sum);
}