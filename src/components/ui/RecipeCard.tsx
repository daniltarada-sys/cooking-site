import { Button } from './Button';

interface RecipeCardProps {
  title: string;
  time: string;
  image: string;
  category: string;
}

export const RecipeCard = ({ title, time, image, category }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col">
      {/* Картинка */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Плашка категории */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm">
          {category}
        </div>
      </div>
      
      {/* Контент */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark leading-tight mb-3 group-hover:text-brand transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-6 mt-auto">
          <span className="flex items-center gap-1">⏱ {time}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center gap-1">👨‍🍳 Легко</span>
        </div>

        <Button variant="outline" className="w-full text-sm py-2.5 rounded-lg border-gray-200 hover:border-brand hover:bg-brand/5">
          Смотреть рецепт
        </Button>
      </div>
    </div>
  );
};