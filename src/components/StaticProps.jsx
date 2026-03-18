import astronaut1 from "../assets/astronaut1.png";
import earth1 from "../assets/earth1.png";
import galaxy1 from "../assets/galaxy1.png";
import mars1 from "../assets/mars1.png";
import mercury1 from "../assets/mercury1.png";
import neptune1 from "../assets/neptune1.png";
import omc from "../assets/omc.png";
import saturn1 from "../assets/saturn1.png";
import saturn2 from "../assets/saturn2.png";
import rocket from "../assets/rocket.png";
import ufo from "../assets/ufo.png";
import linux from "../assets/linux.png";

export const StaticProps = [
  { propIcon: astronaut1, posX: 80, posY: 65 },
  { propIcon: neptune1, posX: 600, posY: 70 },
  { propIcon: saturn2, posX: 1100, posY: 85 },
  { propIcon: earth1, posX: 200, posY: 180 },
  { propIcon: galaxy1, posX: 900, posY: 160 },
  { propIcon: mars1, posX: 500, posY: 320 },
  { propIcon: mercury1, posX: 750, posY: 360 },
  { propIcon: ufo, posX: 300, posY: 350 },
  { propIcon: saturn1, posX: 1050, posY: 420 },
  { propIcon: rocket, posX: 150, posY: 500 },
  { propIcon: linux, posX: 400, posY: 580 },
  { propIcon: omc, posX: 950, posY: 610 },
];

export const stars = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  x: Math.random() * 1280,
  y: Math.random() * 720,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 3 + 2,
}));
