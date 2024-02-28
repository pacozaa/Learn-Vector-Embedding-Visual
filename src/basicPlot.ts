import { plot, Plot } from 'nodeplotlib';
import { dataEmbedding } from './dataToPlot.js';
import { catData } from './catData.js';



export const plotTwoWords = (embeddingPrompt1: number[],embeddingPrompt2: number[]) => {

  const data: Plot[] = [
    {
      y: embeddingPrompt1,
      type: 'bar',
    },
    {
      y: embeddingPrompt2,
      type: 'bar',
    },
  ];

  plot(data);

}