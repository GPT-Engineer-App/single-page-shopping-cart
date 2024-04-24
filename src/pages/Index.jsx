import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Premium Coffee Beans",
      description: "High-quality beans sourced from Brazil.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3MTM5NDA2NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Organic Green Tea",
      description: "Refreshing and soothing tea from the hills of India.",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1582650859079-ee63913ecb84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYXxlbnwwfHx8fDE3MTM5NDA2NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Classic Black Tea",
      description: "Rich and full-bodied tea, perfect for mornings.",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1617191880520-c6a69e04fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRlYXxlbnwwfHx8fDE3MTM5NDA2NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={4}>Welcome to Our Online Store</Heading>
      <Stack spacing={6}>
        {products.map((product) => (
          <Flex key={product.id} p={5} boxShadow="md" borderRadius="md" alignItems="center">
            <Image boxSize="100px" objectFit="cover" src={product.image} alt={product.name} mr={4} />
            <VStack align="start" flex="1">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
            </VStack>
            <Flex>
              <Button size="sm" colorScheme="teal" leftIcon={<FaMinus />}>
                Remove
              </Button>
              <Text px={4} py={2}>
                1
              </Text>
              <Button size="sm" colorScheme="teal" rightIcon={<FaPlus />}>
                Add
              </Button>
            </Flex>
          </Flex>
        ))}
      </Stack>
      <Flex justifyContent="flex-end" mt={6}>
        <Button rightIcon={<FaShoppingCart />} colorScheme="blue" size="lg">
          Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
