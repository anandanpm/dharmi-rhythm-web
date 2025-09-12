// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Eye, Calendar, Users } from "lucide-react";
// import instrumentsGallery from "@/assets/instruments-gallery.jpg";
// import danceClass from "@/assets/dance-class.jpg";
// import musicPerformance from "@/assets/music-performance.jpg";

// const GallerySection = () => {
//   const [hoveredImage, setHoveredImage] = useState<number | null>(null);

//   const galleryItems = [
//     {
//       id: 1,
//       image: instrumentsGallery,
//       title: "Classical Instruments",
//       description: "Our collection of traditional Indian musical instruments",
//       category: "Music",
//       date: "December 2024"
//     },
//     {
//       id: 2,
//       image: danceClass,
//       title: "Bharatanatyam Class",
//       description: "Students practicing traditional dance forms",
//       category: "Dance",
//       date: "November 2024"
//     }
//   ];

//   return (
//     <section className="py-20 px-4 bg-cultural-cream/30">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
//             Gallery
//           </h2>
//           <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Glimpses of our vibrant community, classes, and performances that showcase the beauty of Indian classical arts
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {galleryItems.map((item, index) => (
//             <Card 
//               key={item.id}
//               className="group overflow-hidden border-cultural-gold/20 hover:shadow-xl transition-all duration-500 animate-fade-in bg-card/80 backdrop-blur-sm"
//               style={{ animationDelay: `${index * 200}ms` }}
//               onMouseEnter={() => setHoveredImage(item.id)}
//               onMouseLeave={() => setHoveredImage(null)}
//             >
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
                
//                 {/* Overlay */}
//                 <div className={`absolute inset-0 bg-primary/60 transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <Eye className="h-8 w-8 text-white" />
//                   </div>
//                 </div>

//                 {/* Category Badge */}
//                 <Badge 
//                   className="absolute top-4 left-4 bg-cultural-gold text-primary font-elegant"
//                 >
//                   {item.category}
//                 </Badge>
//               </div>

//               <CardContent className="p-6">
//                 <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="font-elegant text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {item.description}
//                 </p>
                
//                 {/* Meta Information */}
//                 <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="h-3 w-3" />
//                     <span className="font-elegant">{item.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="h-3 w-3" />
//                     <span className="font-elegant">Academy</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center animate-fade-in">
//           <div className="bg-gradient-cultural rounded-lg p-8 border border-cultural-gold/20">
//             <h3 className="font-cultural text-2xl font-semibold text-primary mb-4">
//               Join Our Community
//             </h3>
//             <p className="font-elegant text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
//               Be part of our growing family of artists and experience the joy of learning classical Indian arts. 
//               Follow us on social media to see more photos and videos from our classes and events.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Instagram
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 YouTube
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Facebook
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Eye, Calendar, Users } from "lucide-react";
// import instrumentsGallery from "@/assets/instruments-gallery.jpg";
// import danceClass from "@/assets/dance-class.jpg";
// import musicPerformance from "@/assets/music-performance.jpg";
// import inauguration1 from "@/assets/inauguration-1.jpg";
// import inauguration2 from "@/assets/inauguration-2.jpg";
// import inauguration3 from "@/assets/inauguration-3.jpg";
// import inauguration4 from "@/assets/inauguration-4.jpg";
// import Autoplay from "embla-carousel-autoplay";

// const GallerySection = () => {
//   const [hoveredImage, setHoveredImage] = useState<number | null>(null);

//   const inaugurationPhotos = [
//     {
//       id: 1,
//       image: inauguration1,
//       title: "Academy Inauguration",
//       description: "Grand opening ceremony with traditional rituals"
//     },
//     {
//       id: 2,
//       image: inauguration2,
//       title: "Ribbon Cutting Ceremony",
//       description: "Official inauguration with traditional decorations"
//     },
//     {
//       id: 3,
//       image: inauguration3,
//       title: "Lamp Lighting Ceremony",
//       description: "Auspicious beginning with classical traditions"
//     },
//     {
//       id: 4,
//       image: inauguration4,
//       title: "Blessing Ceremony",
//       description: "Traditional blessings for the academy"
//     }
//   ];

//   const galleryItems = [
//     {
//       id: 5,
//       image: instrumentsGallery,
//       title: "Classical Instruments",
//       description: "Our collection of traditional Indian musical instruments",
//       category: "Music",
//       date: "December 2024"
//     },
//     {
//       id: 6,
//       image: danceClass,
//       title: "Bharatanatyam Class",
//       description: "Students practicing traditional dance forms",
//       category: "Dance",
//       date: "November 2024"
//     },
//     {
//       id: 7,
//       image: musicPerformance,
//       title: "Musical Performance",
//       description: "Students showcasing their musical talents",
//       category: "Music",
//       date: "October 2024"
//     }
//   ];

//   return (
//     <section className="py-20 px-4 bg-cultural-cream/30">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
//             Gallery
//           </h2>
//           <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Glimpses of our vibrant community, classes, and performances that showcase the beauty of Indian classical arts
//           </p>
//         </div>

//         {/* Inauguration Photos Carousel */}
//         <div className="mb-16 animate-fade-in">
//           <h3 className="font-cultural text-2xl font-semibold text-primary mb-8 text-center">
//             Academy Inauguration
//           </h3>
//           <Carousel
//             plugins={[
//               Autoplay({
//                 delay: 3000,
//                 stopOnInteraction: true,
//               }),
//             ]}
//             className="w-full max-w-4xl mx-auto"
//           >
//             <CarouselContent>
//               {inaugurationPhotos.map((photo) => (
//                 <CarouselItem key={photo.id}>
//                   <Card className="border-cultural-gold/20 bg-card/80 backdrop-blur-sm">
//                     <div className="relative overflow-hidden rounded-lg">
//                       <img 
//                         src={photo.image}
//                         alt={photo.title}
//                         className="w-full h-96 object-cover"
//                       />
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
//                         <h4 className="font-cultural text-xl font-semibold text-white mb-2">
//                           {photo.title}
//                         </h4>
//                         <p className="font-elegant text-white/90 text-sm">
//                           {photo.description}
//                         </p>
//                       </div>
//                     </div>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {galleryItems.map((item, index) => (
//             <Card 
//               key={item.id}
//               className="group overflow-hidden border-cultural-gold/20 hover:shadow-xl transition-all duration-500 animate-fade-in bg-card/80 backdrop-blur-sm"
//               style={{ animationDelay: `${index * 200}ms` }}
//               onMouseEnter={() => setHoveredImage(item.id)}
//               onMouseLeave={() => setHoveredImage(null)}
//             >
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
                
//                 {/* Overlay */}
//                 <div className={`absolute inset-0 bg-primary/60 transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <Eye className="h-8 w-8 text-white" />
//                   </div>
//                 </div>

//                 {/* Category Badge */}
//                 <Badge 
//                   className="absolute top-4 left-4 bg-cultural-gold text-primary font-elegant"
//                 >
//                   {item.category}
//                 </Badge>
//               </div>

//               <CardContent className="p-6">
//                 <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="font-elegant text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {item.description}
//                 </p>
                
//                 {/* Meta Information */}
//                 <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="h-3 w-3" />
//                     <span className="font-elegant">{item.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="h-3 w-3" />
//                     <span className="font-elegant">Academy</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center animate-fade-in">
//           <div className="bg-gradient-cultural rounded-lg p-8 border border-cultural-gold/20">
//             <h3 className="font-cultural text-2xl font-semibold text-primary mb-4">
//               Join Our Community
//             </h3>
//             <p className="font-elegant text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
//               Be part of our growing family of artists and experience the joy of learning classical Indian arts. 
//               Follow us on social media to see more photos and videos from our classes and events.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Instagram
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 YouTube
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Facebook
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;


// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { X, ZoomIn, Calendar, Users } from "lucide-react";
// import instrumentsGallery from "@/assets/instruments-gallery.jpg";
// import danceClass from "@/assets/dance-class.jpg";
// import musicPerformance from "@/assets/music-performance.jpg";
// import inauguration1 from "@/assets/cutting.jpg";
// import inauguration2 from "@/assets/peoplesitting.jpg";
// import inauguration3 from "@/assets/vilakkukathikkal.jpg";
// import inauguration4 from "@/assets/vilakkukathikkal2.jpg";
// import Autoplay from "embla-carousel-autoplay";

// const GallerySection = () => {
//   const [hoveredImage, setHoveredImage] = useState<number | null>(null);
//   const [fullscreenImage, setFullscreenImage] = useState<{src: string, title: string, description: string} | null>(null);

//   const inaugurationPhotos = [
//     {
//       id: 1,
//       image: inauguration1,
//       title: "Ribbon Cutting Ceremony",
//       description:"Official inauguration with traditional decorations"
//     },
//     {
//       id: 2,
//       image: inauguration2,
//       title: "Ribbon Cutting Ceremony",
//       description: "Official inauguration with traditional decorations"
//     },
//     {
//       id: 3,
//       image: inauguration3,
//       title: "Lamp Lighting Ceremony",
//       description: "Auspicious beginning with classical traditions"
//     },
//     {
//       id: 4,
//       image: inauguration4,
//       title: "Blessing Ceremony",
//       description: "Traditional blessings for the academy"
//     }
//   ];

//   const galleryItems = [
//     {
//       id: 5,
//       image: instrumentsGallery,
//       title: "Classical Instruments",
//       description: "Our collection of traditional Indian musical instruments",
//       category: "Music",
//       date: "December 2024"
//     },
//     {
//       id: 6,
//       image: danceClass,
//       title: "Bharatanatyam Class",
//       description: "Students practicing traditional dance forms",
//       category: "Dance",
//       date: "November 2024"
//     },
//     {
//       id: 7,
//       image: musicPerformance,
//       title: "Musical Performance",
//       description: "Students showcasing their musical talents",
//       category: "Music",
//       date: "October 2024"
//     }
//   ];

//   return (
//     <section className="py-20 px-4 bg-cultural-cream/30">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
//             Gallery
//           </h2>
//           <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Glimpses of our vibrant community, classes, and performances that showcase the beauty of Indian classical arts
//           </p>
//         </div>

//         {/* Inauguration Photos Carousel */}
//         <div className="mb-16 animate-fade-in">
//           <h3 className="font-cultural text-2xl font-semibold text-primary mb-8 text-center">
//             Academy Inauguration
//           </h3>
//           <Carousel
//             plugins={[
//               Autoplay({
//                 delay: 3000,
//                 stopOnInteraction: true,
//               }),
//             ]}
//             className="w-full max-w-4xl mx-auto"
//           >
//             <CarouselContent>
//               {inaugurationPhotos.map((photo) => (
//                 <CarouselItem key={photo.id}>
//                   <Card className="border-cultural-gold/20 bg-card/80 backdrop-blur-sm group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//                     <div 
//                       className="relative overflow-hidden rounded-lg"
//                       onClick={() => setFullscreenImage({src: photo.image, title: photo.title, description: photo.description})}
//                     >
//                       <img 
//                         src={photo.image}
//                         alt={photo.title}
//                         className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
                      
//                       {/* Beautiful overlay with zoom icon */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="absolute top-4 right-4">
//                           <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
//                             <ZoomIn className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Enhanced bottom gradient with content */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
//                         <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
//                           <h4 className="font-cultural text-xl font-semibold text-white mb-2 drop-shadow-lg">
//                             {photo.title}
//                           </h4>
//                           <p className="font-elegant text-white/90 text-sm drop-shadow-md">
//                             {photo.description}
//                           </p>
//                         </div>
//                       </div>
                      
//                       {/* Decorative corner elements */}
//                       <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-cultural-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-cultural-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </div>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
//             <CarouselNext className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
//           </Carousel>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {galleryItems.map((item, index) => (
//             <Card 
//               key={item.id}
//               className="group overflow-hidden border-cultural-gold/20 hover:shadow-2xl transition-all duration-500 animate-fade-in bg-card/80 backdrop-blur-sm cursor-pointer"
//               style={{ animationDelay: `${index * 200}ms` }}
//               onMouseEnter={() => setHoveredImage(item.id)}
//               onMouseLeave={() => setHoveredImage(null)}
//               onClick={() => setFullscreenImage({src: item.image, title: item.title, description: item.description})}
//             >
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Enhanced Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-transparent transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30 transform transition-transform duration-300 hover:scale-110">
//                       <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Enhanced Category Badge */}
//                 <Badge 
//                   className="absolute top-4 left-4 bg-cultural-gold/90 text-primary font-elegant backdrop-blur-sm border border-cultural-gold/20 shadow-lg"
//                 >
//                   {item.category}
//                 </Badge>
                
//                 {/* Decorative corner elements */}
//                 <div className={`absolute top-0 right-0 w-12 h-12 border-r-3 border-t-3 border-white/30 transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}></div>
//                 <div className={`absolute bottom-0 left-0 w-12 h-12 border-l-3 border-b-3 border-white/30 transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}></div>
//               </div>

//               <CardContent className="p-6 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm">
//                 <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="font-elegant text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {item.description}
//                 </p>
                
//                 {/* Meta Information */}
//                 <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="h-3 w-3" />
//                     <span className="font-elegant">{item.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="h-3 w-3" />
//                     <span className="font-elegant">Academy</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center animate-fade-in">
//           <div className="bg-gradient-cultural rounded-lg p-8 border border-cultural-gold/20">
//             <h3 className="font-cultural text-2xl font-semibold text-primary mb-4">
//               Join Our Community
//             </h3>
//             <p className="font-elegant text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
//               Be part of our growing family of artists and experience the joy of learning classical Indian arts. 
//               Follow us on social media to see more photos and videos from our classes and events.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Instagram
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 YouTube
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Facebook
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Fullscreen Image Modal */}
//       {fullscreenImage && (
//         <div 
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={() => setFullscreenImage(null)}
//         >
//           <div className="relative max-w-7xl max-h-full">
//             {/* Close Button */}
//             <button
//               onClick={() => setFullscreenImage(null)}
//               className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20 transition-all duration-300 z-10"
//             >
//               <X className="h-6 w-6 text-white" />
//             </button>
            
//             {/* Full Size Image */}
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
//               <img 
//                 src={fullscreenImage.src}
//                 alt={fullscreenImage.title}
//                 className="max-w-full max-h-[90vh] object-contain"
//               />
              
//               {/* Image Info Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
//                 <h3 className="font-cultural text-2xl font-semibold text-white mb-2 drop-shadow-lg">
//                   {fullscreenImage.title}
//                 </h3>
//                 <p className="font-elegant text-white/90 text-lg drop-shadow-md">
//                   {fullscreenImage.description}
//                 </p>
//               </div>
              
//               {/* Decorative frame */}
//               <div className="absolute top-4 left-4 w-20 h-20 border-l-4 border-t-4 border-cultural-gold"></div>
//               <div className="absolute top-4 right-4 w-20 h-20 border-r-4 border-t-4 border-cultural-gold"></div>
//               <div className="absolute bottom-4 left-4 w-20 h-20 border-l-4 border-b-4 border-cultural-gold"></div>
//               <div className="absolute bottom-4 right-4 w-20 h-20 border-r-4 border-b-4 border-cultural-gold"></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GallerySection;

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { X, ZoomIn, Calendar, Users } from "lucide-react";
// import inauguration1 from "@/assets/cutting.jpg";
// import inauguration2 from "@/assets/peoplesitting.jpg";
// import inauguration3 from "@/assets/vilakkukathikkal.jpg";
// import inauguration4 from "@/assets/vilakkukathikkal2.jpg";
// import inauguration5 from '@/assets/photo of lighting ceremony.jpg'
// import inauguration6 from '@/assets/giveflower.jpg'
// import inauguration7 from '@/assets/giveflower2.jpg'
// import inauguration8 from '@/assets/dance.jpg'
// import inauguration9 from '@/assets/group.jpg'
// import inauguration10 from '@/assets/singing.jpg'
// import inauguration11 from '@/assets/pacha.jpg'
// import Autoplay from "embla-carousel-autoplay";

// const GallerySection = () => {
//   const [hoveredImage, setHoveredImage] = useState<number | null>(null);
//   const [fullscreenImage, setFullscreenImage] = useState<{src: string, title: string, description: string} | null>(null);

//   const inaugurationPhotos = [
//     {
//       id: 1,
//       image: inauguration1,
//       title: "Ribbon Cutting Ceremony",
//       description:"Official inauguration with traditional decorations"
//     },
//     {
//       id: 2,
//       image: inauguration2,
//       title: "Inauguration Ceremony",
//       description: "Official inauguration with traditional decorations"
//     },

//     {
//       id: 3,
//       image: inauguration6,
//       title: 'bouquet presentation',
//       description: "Presenting a bouquet of flowers"
//     },
//     {
//       id: 4,
//       image: inauguration7,
//       title: 'bouquet presentation',
//       description: "Presenting a bouquet of flowers"
//     },
//     {
//       id: 5,
//       image: inauguration3,
//       title: "Lamp Lighting Ceremony",
//       description: "Auspicious beginning with classical traditions"
//     },
//     {
//       id: 6,
//       image: inauguration4,
//       title: "Lamp Lighting Ceremony",
//       description: "Traditional blessings for the academy"
//     },
//       {
//       id: 7,
//       image: inauguration5,
//       title: "Lamp Lighting Ceremony",
//       description: "Traditional blessings for the academy"
//     },
//     {
//   id: 8,
//   image: inauguration8,
//   title: " Dance Performance",
//   description: "A vibrant traditional dance showcasing our rich heritage"
// },
// {
//   id: 9,
//   image: inauguration10,
//   title: "Musical Performance",
//   description: "Melodious songs presented by talented performers"
// },
// {
//   id: 10,
//   image: inauguration11,
//   title: "Musical Performance",
//   description: "Melodious songs presented by talented performers"
// },
// {
//   id: 11,
//   image: inauguration9,
//   title: "Group Photo of Contributors",
//   description: "A special moment capturing the dedicated team who made the event possible"
// }
      

//   ];

//   // COMMENTED OUT: Gallery Items Array
//   /*
//   const galleryItems = [
//     {
//       id: 5,
//       image: instrumentsGallery,
//       title: "Classical Instruments",
//       description: "Our collection of traditional Indian musical instruments",
//       category: "Music",
//       date: "December 2024"
//     },
//     {
//       id: 6,
//       image: danceClass,
//       title: "Bharatanatyam Class",
//       description: "Students practicing traditional dance forms",
//       category: "Dance",
//       date: "November 2024"
//     },
//     {
//       id: 7,
//       image: musicPerformance,
//       title: "Musical Performance",
//       description: "Students showcasing their musical talents",
//       category: "Music",
//       date: "October 2024"
//     }
//   ];
//   */

//   return (
//     <section className="py-20 px-4 bg-cultural-cream/30">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
//             Gallery
//           </h2>
//           <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Glimpses of our vibrant community, classes, and performances that showcase the beauty of Indian classical arts
//           </p>
//         </div>

//         {/* Inauguration Photos Carousel */}
//         <div className="mb-16 animate-fade-in">
//           <h3 className="font-cultural text-2xl font-semibold text-primary mb-8 text-center">
//             Academy Inauguration
//           </h3>
//           <Carousel
//             plugins={[
//               Autoplay({
//                 delay: 3000,
//                 stopOnInteraction: true,
//               }),
//             ]}
//             className="w-full max-w-4xl mx-auto"
//           >
//             <CarouselContent>
//               {inaugurationPhotos.map((photo) => (
//                 <CarouselItem key={photo.id}>
//                   <Card className="border-cultural-gold/20 bg-card/80 backdrop-blur-sm group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//                     <div 
//                       className="relative overflow-hidden rounded-lg"
//                       onClick={() => setFullscreenImage({src: photo.image, title: photo.title, description: photo.description})}
//                     >
//                       <img 
//                         src={photo.image}
//                         alt={photo.title}
//                         className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
                      
//                       {/* Beautiful overlay with zoom icon */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="absolute top-4 right-4">
//                           <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
//                             <ZoomIn className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Enhanced bottom gradient with content */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
//                         <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
//                           <h4 className="font-cultural text-xl font-semibold text-white mb-2 drop-shadow-lg">
//                             {photo.title}
//                           </h4>
//                           <p className="font-elegant text-white/90 text-sm drop-shadow-md">
//                             {photo.description}
//                           </p>
//                         </div>
//                       </div>
                      
//                       {/* Decorative corner elements */}
//                       <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-cultural-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-cultural-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </div>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
//             <CarouselNext className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
//           </Carousel>
//         </div>

//         {/* COMMENTED OUT: Gallery Grid Section */}
//         {/*
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {galleryItems.map((item, index) => (
//             <Card 
//               key={item.id}
//               className="group overflow-hidden border-cultural-gold/20 hover:shadow-2xl transition-all duration-500 animate-fade-in bg-card/80 backdrop-blur-sm cursor-pointer"
//               style={{ animationDelay: `${index * 200}ms` }}
//               onMouseEnter={() => setHoveredImage(item.id)}
//               onMouseLeave={() => setHoveredImage(null)}
//               onClick={() => setFullscreenImage({src: item.image, title: item.title, description: item.description})}
//             >
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
                
//                 <div className={`absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-transparent transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30 transform transition-transform duration-300 hover:scale-110">
//                       <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
//                     </div>
//                   </div>
//                 </div>

//                 <Badge 
//                   className="absolute top-4 left-4 bg-cultural-gold/90 text-primary font-elegant backdrop-blur-sm border border-cultural-gold/20 shadow-lg"
//                 >
//                   {item.category}
//                 </Badge>
                
//                 <div className={`absolute top-0 right-0 w-12 h-12 border-r-3 border-t-3 border-white/30 transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}></div>
//                 <div className={`absolute bottom-0 left-0 w-12 h-12 border-l-3 border-b-3 border-white/30 transition-opacity duration-300 ${
//                   hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
//                 }`}></div>
//               </div>

//               <CardContent className="p-6 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm">
//                 <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="font-elegant text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {item.description}
//                 </p>
                
//                 <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="h-3 w-3" />
//                     <span className="font-elegant">{item.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Users className="h-3 w-3" />
//                     <span className="font-elegant">Academy</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         */}

//         {/* Call to Action */}
//         <div className="text-center animate-fade-in">
//           <div className="bg-gradient-cultural rounded-lg p-8 border border-cultural-gold/20">
//             <h3 className="font-cultural text-2xl font-semibold text-primary mb-4">
//               Join Our Community
//             </h3>
//             <p className="font-elegant text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
//               Be part of our growing family of artists and experience the joy of learning classical Indian arts. 
//               Follow us on social media to see more photos and videos from our classes and events.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Instagram
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 YouTube
//               </Badge>
//               <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
//                 Facebook
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Fullscreen Image Modal */}
//       {fullscreenImage && (
//         <div 
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={() => setFullscreenImage(null)}
//         >
//           <div className="relative max-w-7xl max-h-full">
//             {/* Close Button */}
//             <button
//               onClick={() => setFullscreenImage(null)}
//               className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20 transition-all duration-300 z-10"
//             >
//               <X className="h-6 w-6 text-white" />
//             </button>
            
//             {/* Full Size Image */}
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
//               <img 
//                 src={fullscreenImage.src}
//                 alt={fullscreenImage.title}
//                 className="max-w-full max-h-[90vh] object-contain"
//               />
              
//               {/* Image Info Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
//                 <h3 className="font-cultural text-2xl font-semibold text-white mb-2 drop-shadow-lg">
//                   {fullscreenImage.title}
//                 </h3>
//                 <p className="font-elegant text-white/90 text-lg drop-shadow-md">
//                   {fullscreenImage.description}
//                 </p>
//               </div>
              
//               {/* Decorative frame */}
//               <div className="absolute top-4 left-4 w-20 h-20 border-l-4 border-t-4 border-cultural-gold"></div>
//               <div className="absolute top-4 right-4 w-20 h-20 border-r-4 border-t-4 border-cultural-gold"></div>
//               <div className="absolute bottom-4 left-4 w-20 h-20 border-l-4 border-b-4 border-cultural-gold"></div>
//               <div className="absolute bottom-4 right-4 w-20 h-20 border-r-4 border-b-4 border-cultural-gold"></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GallerySection;
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X, ZoomIn } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// --- Photo Imports ---
import inauguration1 from "@/assets/cutting.jpg";
import inauguration2 from "@/assets/peoplesitting.jpg";
import inauguration3 from "@/assets/vilakkukathikkal.jpg";
import inauguration4 from "@/assets/vilakkukathikkal2.jpg";
import inauguration5 from "@/assets/photo of lighting ceremony.jpg";
import inauguration6 from "@/assets/giveflower.jpg";
import inauguration7 from "@/assets/giveflower2.jpg";
import inauguration8 from "@/assets/dance.jpg";
import inauguration9 from "@/assets/group.jpg";
import inauguration10 from "@/assets/singing.jpg";
import inauguration11 from "@/assets/pacha.jpg";

// --- Video Imports ---
import inaugurationVideo1 from "@/assets/danceing vedio.mp4";
import inaugurationVideo2 from "@/assets/vediomusic.mp4";
import inaugurationVideo3 from "@/assets/dancing.mp4";

const GallerySection = () => {
  const [fullscreenImage, setFullscreenImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  // 📸 Photos Array
  const inaugurationPhotos = [
    {
      id: 1,
      image: inauguration1,
      title: "Ribbon Cutting Ceremony",
      description: "Official inauguration with traditional decorations",
    },
    {
      id: 2,
      image: inauguration2,
      title: "Inauguration Ceremony",
      description: "Official inauguration with traditional decorations",
    },
    {
      id: 3,
      image: inauguration6,
      title: "Bouquet Presentation",
      description: "Presenting a bouquet of flowers",
    },
    {
      id: 4,
      image: inauguration7,
      title: "Bouquet Presentation",
      description: "Presenting a bouquet of flowers",
    },
    {
      id: 5,
      image: inauguration3,
      title: "Lamp Lighting Ceremony",
      description: "Auspicious beginning with classical traditions",
    },
    {
      id: 6,
      image: inauguration4,
      title: "Lamp Lighting Ceremony",
      description: "Traditional blessings for the academy",
    },
    {
      id: 7,
      image: inauguration5,
      title: "Lamp Lighting Ceremony",
      description: "Traditional blessings for the academy",
    },
    {
      id: 8,
      image: inauguration8,
      title: "Dance Performance",
      description: "A vibrant traditional dance showcasing our rich heritage",
    },
    {
      id: 9,
      image: inauguration10,
      title: "Musical Performance",
      description: "Melodious songs presented by talented performers",
    },
    {
      id: 10,
      image: inauguration11,
      title: "Musical Performance",
      description: "Melodious songs presented by talented performers",
    },
    {
      id: 11,
      image: inauguration9,
      title: "Group Photo of Contributors",
      description:
        "A special moment capturing the dedicated team who made the event possible",
    },
  ];

  // 🎥 Videos Array
  const inaugurationVideos = [
    { id: 1, src: inaugurationVideo1 },
    { id: 2, src: inaugurationVideo2 },
    { id: 3, src: inaugurationVideo3 },
  ];

  return (
    <section className="py-20 px-4 bg-cultural-cream/30">
      <div className="max-w-6xl mx-auto">
        {/* ---------- GALLERY HEADING ---------- */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
            Gallery
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Glimpses of our vibrant community, classes, and performances that
            showcase the beauty of Indian classical arts
          </p>
        </div>

        {/* ---------- PHOTO CAROUSEL ---------- */}
        <div className="mb-16 animate-fade-in">
          <h3 className="font-cultural text-2xl font-semibold text-primary mb-8 text-center">
            Academy Inauguration (Photos)
          </h3>
          <Carousel
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {inaugurationPhotos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <Card className="border-cultural-gold/20 bg-card/80 backdrop-blur-sm group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div
                      className="relative overflow-hidden rounded-lg"
                      onClick={() =>
                        setFullscreenImage({
                          src: photo.image,
                          title: photo.title,
                          description: photo.description,
                        })
                      }
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                            <ZoomIn className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                      {/* Title & Desc */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                        <h4 className="font-cultural text-xl font-semibold text-white mb-2 drop-shadow-lg">
                          {photo.title}
                        </h4>
                        <p className="font-elegant text-white/90 text-sm drop-shadow-md">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
            <CarouselNext className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
          </Carousel>
        </div>

        {/* ---------- VIDEO CAROUSEL ---------- */}
        <div className="mt-20 animate-fade-in">
          <h3 className="font-cultural text-2xl font-semibold text-primary mb-8 text-center">
            Inauguration Videos
          </h3>
          <Carousel
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {inaugurationVideos.map((video) => (
                <CarouselItem key={video.id}>
                  <Card className="border-cultural-gold/20 bg-card/80 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <video
                        src={video.src}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
            <CarouselNext className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-cultural-gold hover:border-cultural-gold" />
          </Carousel>
        </div>
      </div>

      {/* ---------- FULLSCREEN IMAGE MODAL ---------- */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20 transition-all duration-300 z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img
                src={fullscreenImage.src}
                alt={fullscreenImage.title}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <h3 className="font-cultural text-2xl font-semibold text-white mb-2 drop-shadow-lg">
                  {fullscreenImage.title}
                </h3>
                <p className="font-elegant text-white/90 text-lg drop-shadow-md">
                  {fullscreenImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
