export const lorem = `Jedna z najpiękniejszych na świecie tablic manipulacyjnych. Nie dość, że cieszy oko, to jeszcze bawi dziecko. Czego rodzic mógłby chcieć więcej? No może trzy godzinki więcej snu.`

export function getShortDescription(description: string) {
  const words = description.split(` `);
  if (words.length > 15) return words.slice(0,15).join(` `).concat(`...`)
  return description
}