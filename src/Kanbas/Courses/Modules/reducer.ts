import { createSlice } from "@reduxjs/toolkit";

type Lesson = {
  _id: string,
  name: string,
  description: string,
  module: string;
}

type Module = { _id: string; id: string, name: string; description: string, course: string, lessons: Lesson }

const initialState = {
  modules: [] as Module[],
  module: {
    name: "New Module 123", description: "New Description", course: "123", lessons: [
      {
        _id: "1",
        name: "Lesson 1",
        description: "Description 1",
        module: "1",
      },
      {
        _id: "2",
        name: "Lesson 2",
        description: "Description 2",
        module: "1",
      },
      {
        _id: "3",
        name: "Lesson 3",
        description: "Description 3",
        module: "2",
      },
    ],
  }
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },

    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;