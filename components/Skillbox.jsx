const Skillbox = ({ children, title }) => {
  return (
    <section className="shadow">
      <h3 className="text-center text-3xl font-bold mb-6"> {title} </h3>
      <div className="bg-gray-100  rounded-lg aspect-square  p-5 grid grid-cols-2  gap-2">
        {children}
      </div>
    </section>
  );
};

export default Skillbox;
