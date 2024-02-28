export const cosineSimilarity=(vec1: number[], vec2: number[]): number=> {
    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;
  
    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i];
      magnitude1 += vec1[i] ** 2; 
      magnitude2 += vec2[i] ** 2;
    }  
  
    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);
  
    if(magnitude1 === 0 || magnitude2 === 0) {
      return 0;
    }
  
    return dotProduct / (magnitude1 * magnitude2);
}
  
//   const vector1 = [1, 2, 3];
//   const vector2 = [4, 5, 6];
  
//   const result = cosineSimilarity(vector1, vector2);
  
//   console.log(result); // 0.9952