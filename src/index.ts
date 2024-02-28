import ollama from 'ollama'
import { euclideanDistance } from './eDistance.js';
import { plotTwoWords } from './basicPlot.js';
import { cosineSimilarity } from './cosineSimilarity.js';

// Check if at least one command line argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node index.ts <your_argument>');
  process.exit(1);
}

// Access the command line argument
const prompt1: string = process.argv[2];
const prompt2: string = process.argv[3];

const embeddingPrompt1 = await ollama.embeddings({
  model: 'llama2',
  prompt: prompt1
})

const embeddingPrompt2 = await ollama.embeddings({
  model: 'llama2',
  prompt: prompt2
})


const distance = euclideanDistance(embeddingPrompt1.embedding, embeddingPrompt2.embedding);
const cosineSimilarityValue = cosineSimilarity(embeddingPrompt1.embedding, embeddingPrompt2.embedding)
console.log({ prompt1, prompt2, distance, cosineSimilarityValue })
plotTwoWords(embeddingPrompt1.embedding, embeddingPrompt2.embedding)