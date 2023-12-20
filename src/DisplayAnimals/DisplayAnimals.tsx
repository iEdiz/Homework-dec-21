import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Image } from "../components/Image/Image";
import { deleteAnimal, updateAnimal } from "../features/Animals";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import style from "./DisplayAnimals.module.css";

export const DisplayAnimals = () => {
  const dispatch = useDispatch();
  const animalList = useSelector((state) => state.animals.value);

  const [newAnimalName, setNewAnimalName] = useState("");
  return (
    <div className={style.displayUsers}>
      {animalList.map((animal) => {
        return (
          <div key={animal.id} className={style.animalCard}>
            <Image src={animal.image} alt={animal.name} />
            <h1>{animal.name}</h1>
            <Input
              type="text"
              placeholder="New animal name..."
              onChange={(e) => {
                e.preventDefault();
                setNewAnimalName(e.target.value);
              }}
            />
            <div className={style.buttonWrapper}>
              <Button
                text="Update Animal"
                onClick={() => {
                  dispatch(updateAnimal({ id: animal.id, name: newAnimalName }));
                }}
              />
              <Button
                text="Delete Animal"
                onClick={() => {
                  dispatch(deleteAnimal({ id: animal.id }));
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
