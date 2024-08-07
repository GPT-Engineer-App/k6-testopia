import { useState } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [likes, setLikes] = useState(0);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature" },
    { name: "Maine Coon", description: "Large, fluffy cats with tufted ears" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious coats" },
    { name: "Bengal", description: "Wild-looking cats with spotted or marbled coats" },
    { name: "Scottish Fold", description: "Characterized by their folded ears and round faces" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-800">
          <Cat className="mr-2 text-pink-600" size={48} /> All About Cats
        </h1>
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl mb-8"
        />
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">Fascinating Felines</CardTitle>
            <CardDescription>Discover the world of cats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-4 text-gray-700">
              Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
            </p>
            <Button
              variant="outline"
              className="flex items-center"
              onClick={() => setLikes(likes + 1)}
            >
              <Heart className="mr-2 text-pink-500" /> Like ({likes})
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Characteristics of Cats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Excellent hunters with sharp claws and teeth", "Flexible bodies and quick reflexes", "Keen senses, especially hearing and night vision", "Soft fur and a variety of coat patterns", "Communicate through vocalizations, body language, and scent"].map((trait, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <Info className="mr-2 text-blue-500" size={16} />
                      {trait}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Popular Cat Breeds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catBreeds.map((breed, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge className="mb-2" variant="secondary">{breed.name}</Badge>
                      <p className="text-sm text-gray-600">{breed.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Index;
