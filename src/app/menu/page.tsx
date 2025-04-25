import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    category: "Starters",
    items: [
      {
        name: "Masala Vada",
        description: "Crispy lentil fritters with curry leaves and spices",
        price: "$8.99",
        isVegetarian: true
      },
      {
        name: "Prawn 65",
        description: "Spicy battered prawns with curry leaves",
        price: "$14.99",
        isSpicy: true
      }
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Kerala Fish Curry",
        description: "Fresh catch of the day in coconut milk curry",
        price: "$24.99",
        isSpicy: true
      },
      {
        name: "Vegetable Stew",
        description: "Mixed vegetables in coconut milk",
        price: "$18.99",
        isVegetarian: true
      }
    ]
  }
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12 bg-kerala-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-kerala-brown text-center mb-12">
            Our Menu
          </h1>
          
          {menuCategories.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-semibold text-kerala-brown mb-6">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card key={item.name} className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-kerala-brown">
                        {item.name}
                      </h3>
                      <span className="text-kerala-gold font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex gap-2">
                      {item.isVegetarian && (
                        <Badge className="bg-kerala-green">Vegetarian</Badge>
                      )}
                      {item.isSpicy && (
                        <Badge variant="destructive">Spicy</Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;