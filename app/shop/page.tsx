import { supabase } from "../../lib/supabase";

export default async function ShopPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .limit(20);

  if (error) {
    return (
      <div className="p-10">
        <h1>Error loading products</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9F5] p-10 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">
        Meraki Shop
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold text-lg text-gray-900">
              {product.Product_Name}
            </h2>

            <p className="text-sm text-gray-700">
              {product.Category}
            </p>

            <p className="mt-2 text-pink-600 font-bold">
              ₹{product.Price}
            </p>

            <p className="text-sm">
              Stock: {product.Closing_Quantity}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}