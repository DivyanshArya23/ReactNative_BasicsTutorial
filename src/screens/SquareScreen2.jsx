import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorBox from "../components/ColorBox";
import ColorCounter2 from "../components/ColorCounter2";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  if (state[action.colorToChange] + action.amount > 255) {
    action.amount = 255 - state[action.colorToChange];
  } else if (state[action.colorToChange] + action.amount < 0) {
    action.amount = -1 * state[action.colorToChange];
  }
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const SquareSceen2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const COLOR_VALUE_CHANGE = 50;

  return (
    <View>
      <Text style={styles.Heading}>Square Screen 2</Text>
      <ColorCounter2
        color="Red"
        counter={state.red}
        dispatch={dispatch}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <ColorCounter2
        color="Green"
        counter={state.green}
        dispatch={dispatch}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <ColorCounter2
        color="Blue"
        counter={state.blue}
        dispatch={dispatch}
        jumpValue={COLOR_VALUE_CHANGE}
      />
      <Text
        style={styles.Color}
      >{`rgb(${state.red},${state.green},${state.blue})`}</Text>
      <ColorBox
        color={`rgb(${state.red},${state.green},${state.blue})`}
        height={200}
        width={200}
      />
    </View>
  );
};

export default SquareSceen2;

const styles = StyleSheet.create({
  Heading: {
    textAlign: "center",
  },
  Color: {
    textAlign: "center",
    marginTop: 40,
  },
});
