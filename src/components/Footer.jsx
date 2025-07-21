const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md text-white py-4 mt-auto shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} LangLearn — Learn Languages with Ease.
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
