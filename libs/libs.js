export function getRandomColor() {
  const backgroundColors = [
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const randomIndex = Math.floor(Math.random() * backgroundColors.length);

  return `bg-${backgroundColors[randomIndex]}-200`;
}
