import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnimal } from "../features/Animals";

export const AddAnimals = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();
  const animalList = useSelector((state) => state.animals.value);

  const sortedAnimals = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
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
      <Button
        text="Add animal"
        onClick={() => {
          dispatch(
            addAnimal({
              id: animalList[animalList.length - 1].id + 1,
              name,
              image,
            })
          );
        }}
      />
      <Button
        text="Sort"
        onClick={() => {
          dispatch(
            addAnimal({
              id: animalList[animalList.length - 1].id + 1,
              name,
              image,
            })
          );
        }}
      />
    </div>
  );
};
