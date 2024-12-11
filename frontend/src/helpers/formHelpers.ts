import { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleChange = <T>(
  e:
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | SelectChangeEvent<string>, // Allow both input and textarea events
  setValues: Dispatch<SetStateAction<T>>
): void => {
  const { name, value } = e.target;
  setValues((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

