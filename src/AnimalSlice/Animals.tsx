import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Animals } from "../LocalStorage/LocalStorage";

type Animal = {
  id: number;
  name: string;
  image: string;
};

type AnimalState = {
  value: Animal[];
  sortBy?: string;
};

export const animalSlice = createSlice({
  name: "animals",
  initialState: { value: Animals } as AnimalState,
  reducers: {
    addAnimal: (state, action: PayloadAction<Animal>) => {
      state.value.push(action.payload);
    },

    deleteAnimal: (state, action: PayloadAction<Animal>) => {
      state.value = state.value.filter((animal) => {
        return animal.id !== action.payload.id;
      });
    },

    updateAnimal: (state, action: PayloadAction<Animal>) => {
      state.value.map((animal) => {
        if (animal.id === action.payload.id) {
          animal.name = action.payload.name;
        }
      });
    },

    sortAnimal: (state, action: PayloadAction<Animal>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addAnimal, deleteAnimal, updateAnimal, sortAnimal } =
  animalSlice.actions;
export default animalSlice.reducer;
