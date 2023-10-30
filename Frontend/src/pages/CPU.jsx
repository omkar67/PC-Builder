import React, { useEffect, useRef, useState } from "react";
import SideBar from "../components/SideBar";
import ProductCard from "../components/productCard";
import { Stack } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CPU = () => {
  const d1 = {
    label: "Manufacturer",
    dropOpt: {
      0: "AMD",
      1: "Intel",
    },
  };
  const d2 = {
    label: "Generation",
    dropOpt: {
      0: "14 NM",
      1: "12 NM",
      2: "12th Gen",
      3: "13th Gen",
    },
  };

  const drop_1 = {
    0: d1,
    1: d2,
  };
  const cores = {
    title: "Cores",
    min: 2,
    max: 64,
    step: 2,
    marks: [
      { value: 2, label: "2" },
      { value: 4, label: " " },
      { value: 6, label: " " },
      { value: 8, label: " " },
      { value: 64, label: "64" },
    ],
  };
  const MaxFrequency = {
    title: "Max Frequency",
    min: 1.1,
    max: 4.7,
    step: 0.3,
    marks: [
      { value: 1.1, label: "1 GHz" },
      { value: 1.4, label: " " },
      { value: 1.7, label: " " },
      { value: 2.0, label: "2 GHz" },
      { value: 2.3, label: "" },
      { value: 2.6, label: " " },
      { value: 2.9, label: " " },
      { value: 3.2, label: " " },
      { value: 3.5, label: " " },
      { value: 3.8, label: " " },
      { value: 4.1, label: "4 GHz" },
      { value: 4.4, label: " " },
      { value: 4.7, label: " " },
    ],
  };

  const price = {
    title: "Price",
    marks: [],
    min: 50,
    max: 500,
    step: 5,
  };

  const tdp = {
    title: "TDP",
    min: 20,
    max: 280,
    step: 20,
    marks: [
      { value: 20, label: "20W " },
      { value: 40, label: " " },
      { value: 60, label: " " },
      { value: 100, label: " " },
      { value: 160, label: " " },
      { value: 280, label: "280W" },
    ],
  };
  const slider_Num = 4;
  const main_slider = {
    0: price,
    1: cores,
    2: MaxFrequency,
    3: tdp,
  };
  const checkbox = {
    0: {
      title: "Integrated Graohics",
      options: {
        0: "Yes",
        1: "No",
        // Add more options as needed
      },
    },
    1: {
      title: "Overclockable",
      options: {
        0: "Yes",
        1: "No",
        // Add more options as needed
      },
    },
    // Add more categories as needed
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const productCardStyle = {
    flex: "2",
    marginLeft: "6vh",
  };
  const stackStyle = {
    marginTop: "1vh",
  };
  const theme = createTheme({
    typography: {
      fontFamily: "poppins, montserrat, sans-serif",
    },
    backgroundColor: "#373538",
  });
  const maxProductCardsPerStack = 3;

  // Calculate the number of product cards per stack based on screen width
  const calculateProductCardsPerStack = () => {
    const screenWidth = window.innerWidth;

    let productCardsPerStack = maxProductCardsPerStack;

    if (screenWidth < 1000) {
      productCardsPerStack = 1; // Adjust this based on your desired breakpoint
    } else if (screenWidth < 1400) {
      productCardsPerStack = 2; // Adjust this based on your desired breakpoint
    }

    return productCardsPerStack;
  };
  const totalProductCards = 9;
  // Calculate the number of stacks based on the number of product cards
  const calculateStacks = () => {
    let productCardsPerStack = calculateProductCardsPerStack();
    // Total number of product cards
    let totalStacks = Math.ceil(totalProductCards / productCardsPerStack);
    if (totalStacks * productCardsPerStack < totalProductCards) {
      totalStacks += 1;
    }
    return totalStacks;
  };

  // Initialize state to hold the number of product cards per stack and the number of stacks
  const [productCardsPerStack, setProductCardsPerStack] = useState(
    calculateProductCardsPerStack()
  );
  const [totalStacks, setTotalStacks] = useState(calculateStacks());
  /*     const [products, setProducts] = useState([]); */

  // Update the number of product cards per stack and the number of stacks when the screen is resized
  const handleResize = () => {
    setProductCardsPerStack(calculateProductCardsPerStack());
    setTotalStacks(calculateStacks());
  };
  useEffect(() => {
    // Listen for window resize events and update the layout
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useEffect(() => {
  //   // Fetch the products when the component mounts
  //   fetch("/api/cpus")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error fetching products:", error));

  //   //... [your other useEffect logic]
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <style>
        {`
          body {
            background-color: #373538; /* Set your desired background color here */
          }
        `}
      </style>
      <div style={containerStyle}>
        <SideBar
          drop={drop_1}
          slider={main_slider}
          sliderNum={slider_Num}
          checkboxCategories={checkbox}
        ></SideBar>
        <div style={productCardStyle}>
          {/*  {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        name={product.name} 
                        //... [pass other product details to ProductCard as props]
                    />
                ))} */}
          {[...Array(totalStacks)].map((_, stackIndex) => {
            // Determine how many product cards should be in this stack
            const curr_stack = stackIndex + 1;
            let num = curr_stack * productCardsPerStack;
            const cardsInThisStack =
              stackIndex === totalStacks - 1 && num > totalProductCards
                ? 1
                : productCardsPerStack;

            // Render a stack with the appropriate number of product crds
            return (
              <Stack
                key={stackIndex}
                direction="row"
                spacing={"0.5vw"}
                style={stackStyle}
              >
                {[...Array(cardsInThisStack)].map((_, cardIndex) => (
                  // Render a product card with spacing
                  <ProductCard
                    key={cardIndex}
                    style={{ marginTop: cardIndex > 0 ? "1vh" : "0" }}
                  />
                ))}
              </Stack>
            );
          })}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CPU;
