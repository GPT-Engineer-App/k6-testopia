import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature" },
    { name: "Maine Coon", description: "Large, fluffy cats with tufted ears" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious coats" },
    { name: "Bengal", description: "Wild-looking cats with spotted or marbled coats" },
    { name: "Scottish Fold", description: "Characterized by their folded ears and round faces" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'}`}>
      <div className="fixed top-4 right-4 flex items-center space-x-2">
        <Sun className="text-yellow-500" size={20} />
        <Switch
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
        />
        <Moon className="text-blue-500" size={20} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className={`text-6xl font-bold mb-6 flex items-center justify-center ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className={`mr-2 ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`} size={64} /> All About Cats
        </motion.h1>
        <motion.div
          className="relative w-full h-[500px] rounded-lg shadow-2xl mb-8 overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            key={currentBreedIndex}
            src={`https://source.unsplash.com/featured/?cat,${catBreeds[currentBreedIndex].name}`}
            alt={`A ${catBreeds[currentBreedIndex].name} cat`}
            className="mx-auto object-cover w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold">{catBreeds[currentBreedIndex].name}</h2>
            <p>{catBreeds[currentBreedIndex].description}</p>
          </div>
        </motion.div>
        <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800' : ''}`}>
          <CardHeader>
            <CardTitle className={`text-3xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Fascinating Felines</CardTitle>
            <CardDescription className={isDarkMode ? 'text-gray-400' : ''}>Discover the world of cats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                variant={isDarkMode ? "secondary" : "outline"}
                className="flex items-center"
                onClick={() => setLikes(likes + 1)}
              >
                <Heart className={`mr-2 ${isDarkMode ? 'text-red-400' : 'text-pink-500'}`} />
                Like ({likes})
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="p-0">
                      <Paw className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} size={24} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Cats have soft toe beans!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className={`grid w-full grid-cols-2 ${isDarkMode ? 'bg-gray-700' : ''}`}>
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card className={isDarkMode ? 'bg-gray-800' : ''}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Characteristics of Cats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {["Excellent hunters with sharp claws and teeth", "Flexible bodies and quick reflexes", "Keen senses, especially hearing and night vision", "Soft fur and a variety of coat patterns", "Communicate through vocalizations, body language, and scent"].map((trait, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'}`}
                    >
                      <Info className={`mr-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`} size={24} />
                      <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>{trait}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card className={isDarkMode ? 'bg-gray-800' : ''}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Popular Cat Breeds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {catBreeds.map((breed, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'}`}
                    >
                      <Badge className="mb-2" variant={isDarkMode ? "outline" : "secondary"}>{breed.name}</Badge>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{breed.description}</p>
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
