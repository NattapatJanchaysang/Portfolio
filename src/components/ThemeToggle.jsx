import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => { /* Set ธีมตามที่เก็บไว้ใน localStorage */
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => { /* ฟังก์ชันสลับโหมดธีม เพื่อไปใส่ใน button*/
    if (isDarkMode) {
      document.documentElement.classList.remove("dark"); /*  ลบคลาส dark ถ้า isDarkMode เป็น False */
      localStorage.setItem("theme", "light"); /* เก็บค่าโหมดธีมลงใน localStorage */
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark"); /* เพิ่มคลาส dark ถ้า isDarkMode เป็น True */
      localStorage.setItem("theme", "dark"); /* เก็บค่าโหมดธีมลงใน localStorage */
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme} 
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button> /* ปุ่มสลับโหมดธีม */
  );
};