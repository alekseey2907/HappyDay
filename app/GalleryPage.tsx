import Image from 'next/image';

interface GalleryPageProps {
  photos: string[];
  onImageClick: (index: number) => void;
}

export default function GalleryPage({ photos, onImageClick }: GalleryPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
        Красивые фотографии 📸
      </h2>
     
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => onImageClick(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-semibold">Фото {index + 1}</p>
            </div>
            <Image
              src={photo}
              alt={`Фото ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-pink-600 text-lg">
          💝 {photos.length} прекрасных воспоминаний 💝
        </p>
      </div>
    </div>
  );
}
