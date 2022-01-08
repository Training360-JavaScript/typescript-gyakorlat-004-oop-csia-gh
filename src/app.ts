// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  new HumanHero(1, 'John Doe', 'male', 29, 100),
  new HumanHero(2, "Conan O'brien", 'male', 84, 60),
  new HumanHero(3, 'Jane Doe', 'female', 33, 92),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  new TransformerHero(1, 'John Doe', 2, 4, 'Animatron Autobots'),
  new TransformerHero(2, "Conan O'brien", 0, 4, 'Recon Mini-Con Team'),
  new TransformerHero(3, 'Jane Doe', 0, 4, 'Recon Mini-Con Team'),
];
