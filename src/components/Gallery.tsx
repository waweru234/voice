
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ZoomIn, Download, ChevronLeft, ChevronRight, Play,Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('meetings');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);
  const imagesPerPage = 3;
  
  const images = {
    meetings: [
      {
        src: "/lovable-uploads/aa1e4633-c01b-455c-aca3-ec9041dbe0ae.png",
        description: "Party leaders discussing strategic initiatives during a formal meeting."
      },
      {
        src: "/lovable-uploads/a471c6d9-0e06-4a76-bc6d-98e82d58f9c8.png",
        description: "Committee members at the annual party conference reviewing policy documents."
      },
      {
        src: "/lovable-uploads/129fc8a3-d480-4909-bf31-28fc98b2c0eb.png",
        description: "Party executive committee addressing key organizational matters."
      },
      {
        src: "/lovable-uploads/d443a1c0-1055-48b1-8baa-30d025fbf24b.png",
        description: "Strategy meeting with regional representatives discussing party initiatives."
      },
      {
        src: "/lovable-uploads/57e9e7d1-9380-472c-9bd9-d62df27d8018.png",
        description: "Party officials during a planning meeting with administrative staff."
      },
      {
        src: "/lovable-uploads/ff8de67a-6067-46cd-b95c-c47e67e2146a.png",
        description: "Delegation meeting with government officials at the Registrar's office."
      },
      {
        src: "/lovable-uploads/c5fb5d30-0e25-4c28-8dd8-a1034b7f6a0d.png",
        description: "Party representatives at official registration event with government officials."
      },
      // New images
      {
        src: "/lovable-uploads/8197927b-3954-4f00-a897-0307818a557c.png",
        description: "Community meeting with local leaders discussing regional development initiatives."
      },
      {
        src: "/lovable-uploads/b6f582fd-997e-40fe-a8d0-d94112ab9517.png",
        description: "Grassroots engagement session with party representatives discussing local issues."
      }
    ],
    fieldwork: [
      {
        src: "/lovable-uploads/dc4c41dd-1199-418e-8999-426c4d88ce89.png",
        description: "Community engagement initiative in rural Kenya supporting local programs."
      },
      {
        src: "/lovable-uploads/82e4df3c-cda9-4b63-9038-86adc7e28327.png",
        description: "Community outreach meeting with local leaders discussing regional needs."
      },
      {
        src: "/lovable-uploads/342d6a56-76fd-4377-a45b-7f617637f1f8.png",
        description: "Party representatives visiting coastal regions to engage with local communities."
      },
      {
        src: "/lovable-uploads/2e965a7a-f02b-4d28-9c32-7f89ec4c0a15.png",
        description: "Members outside the County Assembly of Tana River during official visit."
      },
      {
        src: "/lovable-uploads/e75e66f7-22db-4365-9f78-c7f359f05f1b.png",
        description: "Youth engagement program with young leaders from across the country."
      },
      {
        src: "/lovable-uploads/8653c7ae-af6b-4643-aae4-e386c8c44154.png",
        description: "Party delegation meeting with professional groups and local businesses."
      },
      // New image in fieldwork category
      {
        src: "/lovable-uploads/a2cb53da-e14d-457d-86ac-f7330901fd85.png",
        description: "Official visit to government offices to discuss policy implementation strategies."
      }
    ],
    events: [
      {
        src: "/lovable-uploads/56701e77-5ba7-4ebd-b3eb-070c763c27af.png",
        description: "Certificate presentation ceremony recognizing community leadership contributions."
      },
      {
        src: "/lovable-uploads/39c2690f-bb15-4aa6-815f-c41272c0fc4f.png",
        description: "Party official introducing the party manifesto at public event."
      },
      {
        src: "/lovable-uploads/68aebf74-3bff-4a3e-a1ae-b9a11030cc10.png",
        description: "Partnership ceremony between party leadership and community organizations."
      },
      {
        src: "/lovable-uploads/9281d5a4-3bf5-4992-bd1d-34944685c54b.png",
        description: "Document presentation ceremony during official party congress."
      },
      {
        src: "/lovable-uploads/55adec5f-f3f3-476d-a314-3fb6c94c4c1b.png",
        description: "Party constitution presentation by youth leader at formal gathering."
      },
      {
        src: "/lovable-uploads/2549893f-014f-413e-beeb-0b673991cafa.png",
        description: "Engagement with local businesses to discuss economic policies and initiatives."
      },
      // New images in events category
      {
        src: "/lovable-uploads/e6a6c41e-c3e4-4108-bfec-6ba45d42fe09.png",
        description: "Party member representing the Forty Seven Voices of Kenya at a national event."
      },
      {
        src: "/lovable-uploads/8cc9584e-377a-49a1-b6a9-c5e8df57808b.png",
        description: "Certificate award ceremony for party membership and leadership contributions."
      },
      {
        src: "/lovable-uploads/f1386642-f46b-4736-8c3f-96873a2f5400.png",
        description: "Family engagement event showcasing the party's commitment to community values."
      },
      {
        src: "/lovable-uploads/d0613557-4244-4d54-935d-02874c3c33bf.png",
        description: "Official party representatives at the Voice Center headquarters launch."
      },
      {
        src: "/lovable-uploads/e6a6c41e-c3e4-4108-bfec-6ba45d42fe09.png",
        description: "Party branding event showcasing Forty Seven Voices of Kenya Congress Party."
      }
    ]
  };

  // YouTube video shorts - updated titles to be more relevant
  const youtubeShorts = [
   
    { id: "1pp9EvaQHE4?si=D5Eh40NmGPQ3fvDY", title: "Community Outreach Success" },
    { id: "pJQctz7Nct0?si=A9H36WfbHKM9MIR5", title: "Interview with Party Leadership" },
   
  ];
 const localVideos = [
  {
    filename: "lovable-uploads/WhatsApp Video 2025-05-11 at 07.58.22.mp4",
    title: "Party Event Highlights",
    description: "Our recent gathering in Nairobi",
    thumbnail: "lovable-uploads/WhatsApp Image 2025-05-10 at 23.23.08.jpeg" // Optional
  },
  // Add more videos as needed
    {
    filename: "lovable-uploads/WhatsApp Video 2025-05-10 at 20.51.43.mp4",
    title: "Party Caps Available",
    description: "Our recent meeting",
    thumbnail: "lovable-uploads/WhatsApp Image 2025-05-10 at 20.51.50 (2).jpeg" // Optional
  },
];
  const activeImages = images[activeTab as keyof typeof images];
  const totalPages = Math.ceil(activeImages.length / imagesPerPage);
  const currentImages = activeImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  // Auto-scroll functionality for main gallery - slowed down
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
      
      if (autoPlay) {
        autoPlayInterval.current = setInterval(() => {
          setCurrentPage(prev => {
            if (prev < totalPages) return prev + 1;
            return 1;
          });
        }, 9000); // Changed from 7000 to 9000 - slower scrolling
      }
    };

    startAutoPlay();

    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    };
  }, [autoPlay, totalPages, activeTab]);

  // Auto-scroll functionality for carousel - slowed down
  useEffect(() => {
    const carouselAutoplayInterval = setInterval(() => {
      if (carouselApiRef.current && autoPlay) {
        carouselApiRef.current.scrollNext();
      }
    }, 6000); // Changed from 4000 to 6000 - slower scrolling

    return () => clearInterval(carouselAutoplayInterval);
  }, [autoPlay]);

  // Stop autoplay when user interacts
  const pauseAutoPlay = () => {
    setAutoPlay(false);
    // Resume after 15 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 15000); 
  };

  const handleNextPage = () => {
    pauseAutoPlay();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1); // Loop back to the beginning
    }
  };

  const handlePrevPage = () => {
    pauseAutoPlay();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages); // Loop to the end
    }
  };

  const openImageViewer = (imageSrc: string) => {
    pauseAutoPlay();
    setSelectedImage(imageSrc);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    setAutoPlay(true);
  };

  return (
    <div id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Party <span className="text-party-hotpink">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-party-hotpink mx-auto my-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlights of our activities and events across Kenya
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-md">
            <button
              onClick={() => {setActiveTab('meetings'); setCurrentPage(1);}}
              className={`px-6 py-2 rounded-full text-lg transition-all ${
                activeTab === 'meetings'
                  ? 'bg-party-hotpink text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Meetings
            </button>
            <button
              onClick={() => {setActiveTab('fieldwork'); setCurrentPage(1);}}
              className={`px-6 py-2 rounded-full text-lg transition-all ${
                activeTab === 'fieldwork'
                  ? 'bg-party-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Fieldwork
            </button>
            <button
              onClick={() => {setActiveTab('events'); setCurrentPage(1);}}
              className={`px-6 py-2 rounded-full text-lg transition-all ${
                activeTab === 'events'
                  ? 'bg-party-lightblue text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Events
            </button>
          </div>
        </div>
        
        {/* Main Image Gallery - Enhanced with animation and styling */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden h-full bg-gradient-to-b from-white to-gray-50">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative group cursor-pointer" onClick={() => openImageViewer(image.src)}>
                    <img 
                      src={image.src} 
                      alt={`Party ${activeTab} ${index + 1}`} 
                      className="w-full h-64 object-cover" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/80 p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform">
                        <ZoomIn className="text-gray-800" size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className={`font-bold text-lg ${
                        activeTab === 'meetings' ? 'text-party-hotpink' : 
                        activeTab === 'fieldwork' ? 'text-party-green' : 'text-party-lightblue'
                      }`}>
                        {activeTab === 'meetings' ? 'Party Meeting' : 
                         activeTab === 'fieldwork' ? 'Community Outreach' : 'Party Event'}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {image.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button 
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 ${
                          activeTab === 'meetings' ? 'text-party-hotpink' : 
                          activeTab === 'fieldwork' ? 'text-party-green' : 'text-party-lightblue'
                        } transition-colors`}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Download functionality
                          const link = document.createElement('a');
                          link.href = image.src;
                          link.download = `party-${activeTab}-${index}.jpg`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 mb-16 space-x-4">
            <button
              onClick={handlePrevPage}
              className="p-3 rounded-full text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors hover:text-party-hotpink"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-lg font-medium bg-gray-100 px-4 py-2 rounded-full">
              {currentPage} / {totalPages}
            </div>
            
            <button
              onClick={handleNextPage}
              className="p-3 rounded-full text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors hover:text-party-hotpink"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
        
        {/* Auto-scrolling Carousel - Party Photo Stream - Enhanced with better animation */}
        <div className="mb-16 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className={`${
              activeTab === 'meetings' ? 'text-party-hotpink' : 
              activeTab === 'fieldwork' ? 'text-party-green' : 'text-party-lightblue'
            }`}>
              Party Photo Stream
            </span>
          </h3>
          
          <Carousel
            opts={{ 
              loop: true, 
              align: "start",
              dragFree: true,
            }}
            className="w-full"
            onMouseEnter={() => pauseAutoPlay()}
            onMouseLeave={() => setAutoPlay(true)}
            setApi={(api) => {
              carouselApiRef.current = api;
            }}
          >
            <CarouselContent>
              {activeImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden border-none shadow-lg rounded-xl h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative group cursor-pointer" onClick={() => openImageViewer(image.src)}>
                        <img
                          src={image.src}
                          alt={`Party ${activeTab} auto ${index + 1}`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-white/70 p-2 rounded-full">
                            <ZoomIn className="text-gray-800" size={20} />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4 bg-gradient-to-b from-white to-gray-50">
                        <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white shadow-lg border-none" />
              <CarouselNext className="bg-white shadow-lg border-none" />
            </div>
          </Carousel>
        </div>
        
        {/* YouTube Shorts Section - Enhanced with better styling */}
        <div className="mb-16 pt-8 pb-12 px-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl">
  <h3 className="text-3xl font-bold text-center mb-8 text-white">
    <span className="text-party-hotpink">Featured</span> <span className="text-party-gold">Videos</span>
  </h3>
  
  {/* YouTube Links Only */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  {/* YouTube Shorts Links */}
  {youtubeShorts.map((video, index) => (
    <div key={`youtube-${index}`} className="bg-gray-800 p-4 rounded-lg">
      <a 
        href={`https://www.youtube.com/shorts/${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-party-gold hover:text-party-hotpink flex items-center gap-2"
      >
        <Youtube size={20} />
        <span>{video.title}</span>
      </a>
    </div>
  ))}
  
  {/* Local Videos Section */}

  {localVideos.map((video, index) => (
    <div key={`local-${index}`} className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative aspect-video">
        <video 
          controls
          className="w-full h-full object-cover"
          poster={video.thumbnail} // Optional thumbnail
        >
          <source src={`${video.filename}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4">
        <h4 className="text-white font-medium">{video.title}</h4>
        <p className="text-gray-400 text-sm">{video.description}</p>
      </div>
    </div>
  ))}
</div>   
</div>
</div> 
      {/* Image Viewer Modal - Enhanced with smoother animation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageViewer}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain" 
            />
            <button 
              className="absolute top-4 right-4 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 text-white transition-colors"
              onClick={closeImageViewer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a 
              href={selectedImage}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 text-white flex items-center space-x-1 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={20} />
              <span>Download</span>
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
