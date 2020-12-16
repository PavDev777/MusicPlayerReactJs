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
    {
      name: "Покушать принес",
      cover: "https://vk.vkfaces.com/851520/v851520803/11e878/-QVE-p8D-WY.jpg",
      artist: "Пахом, Вова, Рустам",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio:
        "https://data.ipleer.com/file/121295032/c2ZxcHA1cEMxZlRYS0dNaGc5dmE5WDluMHN3OVZBZFBINng4NldMMUZ2U0JmdTU0eGdYTW1GeS9WN25yWExrSGYzOFI4K3NPQWNEOFFnWG5FOUp6SXJzNzZHZHdFUGhiMzdmaTg2c2R3MDFpZFNSd3BvNElSbWFtemp3K3c3Q0Y/Zelyonyj_-_Slonik_(iPleer.com).mp3",
    },
  ];
}
export default chillHop;
