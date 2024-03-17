import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const postDetails = (pics) => {};

  const submitHandler = (e) => {};

  return (
    <VStack spacing="5px">
      <FormControl id="isim" isRequired>
        <FormLabel>İsminiz</FormLabel>
        <Input
          placeholder="İsminizi Girin"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>
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
      <FormControl id="sifre" isRequired>
        <FormLabel>Şifre Doğrula</FormLabel>
        <Input
          placeholder="*************"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Profil Fotoğrafı</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        />
      </FormControl>
      <Button
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Üye Ol
      </Button>
    </VStack>
  );
};

export default Signup;
