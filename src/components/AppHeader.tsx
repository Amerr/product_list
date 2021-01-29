import './AppHeader.css';

const AppHeader = () => {
  return (
    <header className="app-header">
      <a href="/" className="logo-link">
        <img className="logo" src="flaconi-logo.svg" alt="Flaconi Company logo" />
      </a>
    </header>
  );
};

export default AppHeader;
