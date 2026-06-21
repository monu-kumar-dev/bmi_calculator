# BMI Calculator

A simple BMI Calculator built using HTML, CSS and JavaScript.

This project calculates Body Mass Index (BMI) based on the user's height and weight. It also shows the BMI category, health tips, stores recent BMI records using Local Storage, and supports Dark Mode.

## Features

* Calculate BMI using height and weight
* Input validation for height and weight
* Displays BMI result with two decimal places
* Shows BMI category:

  * Underweight
  * Normal Weight
  * Overweight
  * Obese
* Provides health tips based on BMI status
* Stores BMI history using Local Storage
* Displays the last 5 BMI records
* Clear History functionality
* Reset button to clear inputs and results
* Dark Mode and Light Mode support
* Theme preference saved using Local Storage

## Technologies Used

* HTML
* CSS
* JavaScript
* Local Storage

## Project Structure

```text
BMI-Calculator/
│
├── index.html
├── style.css
└── script.js
```

## How It Works

1. Enter height in centimeters and weight in kilograms.
2. Click on the "Calculate BMI" button.
3. The application calculates BMI using the standard BMI formula.
4. The result and BMI category are displayed instantly.
5. A health tip is shown based on the BMI status.
6. The BMI record is saved in history.
7. The latest 5 records are stored in Local Storage and remain available after page refresh.

## BMI Categories

| BMI Range    | Category      |
| ------------ | ------------- |
| Below 18.5   | Underweight   |
| 18.5 - 24.9  | Normal Weight |
| 25 - 29.9    | Overweight    |
| 30 and Above | Obese         |

## What I Learned

While building this project, I learned:

* DOM Manipulation
* Form Handling
* Event Listeners
* Input Validation
* Local Storage
* Dynamic UI Updates
* Dark Mode Implementation
* JavaScript Objects and Arrays
* Working with User Data

## Future Improvements

* Add BMI chart visualization
* Add Unit Conversion (Feet/Inches)
* Add Age and Gender Inputs
* Download BMI Report
* Improve Mobile Responsiveness

## Author

Monu Kumar
