import { createSlice } from "@reduxjs/toolkit";
import { Animals } from "../LocalStorage/LocalStorage";

type Animal = {
  id: string;
  name: string;
};

type AnimalState = {
  value: Animal[];
  sortBy?: string;
};

export const animalSlice = createSlice({
  name: "animals",
  initialState: { value: Animals } as AnimalState,
  reducers: {
    addAnimal: (state, action) => {
      state.value.push(action.payload);
    },

    deleteAnimal: (state, action) => {
      state.value = state.value.filter((animal) => {
        return animal.id !== action.payload.id;
      });
    },

    updateAnimal: (state, action) => {
      state.value.map((animal) => {
        if (animal.id === action.payload.id) {
          animal.name = action.payload.name;
        }
      });
    },

    sortAnimal: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addAnimal, deleteAnimal, updateAnimal, sortAnimal } = animalSlice.actions;
export default animalSlice.reducer;
