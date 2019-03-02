
export function nextGeneration(grid: string[]): string[] {
  const counter = new Map<string, number>();

  grid.forEach((cell) => {
    const [x, y] = stringToCoord(cell);

    getNeighbors(x, y).forEach((neighbor) => {
      const nb = counter.get(neighbor) || 0;
      counter.set(neighbor, nb + 1);
    });
  });

  const newGrid: string[] = [];

  counter.forEach((v, k) => {
    if (grid.includes(k) && (v === 2 || v === 3)) {
      newGrid.push(k);
    } else if (v === 3) {
      newGrid.push(k);
    }
  });

  return newGrid;
}

export function getNeighbors(x: number, y: number): string[] {
  return [
    `${x},${y + 1}`,
    `${x + 1},${y + 1}`,
    `${x + 1},${y}`,
    `${x + 1},${y - 1}`,
    `${x},${y - 1}`,
    `${x - 1},${y - 1}`,
    `${x - 1},${y}`,
    `${x - 1},${y + 1}`
  ];
}

export function stringToCoord(str: string): number[] {
  return str
    .split(",")
    .map((c) => parseInt(c, 10));
}