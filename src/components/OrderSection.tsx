import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, List } from "lucide-react";

const OrderSection = () => {
  const [orderType, setOrderType] = useState("delivery");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-kerala-brown mb-8">Order Online</h2>
        
        <Tabs defaultValue="delivery" className="max-w-md mx-auto mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger 
              value="delivery" 
              onClick={() => setOrderType("delivery")}
              className="data-[state=active]:bg-kerala-green data-[state=active]:text-white"
            >
              <Truck className="mr-2 h-4 w-4" />
              Delivery
            </TabsTrigger>
            <TabsTrigger 
              value="pickup"
              onClick={() => setOrderType("pickup")}
              className="data-[state=active]:bg-kerala-green data-[state=active]:text-white"
            >
              <List className="mr-2 h-4 w-4" />
              Pickup
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button size="lg" className="bg-kerala-gold hover:bg-kerala-gold/90">
          Start {orderType === "delivery" ? "Delivery" : "Pickup"} Order
        </Button>
      </div>
    </section>
  );
};

export default OrderSection;