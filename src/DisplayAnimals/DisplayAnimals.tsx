import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Image } from "../components/Image/Image";
import { deleteAnimal, updateAnimal, sortAnimal } from "../AnimalSlice/Animals";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AnimalName } from "../Validation/Validation";
// import { Trans, useTranslation } from "react-i18next";
import style from "./DisplayAnimals.module.css";

export const DisplayAnimals = () => {
  // const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const animalList = useSelector((state) => state.animals.value);

  const [sortOrder, setSortOrder] = useState("default");
  const [newAnimalNames, setNewAnimalNames] = useState({});

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

    const sortingWay = newSortOrder === "asc" ? "name" : "name_desc";
    dispatch(sortAnimal(sortingWay));
  };

  return (
    <>
      <div className={style.selectWrapper}>
        <span className={style.selectHeader}>Sort by:</span>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className={style.select}
        >
          <option value="default">Default</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className={style.displayUsers}>
        {sortedAnimalArray.map((animal) => {
          const animalNewName = newAnimalNames[animal.id] || [];
          return (
            <div key={animal.id} className={style.animalCard}>
              <Image src={animal.image} alt={animal.name} />
              <h1 className={style.animalName}>{animal.name}</h1>
              <Input
                type="text"
                name={animal.name}
                placeholder="New animal name..."
                value={animalNewName}
                onChange={(e) => {
                  setNewAnimalNames((prevNames) => ({
                    ...prevNames,
                    [animal.id]: e.target.value,
                  }));
                }}
              />
              <div className={style.buttonWrapper}>
                <Button
                  text="Update Animal"
                  onClick={() => {
                    setNewAnimalNames("");
                    const validationResults = AnimalName.safeParse([
                      animalNewName,
                    ]);
                    if (validationResults.success) {
                      dispatch(
                        updateAnimal({ id: animal.id, name: animalNewName }),
                      );
                    } else {
                      console.error(
                        "Validation error:",
                        validationResults.error,
                      );
                    }
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
    </>
  );
};
