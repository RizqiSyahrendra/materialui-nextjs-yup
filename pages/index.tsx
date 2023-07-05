import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import InputText from '../src/components/InputText';
import * as yup from 'yup';
import useReactHookFormWithYup from '../src/hooks/useReactHookFormWithYup';
import { SubmitHandler } from 'react-hook-form';

const LoginSchema = yup.object({
  email: yup.string().email().required().label("email"),
  password: yup.string().required().label("password"),
}).required();

export default function Home() {
  const { control, handleSubmit, formState: { errors }, reset, setValue, getValues } = useReactHookFormWithYup(LoginSchema);

  const onPressLogin: SubmitHandler<yup.InferType<typeof LoginSchema>> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("email", "testtest@gmail.com");
  }, [])

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <InputText control={control} name="email" label="email" variant="filled" helperText={errors?.email?.message} />
        <InputText type="password" control={control} name="password" label="password" variant="filled" helperText={errors?.password?.message} />
        <Button onClick={handleSubmit(onPressLogin)} variant="contained">Login</Button>
      </Box>
    </Container>
  );
}
