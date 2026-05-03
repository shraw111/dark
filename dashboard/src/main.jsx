import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';

function Dashboard() {
  return <Box><Text fontSize="2xl">Dashboard</Text></Box>;
}
function AgileBoard() {
  return <Box><Text fontSize="2xl">Agile Board</Text></Box>;
}
function Settings() {
  return <Box><Text fontSize="2xl">Settings</Text></Box>;
}

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex as="nav" bg="gray.200" p={4} gap={4}>
          <Link to="/">Dashboard</Link>
          <Link to="/board">Agile Board</Link>
          <Link to="/settings">Settings</Link>
        </Flex>
        <Box p={4}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/board" element={<AgileBoard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
