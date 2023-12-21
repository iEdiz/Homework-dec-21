import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnimal } from "../AnimalSlice/Animals";
import { AnimalMap } from "../Validation/Validation";

export const AddAnimals = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const animalList = useSelector((state) => state.animals.value);

  const handleAddAnimal = () => {
    const newId = animalList.length > 0 ? animalList[animalList.length - 1].id + 1 : 1;
    const newAnimal = {
      id: newId,
      name,
      image,
    };

    const validationResults = AnimalMap.safeParse([newAnimal]);

    if (validationResults.success) {
      dispatch(addAnimal(newAnimal));

      const animals = JSON.parse(localStorage.getItem("animals")) || [];
      const newAnimals = [...animals, newAnimal];
      localStorage.setItem("animals", JSON.stringify(newAnimals));
    } else {
      console.error("Validation error:", validationResults.error);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Animal name..."
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Animal image..."
        onChange={(e) => {
          e.preventDefault();
          setImage(e.target.value);
        }}
      />
      <Button text="Add animal" onClick={handleAddAnimal} />
    </div>
  );
};
