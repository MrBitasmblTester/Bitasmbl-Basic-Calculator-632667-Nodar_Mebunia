# Bitasmbl-Basic-Calculator-632667-Nodar_Mebunia

## Description
Create a simple web-based calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. This project focuses on interactive UI, event handling, and state management.

## Tech Stack
- SvelteKit

## Requirements
- Perform basic arithmetic operations (add, subtract, multiply, divide)
- Provide a clear and intuitive layout for buttons and display
- Handle edge cases such as division by zero
- Update the display dynamically when buttons are clicked

## Installation
Follow these steps to set up the project locally.

1. Clone the repository (using the repo owner username):

   bash
   git clone https://github.com/MrBitasmblTester/Bitasmbl-Basic-Calculator-632667-Nodar_Mebunia.git
   cd Bitasmbl-Basic-Calculator-632667-Nodar_Mebunia
   

2. Install dependencies (SvelteKit projects typically use npm):

   bash
   npm install
   

3. No environment variables are required for this project as it is a frontend SvelteKit application focused on UI and client-side logic.

## Usage
Start the development server and open the app in your browser.

1. Run the development server:

   bash
   npm run dev
   

2. Open your browser and navigate to the local dev URL provided by SvelteKit (commonly http://localhost:5173).

3. Interact with the calculator UI: click digits and operator buttons to perform calculations. The display updates dynamically on button clicks.

To create a production build (optional):

bash
npm run build
npm run preview


## Implementation Steps
1. Clone the repository and install dependencies (see Installation).
2. Create a calculator UI component or page. For a SvelteKit route, implement the main UI in src/routes/+page.svelte (or create a reusable component at src/lib/Calculator.svelte and import it into the page).
3. Build a clear layout: a display area at the top and a grid of buttons for digits (0-9), operators (+, -, *, /), and an equals (=) button. Ensure the layout is intuitive and accessible.
4. Define component state using Svelte reactive variables, for example:
   - displayValue (string) — what is shown on the screen
   - firstOperand (number | null)
   - operator (string | null)
   - waitingForSecondOperand (boolean)
5. Implement digit input handling:
   - A handler (e.g., handleDigit) appends the clicked digit to displayValue or replaces it if waitingForSecondOperand is true.
   - Update displayValue reactively so the UI updates immediately when buttons are clicked.
6. Implement operator handling:
   - A handler (e.g., handleOperator) stores the current displayValue as firstOperand and saves the chosen operator.
   - Set waitingForSecondOperand to true so the next digit input starts the second operand.
7. Implement compute logic for '=' button:
   - Parse firstOperand and the current displayValue as numbers.
   - Perform the selected arithmetic operation (+, -, *, /).
   - Handle division by zero: if operator is '/' and the second operand is 0, set displayValue to an explicit error string (for example, "Error") and reset operator/operands as appropriate.
   - Otherwise, update displayValue with the computed result (formatted as needed).
8. Wire all buttons to their respective handlers (digits, operators, equals) so clicks update state and the display dynamically.
9. Test common flows in the browser: sequential operations, switching operators before entering second operand, and division by zero to verify the error handling.
10. (Optional) Add basic styles to ensure the layout is clear and intuitive: readable display, well-spaced buttons, and visual affordance for operators.