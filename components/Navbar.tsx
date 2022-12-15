

export default function Navbar() {
  return (
    <div className="bg-theme-surface text-theme-onSurface sticky top-0 border-b-8 border-theme-background z-40">
      <nav className="px-6 py-3 flex">
        <a href="https://blairhacks.com">
          <img
            src="/assets/logo_mono.png"
            className="w-8 aspect-square"
          />
        </a>
      </nav>
    </div>
  );
}
