import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredDishes = [
  {
    name: "Kerala Fish Curry",
    description: "Fresh catch of the day simmered in coconut milk and aromatic spices",
    category: "Main Course",
    price: "$24.99"
  },
  {
    name: "Masala Dosa",
    description: "Crispy fermented crepe served with potato masala and chutneys",
    category: "Breakfast",
    price: "$16.99"
  },
  {
    name: "Appam Stew",
    description: "Lacy hoppers served with vegetable stew in coconut milk",
    category: "Main Course",
    price: "$19.99"
  }
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-20 bg-kerala-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-kerala-brown text-center mb-12">
          Featured Menu
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card key={dish.name} className="p-6 hover:shadow-lg transition-shadow">
              <Badge className="bg-kerala-green text-white mb-4">{dish.category}</Badge>
              <h3 className="text-xl font-semibold text-kerala-brown mb-2">{dish.name}</h3>
              <p className="text-gray-600 mb-4">{dish.description}</p>
              <p className="text-kerala-gold font-bold">{dish.price}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/menu" className="inline-block border-b-2 border-kerala-gold text-kerala-brown hover:text-kerala-gold transition-colors">
            View Full Menu →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;