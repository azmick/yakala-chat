import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const postDetails = (pics) => {};

  const submitHandler = (e) => {};

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="ornek@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="sifre" isRequired>
        <FormLabel>Şifre</FormLabel>
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Giriş Yap
      </Button>
    </VStack>
  );
};

export default Login;
