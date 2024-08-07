import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature" },
    { name: "Maine Coon", description: "Large, fluffy cats with tufted ears" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious coats" },
    { name: "Bengal", description: "Wild-looking cats with spotted or marbled coats" },
    { name: "Scottish Fold", description: "Characterized by their folded ears and round faces" },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin" },
    { name: "Russian Blue", description: "Elegant cats with silvery-blue coats" },
    { name: "Ragdoll", description: "Large, semi-longhaired cats with blue eyes" },
  ];

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  const nextBreed = () => {
    setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length);
  };

  const prevBreed = () => {
    setCurrentBreedIndex((prevIndex) => (prevIndex - 1 + catBreeds.length) % catBreeds.length);
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'}`}>
      <div className="fixed top-4 right-4 flex items-center space-x-2 z-10">
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
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          className={`text-7xl font-bold mb-10 flex items-center justify-center ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className={`mr-4 ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`} size={80} />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            All About Cats
          </span>
        </motion.h1>
        <motion.div
          className="relative w-full h-[600px] rounded-lg shadow-2xl mb-12 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence mode="wait">
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
          </AnimatePresence>
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-2">{catBreeds[currentBreedIndex].name}</h2>
            <p className="text-lg">{catBreeds[currentBreedIndex].description}</p>
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
            onClick={prevBreed}
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
            onClick={nextBreed}
          >
            <ChevronRight size={24} />
          </Button>
        </motion.div>
        <Card className={`mb-12 ${isDarkMode ? 'bg-gray-800' : ''}`}>
          <CardHeader>
            <CardTitle className={`text-4xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Fascinating Felines</CardTitle>
            <CardDescription className={`text-xl ${isDarkMode ? 'text-gray-400' : ''}`}>Discover the enchanting world of cats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Cats are captivating creatures that have been cherished companions for thousands of years. Their grace, independence, and playful nature continue to enchant humans around the world.
            </p>
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant={isDarkMode ? "secondary" : "default"}
                  className="flex items-center text-lg"
                  onClick={() => setLikes(likes + 1)}
                >
                  <Heart className={`mr-2 ${isDarkMode ? 'text-red-400' : 'text-pink-500'}`} />
                  Like ({likes})
                </Button>
              </motion.div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div whileHover={{ rotate: 20 }}>
                      <Button variant="ghost" className="p-2">
                        <Paw className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} size={32} />
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Cats have adorable toe beans!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>

        <Carousel className="mb-12">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className={`h-full ${isDarkMode ? 'bg-gray-800' : ''}`}>
                  <CardHeader>
                    <CardTitle className={`text-2xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>{breed.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{breed.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs defaultValue="characteristics" className="mb-12">
          <TabsList className={`grid w-full grid-cols-2 ${isDarkMode ? 'bg-gray-700' : ''}`}>
            <TabsTrigger value="characteristics" className="text-lg">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card className={isDarkMode ? 'bg-gray-800' : ''}>
              <CardHeader>
                <CardTitle className={`text-3xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Fascinating Cat Characteristics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {[
                    "Excellent hunters with razor-sharp claws and teeth",
                    "Incredibly flexible bodies with quick reflexes",
                    "Keen senses, especially acute hearing and night vision",
                    "Soft, luxurious fur with a wide variety of coat patterns",
                    "Complex communication through vocalizations, body language, and scent marking",
                    "Independent nature balanced with affectionate behavior towards their humans",
                    "Exceptional balance and agility, able to land on their feet",
                    "Grooming experts, spending up to 50% of their waking hours cleaning themselves"
                  ].map((trait, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'}`}
                    >
                      <Info className={`mr-4 flex-shrink-0 ${isDarkMode ? 'text-blue-300' : 'text-blue-500'}`} size={28} />
                      <span className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{trait}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card className={isDarkMode ? 'bg-gray-800' : ''}>
              <CardHeader>
                <CardTitle className={`text-3xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Popular Cat Breeds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catBreeds.map((breed, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'}`}
                    >
                      <Badge className="mb-3 text-lg" variant={isDarkMode ? "outline" : "secondary"}>{breed.name}</Badge>
                      <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{breed.description}</p>
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
