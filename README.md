# 🧾 Persona Manager App

A simple React application that allows users to manage a list of people and export the data as an XML file. Built with TypeScript, Tailwind CSS, and localStorage for data persistence.

## ✨ Features

- Add new people with name, age, occupation, and gender
- Edit existing entries
- Delete individuals from the list
- Export all people to an XML file
- Automatically saves data in the browser using `localStorage`

## 🧑‍💻 Technologies Used

- React
- TypeScript
- Tailwind CSS
- localStorage API

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/persona-manager-app.git
cd persona-manager-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.

## 🛠 Project Structure

- `App.tsx`: Main component that holds the state and handles logic
- `components/PersonaForm.tsx`: Form for adding and editing people
- `components/PersonaTable.tsx`: Displays the list of people with edit/delete actions
- `components/XMLDownloader.tsx`: Generates and downloads an XML file from the current list
- `types/Persona.ts`: TypeScript interface for the `Persona` object

## 🗃 Example XML Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<contacts>
  <contact>
    <name>John Doe</name>
    <age>30</age>
    <job>Engineer</job>
    <gender>Masculino</gender>
  </contact>
</contacts>
```

## 📌 Notes

- The app works fully offline and stores data in `localStorage`.
- The XML file is generated entirely client-side using the `Blob` API.

## 📄 License

This project is licensed under the MIT License.
