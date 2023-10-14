import {
  PropsWithChildren,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";

import products from "../../data/products.json";

type ReducerAction = {
  type: string;
  payload: UserInfo | Product | AddOnProduct[];
};

type ContextType = {
  state: UserData;
  dispatch: React.Dispatch<ReducerAction>;
  isFormCompleted: () => boolean;
};

const FormContext = createContext<ContextType>({} as ContextType);

const initialUserData = {
  user: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  plan: products.regulars[0],
  addOns: [],
};

function reducer(state = initialUserData, action: ReducerAction) {
  switch (action.type) {
    case "PERSONAL/UPDATE":
      return { ...state, user: action.payload as UserInfo };

    case "PLAN/UPDATE":
      return { ...state, plan: action.payload as Product };

    case "ADDONS/UPDATE":
      return {
        ...state,
        addOns: action.payload,
      } as UserData;

    default:
      return state;
  }
}

export function useFormContext() {
  return useContext(FormContext);
}

export default function FormProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer<Reducer<any, ReducerAction>>(
    reducer,
    initialUserData
  );

  function isFormCompleted(): boolean {
    const userValidity = !!Object.values(state.user).find((val) => !!val);
    const planValidity = !!Object.values(state.plan).find((val) => !!val);
    return userValidity && planValidity;
  }

  const providerValue: ContextType = {
    state: state as UserData,
    dispatch,
    isFormCompleted,
  };

  return (
    <FormContext.Provider value={providerValue}>
      {" "}
      {children}{" "}
    </FormContext.Provider>
  );
}
