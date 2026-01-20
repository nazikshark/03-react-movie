import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = (form.elements.namedItem('query') as HTMLInputElement).value;

    if (query.trim() === "") {
      toast.error('Please enter your search query.');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="query" type="text" className={styles.input} placeholder="Search movies..." />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}