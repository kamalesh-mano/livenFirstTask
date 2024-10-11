# Liven Project

## Getting Started

To get started with the Liven Project, follow these steps:

1. Clone the repository: git clone https://github.com/kamalesh-mano/livenFirstTask.git
2. cd into project: cd .\livenFirstTask\
3. npm I
4.npm start
## Overview

The Liven Project is a web application designed to facilitate transactions involving currency management and gift options. The application features a user-friendly interface that allows users to view currency options, toggle gift modes, and navigate seamlessly throughout the application.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Store Management](#store-management)
- [Component Structure](#component-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- View currency options with buy and bonus values.
- Toggle between gift and standard purchasing modes.
- Navigate through different sections of the app using a navigation bar.
- App-exclusive offers displayed conditionally.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for implementing design components.
- **TypeScript**: For type safety and improved developer experience.
 **Context API**: For global state management.

## Project Structure
liven/ ├── public/ ├── src/ │ ├── assets/ # Static assets such as images │ ├── components/ # Reusable components │ │ ├── Currency/ # Currency component for displaying currency information │ │ ├── GiftRadio/ # Component for toggling gift purchase mode │ │ ├── NavBar/ # Navigation bar component │ │ └── Body/ # Main content component │ ├── store/ # Context API store │ ├── App.tsx # Main application component │ └── index.tsx # Entry point of the application └── package.json

## Store Management

The application uses the Context API to manage global state, allowing components to access and update shared data without prop drilling. The store contains the following state variables:

- **buyBonusObject**: An array of currency objects with `buy`, `moneyType`, and `bonus` values.
- **giftingMode**: A boolean flag indicating whether the user is in gift purchasing mode.

The store provides methods to update these state variables:

- **setBuyBonusObject**: Updates the `buyBonusObject` state.
- **setGiftingMode**: Toggles the `giftingMode` state.

## Component Structure

### Currency Component

The `Currency` component displays the currency information, including the buy amount and bonus. If the `appExclusive` prop is true, it shows an "App Exclusive" button. This component is designed to be reusable, allowing it to be rendered with different currency data.

### GiftRadio Component

The `GiftRadio` component contains a toggle switch for enabling or disabling the gift purchase mode. When the switch is toggled, it updates the `giftingMode` state in the store.

### NavBar Component

The `NavBar` component provides navigation functionality, including a logo and a "Get App" button that redirects users to the application website.

### Body Component

The `Body` component serves as the main content area, rendering multiple `Currency` components based on the `buyBonusObject` from the store. Each currency display is wrapped in a clickable element that navigates to the app's website.
