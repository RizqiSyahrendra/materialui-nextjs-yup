import { TextField, TextFieldProps } from "@mui/material";
import { Control, useController } from "react-hook-form";

export type InputTextProps = TextFieldProps & {
    control: Control<any, any>
    errorText?: string
}

export default function InputText(props: InputTextProps) {
    const {
        control,
        name = "",
        defaultValue = "",
        errorText,
        ...restProps
    } = props;

    const { field } = useController({ name, control, defaultValue });

    return (
        <TextField helperText={errorText} {...restProps} {...field} />
    );
}