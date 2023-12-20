import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Image } from "../components/Image/Image";
import { deleteAnimal, updateAnimal, sortAnimal } from "../features/Animals";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import style from "./DisplayAnimals.module.css";

export const DisplayAnimals = () => {
  const dispatch = useDispatch();
  const animalList = useSelector((state) => state.animals.value);
  const [sortOrder, setSortOrder] = useState("default");

  const sortedAnimalArray = [...animalList];

  sortedAnimalArray.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "desc") {
      return b.name.localeCompare(a.name);
    }
  });

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);

    const newSortCriteria = newSortOrder === "asc" ? "name" : "name_desc";
    dispatch(sortAnimal(newSortCriteria));
  };

  const [newAnimalName, setNewAnimalName] = useState("");
  return (
    <div className={style.displayUsers}>
      Sort by:
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {sortedAnimalArray.map((animal) => {
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
