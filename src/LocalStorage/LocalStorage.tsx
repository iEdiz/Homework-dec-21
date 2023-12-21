type Animal = {
  id: number;
  name: string;
  image: string;
};

export const animals: Animal[] = [
  {
    id: 1,
    name: "Lion",
    image: "https://t4.ftcdn.net/jpg/01/35/97/83/360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg",
  },
  {
    id: 2,
    name: "Elephant",
    image: "https://cdn.britannica.com/02/152302-004-4F261C52/African-savanna-elephant.jpg",
  },
  {
    id: 3,
    name: "Giraffe",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Giraffe.JPG/2560px-Giraffe.jpg",
  },
  {
    id: 4,
    name: "Tiger",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Siberischer_tiger_de_edit02.jpg",
  },
  {
    id: 5,
    name: "Kangaroo",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Kangaroo-in-flight_cropped.jpg",
  },
  {
    id: 6,
    name: "Penguin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/444px-Emperor_Penguin_Manchot_empereur.jpg",
  },
  {
    id: 7,
    name: "Dolphin",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Dolphin_Ocean.jpg",
  },
  {
    id: 8,
    name: "Cheetah",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg",
  },
  {
    id: 9,
    name: "Koala",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Koalas.jpg",
  },
  {
    id: 10,
    name: "Zebra",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Common_zebra_1.jpg",
  },
];

const string = JSON.stringify(animals);
localStorage.setItem("animals", string);

export const Animals =
  localStorage.getItem("animals") !== null ? JSON.parse(localStorage.getItem("animals") as string) : "No animals added";
