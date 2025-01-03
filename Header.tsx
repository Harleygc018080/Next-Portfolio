import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link href="#welcome-section">
            <img
              src="../logo.png"
              alt="Harley's Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-4 ml-auto">
          <li>
            <Link href="#welcome-section" className="text-lg hover:text-blue-600 text-gray-700 ">
              Welcome
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-lg hover:text-blue-600 text-gray-700 ">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#tools" className="text-lg hover:text-blue-600 text-gray-700 ">
              Tools
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg hover:text-blue-600 text-gray-700 ">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
