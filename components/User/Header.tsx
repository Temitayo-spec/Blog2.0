import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href="/">Blogify</Link>
    </header>
  );
};

export default Header;
