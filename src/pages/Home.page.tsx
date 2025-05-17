import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import Experience from '../components/Experience/Experience';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Experience />
    </>
  );
}
