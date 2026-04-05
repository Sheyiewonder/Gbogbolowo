import ProductCard from "../../components/common/ProductCard";
import Hero from "../../components/common/Hero";
import Categories from "../../components/common/Categories";

// export default function Home() {
//   return (
//         <div>
//             <div>
//                 <h1 className="">Home Page</h1>
//             </div>
            
//             <h1 className="mb-6">Products</h1>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <ProductCard />
//                 <ProductCard />
//                 <ProductCard />
//             </div>
//         </div>

//     );
// }


export default function Home() {
  return (
    <div>

      <Hero />

      <Categories />

      {/* Featured Products */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-primary dark:text-darkText mb-6">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

        </div>
      </section>

    </div>
  );
}