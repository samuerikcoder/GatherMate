import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/slices/userSlice";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import Logo from "@/assets/Logo GatherMate 1.png";

export const LoginPage = () => {
  const user = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  const apiURL = import.meta.env.VITE_API_URL;

  const handleSubmit = (values: any): void => {
    
  };

  return (
    <section className="flex align-middle min-h-dvh w-screen p-4">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full min-h- grid place-items-center">
            <div className="max-w-[689px] w-full grid gap-5">
              <img src={Logo} className="w-full" alt="logo GatherMate" />
              <p className="text-2xl border-b-[1px] pb-4">
                Faça login no GatherMate
              </p>
              <TextField
                id="outlined-user-input"
                name="email"
                variant="outlined"
                label="Usuário"
                type="text"
                fullWidth
                autoComplete="current-user"
              />

              <TextField
                id="outlined-password-input"
                name="password"
                variant="outlined"
                label="Senha"
                type="password"
                fullWidth
                autoComplete="current-password"
              />

              <FormControlLabel
                control={
                  <Checkbox style={{ color: "#333333" }} defaultChecked />
                }
                label="Eu aceito os termos e condições"
              />

              <Button
                style={{ background: "#333333", color: "#fff" }}
                variant="contained"
              >
                Entrar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
