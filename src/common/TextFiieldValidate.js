import {TextField} from "@material-ui/core";
import React from "react";

export const TextFieldValidate = ({ input, label, type, meta: { touched, error, warning } }) => {

    return <TextField placeholder={label} error={touched && error} helperText={touched && error} {...input} />
}