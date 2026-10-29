import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Header = () => {
  const location = useLocation();

  // Функция для активной ссылки (теперь белая и оранжевая)
  const navLink = (path: string, text: string) => (
    <Link 
      to={path} 
      className={`font-medium transition-colors ${
        location.pathname === path 
          ? 'text-brand' // Активная ссылка — брендовый оранжевый
          : 'text-gray-200 hover:text-white' // Обычные ссылки — светло-серые
      }`}
    >
      {text}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50">
      {/* ТЕМНАЯ СТЕКЛЯННАЯ ПОДЛОЖКА */}
<div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700 shadow-[0_4px_30px_rgba(0,0,0,0.3)] -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-8">
          
          {/* Логотип (белый) */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white hover:opacity-80 transition-opacity flex-shrink-0">
            <span className="text-3xl">🍳</span> 
            <span className="hidden sm:block">Кулинар</span>
          </Link>

          {/* Поиск (темный инпут с белым текстом) */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Найти рецепт..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-white focus:bg-white/20 focus:ring-2 focus:ring-brand/50 outline-none transition-all text-sm placeholder-gray-400"
              />
              <span className="absolute left-4 top-2.5 text-gray-400 text-lg group-focus-within:text-brand transition-colors">🔍</span>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex gap-8">
            {navLink('/', 'Главная')}
            {navLink('/recipes', 'Рецепты')}
            {navLink('/categories', 'Категории')}
          </nav>

          {/* Кнопки авторизации */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-200 font-medium hover:text-white transition-colors whitespace-nowrap">
              Войти
            </Link>
            <Link to="/register">
              {/* Кнопку регистрации делаем ярко-оранжевой */}
              <Button className="hidden sm:flex px-5 py-2.5 text-sm bg-brand hover:bg-orange-600 text-white border-none shadow-brand/20">
                Регистрация
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};