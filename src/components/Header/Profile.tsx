import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Juliano Ramos</Text>
            <Text color="gray.300" fontSize="sm">490meister@gmail.com</Text>
          </Box>
        )
      }

      <Avatar size="md" name="Juliano Ramos" src="https://github.com/JulianoRamos.png" />
    </Flex>
  );
}