# The Engagement Co. - Website Redesign

This is the official repository for **The Engagement Co.** website, redesigned with a "Punk-Professional" aesthetic using React, Vite, and Tailwind CSS v4.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have **Node.js** installed (version 18 or higher recommended).
Check your version with:
```bash
node -v
```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Harit-mi/The-Engagement-Co.git
    cd The-Engagement-Co.
    ```

2.  **Install dependencies:**
    *Important: You must run this command to install React, Tailwind, and other libraries.*
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🛠️ Tech Stack

*   **Framework:** React + Vite
*   **Styling:** Tailwind CSS v4 (configured via PostCSS)
*   **Animation:** Framer Motion
*   **Font:** Inter (Body) & Anton (Display)

## 📁 Project Structure

*   `src/components`: Contains all UI components (Hero, Services, Contact, etc.)
*   `src/App.jsx`: Main application component.
*   `src/index.css`: Global styles and Tailwind imports.
*   `tailwind.config.js`: Custom theme configuration (colors, fonts).

## ⚠️ Common Issues

*   **"Vite not found"**: Make sure you ran `npm install`.
*   **Styles looking wrong?**: Ensure `postcss.config.js` exists and is configured for Tailwind v4.

## 🤝 Contributing

1.  Pull the latest changes from `main`.
2.  Create a new branch for your feature.
3.  Commit your changes and open a Pull Request.
