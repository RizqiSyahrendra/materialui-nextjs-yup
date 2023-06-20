import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const useReactHookFormWithYup = <TSchema extends Parameters<typeof yupResolver>[0]>(yupSchema: TSchema) => {

    const { control, register, handleSubmit, formState, reset, getValues, setValue } = useForm<yup.InferType<TSchema>>({
        resolver: yupResolver(yupSchema),
    });
    

    return { control, register, handleSubmit, formState, reset, getValues, setValue };
}

export default useReactHookFormWithYup;