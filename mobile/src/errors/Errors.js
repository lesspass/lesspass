import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteError } from "./errorsActions";
import { Portal, Snackbar, useTheme } from "react-native-paper";

export default function Errors() {
  const theme = useTheme();
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  return (
    <Portal>
      {Object.values(errors).map((error) => (
        <Snackbar
          visible={true}
          style={{ backgroundColor: theme.colors.red }}
          onDismiss={() => dispatch(deleteError(error))}
          action={{
            label: "x",
            onPress: () => dispatch(deleteError(error)),
          }}
        >
          {error.message}
        </Snackbar>
      ))}
    </Portal>
  );
}
