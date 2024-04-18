import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "dotenv";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const postDetails = (pics) => {};
  const handleClick = () => setShow(!show);
  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Lütfen bütün alanları doldurun.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Giriş başarılı.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      // Burada başka bir işlem yapabilirsiniz, örneğin sayfa yönlendirmesi yapabilirsiniz.
    } catch (error) {
      // Hata durumunda işlemler
      console.error("Login error:", error);
      toast({
        title: "Giriş başarısız.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    }
  };
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
        isLoading={loading}
      >
        Giriş Yap
      </Button>
    </VStack>
  );
};

export default Login;
