import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  
  // Эта функция теперь заменяет старый handleSubmit
  const handleAction = (formData: FormData) => {
    // Извлекаем значение из инпута по его имени (name="query")
    const query = formData.get("query") as string;

    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(query.trim());
    // Форма очистится автоматически, если использовать специализированные хуки, 
    // но для простоты можно оставить так или вызвать reset() на форме
  };

  return (
    <header className={s.header}>
      {/* Вместо onSubmit используем action */}
      <form action={handleAction} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="query" // Это имя используется в formData.get("query")
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button type="submit" className={s.button}>Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;