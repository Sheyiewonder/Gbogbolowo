// export default function ProductCard() {
//   return (
//     <div className="bg-white dark:bg-darkCard rounded-2xl shadow-md p-4 hover:shadow-lg transition">

//   <div className="h-40 bg-background dark:bg-gray-700 rounded-xl mb-4"></div>

//   <h3 className="text-primary dark:text-darkText">
//     Product Name
//   </h3>

//   <p className="text-muted text-sm">
//     Short description
//   </p>

//   <div className="flex justify-between items-center mt-4">
//     <span className="text-accent font-semibold">
//       ₦25,000
//     </span>

//     <button className="bg-primary text-accent  px-3 py-1 rounded-lg hover:bg-accent">
//       Add to Cart
//     </button>
//   </div>

// </div>
//   );
// }

export default function ProductCard() {
  return (
    <div className="bg-white dark:bg-darkCard rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      
      <div className="h-40 bg-background dark:bg-gray-700 rounded-xl mb-4"></div>

      <h3 className="text-primary dark:text-darkText">
        Product Name
      </h3>

      <p className="text-muted text-sm">
        Short description
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-accent font-semibold">
          ₦25,000
        </span>

        <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-accent transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}