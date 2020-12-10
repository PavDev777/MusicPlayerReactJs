import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Sugarless",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Aviino",
      id: uuidv4(),
      active: true,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
    },
    {
      name: "Lilo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "Middle School, The Field Tapes",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
    },
    {
      name: "Harbor",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "Stan Forebee, The Field Tapes, azula, Francis",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11245",
    },
  ];
}
export default chillHop;
