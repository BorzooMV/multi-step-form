import { useReducer } from "react";

type ReducerAction = {
  type: string;
  payload: any;
};

const initialUserData = {
  user: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  plan: {
    product: "",
    type: "",
  },
  addOns: [],
};

function reducer(state = initialUserData, action: ReducerAction) {
  switch (action.type) {
    case "PERSONAL/UPDATE":
      return { ...state, user: action.payload };

    case "PLAN/UPDATE":
      return { ...state, plan: action.payload };

    case "ADDONS/UPDATE":
      return { ...state, addOns: action.payload };

    default:
      return state;
  }
}

export default function useWholeForm() {
  const [state, dispatch] = useReducer(reducer, initialUserData);
  return {
    state,
    dispatch,
  };
}
