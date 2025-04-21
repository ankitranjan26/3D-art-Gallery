export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      title: `Da Vinci's Vision ${i + 1}`,
      artist: 'Leonardo da Vinci',
      description: `An iconic creation by da Vinci, artwork ${i + 1} reflects his extraordinary intellect and mastery in blending science with art.`,
      year: `${1480 + i}`,
      link: 'https://github.com/ankitranjan26',
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Reflections of Frida ${i + 5}`,
      artist: 'Frida Kahlo',
      description: `Artwork ${i + 5} unveils Kahlo’s powerful self-expression, symbolizing personal pain and cultural identity through vivid color and surrealism.`,
      year: `${1930 + i}`,
      link: 'https://github.com/ankitranjan26',
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Monet's Light ${i + 9}`,
      artist: 'Claude Monet',
      description: `Radiating serenity and movement, artwork ${i + 9} exemplifies Monet’s revolutionary impressionistic technique and his deep fascination with nature.`,
      year: `${1870 + i}`,
      link: 'https://github.com/ankitranjan26',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Picasso's Echo ${i + 13}`,
      artist: 'Pablo Picasso',
      description: `Artwork ${i + 13} encapsulates Picasso’s bold experimentation with form and abstraction, marking a pivotal moment in modern art.`,
      year: `${1905 + i}`,
      link: 'https://github.com/ankitranjan26',
    },
  })),
];
