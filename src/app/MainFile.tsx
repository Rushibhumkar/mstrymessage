import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Dashboard from "./screens/Dashboard";
import Agents from "./screens/Agents";
import Leads from "./screens/Leads";

const MainFile = () => {
  const [showScreen, setShowScreen] = useState("Dashboard");
  return (
    <Flex w="100%" h="100vh" bg="white" backgroundColor={"red"}>
      <Box h="full" py={8} px={8} display="flex" flexDirection="column">
        <Flex direction="row" gap={4} m={4} alignItems="center">
          <Image
            src="https://img.freepik.com/premium-vector/logo-vector-infinity-link-minimalist-link-concept-connection_790567-270.jpg"
            height="12"
            width="26"
            alt="Revo Logo"
          />
          <Heading color="black" fontSize="24px">
            Revo
          </Heading>
        </Flex>
        <Flex
          flex={1}
          backgroundColor={"grey"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={12}
        >
          <Link
            paddingX={4}
            // textDecoration={'none'}
            _hover={{textDecoration:'none'}}
            borderRadius={4}
            paddingY={2}
            backgroundColor={showScreen==='Dashboard'? "purple":'grey'}
            color={"#fff"}
            width={"100%"}
            textAlign={"center"}
            onClick={()=>setShowScreen('Dashboard')}
          >
            Dashboard
          </Link>
          <Link
            paddingX={4}
            _hover={{textDecoration:'none'}}
            borderRadius={4}
            paddingY={2}
            backgroundColor={showScreen==='Agents'? "purple":'grey'}
            color={"#fff"}
            width={"100%"}
            textAlign={"center"}
            onClick={()=>setShowScreen('Agents')}
          >
            Agents
          </Link>
          <Link
            paddingX={4}
            _hover={{textDecoration:'none'}}
            borderRadius={4}
            paddingY={2}
            backgroundColor={showScreen==='Leads'? "purple":'grey'}
            color={"#fff"}
            width={"100%"}
            textAlign={"center"}
            onClick={()=>setShowScreen('Leads')}
          >
            Leads
          </Link>
        </Flex>
      </Box>
      <Flex flexDirection={"column"} flex={1} backgroundColor={"pink"}>
        <Flex
          justifyContent={"space-between"}
          marginY={8}
          paddingX={8}
          width={"100%"}
          backgroundColor={"pink"}
        >
          <Text marginX={12} fontWeight={"bold"} fontSize={24} color={"#000"}>
            Leads
          </Text>
          <Box display={"flex"} flexDirection={"row"} gap={8}>
            <Input placeholder="Enter text here" size="md" variant="outline" />
            <Flex flexDirection={"row"} gap={4}>
              <Button
                colorScheme="teal"
                size="md"
                variant="solid"
                onClick={() => alert("Button clicked!")}
              >
                ReAssign
              </Button>
              <Button
                colorScheme="teal"
                size="md"
                variant="solid"
                onClick={() => alert("Button clicked!")}
              >
                Assign
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Flex flex={1} backgroundColor={"purple"}>
          {showScreen === "Dashboard" ? (
            <Dashboard />
          ) : showScreen === "Leads" ? (
            <Leads />
          ) : showScreen === "Agents" ? (
            <Agents />
          ) : (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle mr={2}>Success!</AlertTitle>
              <AlertDescription>
                Your operation was completed successfully.
              </AlertDescription>
            </Alert>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainFile;
