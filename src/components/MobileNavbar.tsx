const MobileNavbar = () => {
  return (
    <div className="md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="rgb-ring">
        <div className="bg-zinc-950 text-white rounded-full px-6 py-3 flex gap-6">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-blue-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
