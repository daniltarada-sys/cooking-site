import { Link } from 'react-router-dom';
import { RecipeCard } from '../components/ui/RecipeCard';
import { Button } from '../components/ui/Button';

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
        
        {/* Декоративный фон */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50 to-surface -z-10"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-dark mb-6 leading-tight">
          Готовь <span className="text-orange-500">вкусно</span>.<br />
          Ешь с удовольствием.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Тысячи проверенных рецептов, пошаговые инструкции и список покупок в один клик. Твой идеальный кулинарный помощник.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/register">
            <Button className="w-full sm:w-auto text-lg px-8 py-4">
              Начать готовить
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
              У меня есть аккаунт
            </Button>
          </Link>
        </div>

        {/* Картинки еды (пока без них, чтобы не было пустых квадратов) */}
        {/* Секция с популярными рецептами */}
        <div className="mt-24 w-full max-w-6xl">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-dark">Популярные рецепты</h2>
              <p className="text-gray-500 mt-2">Самое вкусное за последнюю неделю</p>
            </div>
            <button className="text-brand font-semibold hover:underline hidden sm:block">Смотреть все</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <RecipeCard 
              title="Идеальная паста Карбонара" 
              time="30 мин" 
              category="Паста"
              image="https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80" 
            />
            <RecipeCard 
              title="Сочный бургер с говядиной" 
              time="25 мин" 
              category="Фастфуд"
              image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" 
            />
            <RecipeCard 
              title="Греческий салат с фетой" 
              time="15 мин" 
              category="Салаты"
              image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};