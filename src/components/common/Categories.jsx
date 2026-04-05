const categories = [
  "Electronics",
  "Fashion",
  "Groceries",
  "Home & Living",
  "Phones",
  "Beauty",
];

export default function Categories() {
  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-primary dark:text-darkText mb-6">
          Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkCard p-4 rounded-xl shadow hover:shadow-md text-center cursor-pointer transition"
            >
              <p className="text-primary dark:text-darkText">{cat}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}