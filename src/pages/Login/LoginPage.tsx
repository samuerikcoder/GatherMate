import React, { useEffect, useRef, useState } from "react";
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
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const user = useSelector((state: any) => state.user.value);
  const signIn = useSignIn();
  const dispatch = useDispatch();
  const apiURL = import.meta.env.VITE_API_URL;
  const formRef = useRef<any>(null);

  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleSubmit = async (values: any): Promise<void> => {
    const { email, password } = values;
    try {
      const response = await fetch(`${apiURL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result[0].message === "Sucesso!") {
        dispatch(setUser(result[0].data.user));
        signIn({
          auth: {
            token: result[0].data.token,
          },
          userState: result[0].data.user,
        });
        navigate("/eventos");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição POST:", error);
    }
  };

  return (
    <section className="flex align-middle min-h-dvh w-screen p-4">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        innerRef={formRef}
      >
        {({ isSubmitting }) => (
          <Form className="w-full min-h- grid place-items-center">
            <div className="max-w-[689px] w-full grid gap-5">
              <img src={Logo} className="w-full" alt="logo GatherMate" />
              <p className="text-2xl border-b-[1px] pb-4">
                Faça login no GatherMate
              </p>
              <TextField
                id="email"
                name="email"
                variant="outlined"
                label="Usuário"
                type="text"
                fullWidth
                autoComplete="current-user"
                value={formRef?.current?.values?.email}
                onChange={formRef?.current?.handleChange}
              />

              <TextField
                id="password"
                name="password"
                variant="outlined"
                label="Senha"
                type="password"
                fullWidth
                autoComplete="current-password"
                value={formRef?.current?.values?.password}
                onChange={formRef?.current?.handleChange}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: "#333333" }}
                    checked={isTermsChecked}
                    onChange={() => setIsTermsChecked(!isTermsChecked)}
                  />
                }
                label="Eu aceito os termos e condições"
              />

              <Button
                style={{ background: "#333333", color: "#fff", height: "42px" }}
                variant="contained"
                type="submit"
                disabled={!isTermsChecked}
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
