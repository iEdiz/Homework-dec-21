type Animal = {
  id: number;
  name: string;
  image: string;
};

export const animals: Animal[] = [
  {
    id: 1,
    name: "Lion",
    image:
      "https://t4.ftcdn.net/jpg/01/35/97/83/360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg",
  },
  {
    id: 2,
    name: "Elephant",
    image:
      "https://cdn.britannica.com/02/152302-004-4F261C52/African-savanna-elephant.jpg",
  },
  {
    id: 3,
    name: "Giraffe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Giraffe.JPG/2560px-Giraffe.JPG",
  },
  {
    id: 4,
    name: "Tiger",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Siberischer_tiger_de_edit02.jpg",
  },
  {
    id: 5,
    name: "Kangaroo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Kangaroo-in-flight_cropped.jpg",
  },
  {
    id: 6,
    name: "Penguin",
    image:
      "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Dolphin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Dolphin_Ocean.jpg",
  },
  {
    id: 8,
    name: "Cheetah",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg",
  },
  {
    id: 9,
    name: "Koala",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Cutest_Koala.jpg/654px-Cutest_Koala.jpg?20081207105841",
  },
  {
    id: 10,
    name: "Zebra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Common_zebra_1.jpg",
  },
];

const string = JSON.stringify(animals);
localStorage.setItem("animals", string);

export const Animals =
  localStorage.getItem("animals") !== null ? JSON.parse(localStorage.getItem("animals") as string) : "No animals added";
