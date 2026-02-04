import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const brands = ['BYD', 'Zeekr', 'BMW', 'Volkswagen', 'Honda', 'Hongqi', 'Li Auto', 'Voyah', 'Geely', 'Chery', 'Haval'];

const cars = [
  {
    id: 1,
    brand: 'BYD',
    model: 'Tang EV',
    year: 2024,
    price: 45000,
    image: '/placeholder.svg',
    engineVolume: 0,
    transmission: 'Автомат',
    color: 'Чёрный',
    range: 520,
    type: 'Электро'
  },
  {
    id: 2,
    brand: 'Zeekr',
    model: '001',
    year: 2024,
    price: 52000,
    image: '/placeholder.svg',
    engineVolume: 0,
    transmission: 'Автомат',
    color: 'Белый',
    range: 580,
    type: 'Электро'
  },
  {
    id: 3,
    brand: 'Hongqi',
    model: 'E-HS9',
    year: 2024,
    price: 68000,
    image: '/placeholder.svg',
    engineVolume: 0,
    transmission: 'Автомат',
    color: 'Серебристый',
    range: 510,
    type: 'Электро'
  },
  {
    id: 4,
    brand: 'Li Auto',
    model: 'L9',
    year: 2024,
    price: 58000,
    image: '/placeholder.svg',
    engineVolume: 1.5,
    transmission: 'Автомат',
    color: 'Чёрный',
    range: 1200,
    type: 'Гибрид'
  },
  {
    id: 5,
    brand: 'Geely',
    model: 'Monjaro',
    year: 2024,
    price: 38000,
    image: '/placeholder.svg',
    engineVolume: 2.0,
    transmission: 'Автомат',
    color: 'Синий',
    range: 0,
    type: 'Бензин'
  },
  {
    id: 6,
    brand: 'Chery',
    model: 'Tiggo 8 Pro Max',
    year: 2024,
    price: 32000,
    image: '/placeholder.svg',
    engineVolume: 2.0,
    transmission: 'Автомат',
    color: 'Серый',
    range: 0,
    type: 'Бензин'
  }
];

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [activeTab, setActiveTab] = useState('home');

  const filteredCars = cars.filter(car => {
    if (selectedBrand && car.brand !== selectedBrand) return false;
    if (selectedYear && car.year.toString() !== selectedYear) return false;
    if (selectedTransmission && car.transmission !== selectedTransmission) return false;
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-prussian-blue">
      <header className="fixed top-0 w-full z-50 bg-prussian-blue/95 backdrop-blur-sm border-b border-prussian-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/2aa358a5-d433-447b-b27c-6d1b5c7f3f77/bucket/a03d6457-f868-4a45-b6f5-682a0794491a.png" 
                alt="AVM Motors" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'home' ? 'text-fire-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveTab('catalog')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'catalog' ? 'text-fire-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveTab('promo')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'promo' ? 'text-fire-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                Акции
              </button>
            </nav>
            <Button className="bg-fire-red hover:bg-[#a51920] text-white font-semibold">
              +375 (29) 639-73-78
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {activeTab === 'home' && (
          <>
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#102335]/50 to-[#102335]" />
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
              <div className="container mx-auto px-4 relative z-10 text-center">
                <Badge className="mb-6 bg-fire-red/20 text-fire-red border-fire-red/50 text-sm px-4 py-1">10 лет опыта работы с Китаем</Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-fire-red to-white bg-clip-text text-transparent leading-tight">
                  Пригон автомобилей<br />из Китая в Беларусь
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Новые и с пробегом. Официально, прозрачно, с фиксированной ценой.<br />
                  Кредит и лизинг доступны.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-fire-red hover:bg-[#a51920] text-white font-semibold text-lg px-8 py-6"
                    onClick={() => setActiveTab('catalog')}
                  >
                    <Icon name="Car" className="mr-2" size={20} />
                    Подобрать автомобиль
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-[#102335] to-[#1a3248]">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-16">
                  Почему выбирают <span className="text-fire-red">AVM Motors</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: 'Shield',
                      title: 'Официальная схема',
                      description: 'Договор с фиксированной ценой, юридическая защита сделки'
                    },
                    {
                      icon: 'FileText',
                      title: 'Прозрачный расчёт',
                      description: 'Детализация на 100%: цена авто, логистика, таможня, услуги'
                    },
                    {
                      icon: 'Clock',
                      title: 'Быстрая доставка',
                      description: 'От 25 дней с полным сопровождением на всех этапах'
                    },
                    {
                      icon: 'Award',
                      title: '25 лет опыта',
                      description: 'Часть компании Avtovelomoto.by — лидера рынка техники'
                    },
                    {
                      icon: 'CreditCard',
                      title: 'Кредит и лизинг',
                      description: 'Возможность покупки в кредит или лизинг с официальным оформлением'
                    },
                    {
                      icon: 'Globe',
                      title: 'Эксперты по Китаю',
                      description: 'Глубокое знание рынка, прямые поставщики, проверка авто'
                    }
                  ].map((feature, idx) => (
                    <Card key={idx} className="bg-[#1a3248] border-[#2a4258] p-8 hover:border-fire-red transition-all duration-300 group">
                      <div className="w-16 h-16 bg-fire-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fire-red/20 transition-colors">
                        <Icon name={feature.icon as any} size={32} className="text-fire-red" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-[#1a3248]">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-16">
                  Работаем с <span className="text-fire-red">популярными брендами</span>
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  {brands.map((brand, idx) => (
                    <Card key={idx} className="bg-[#102335] border-[#2a4258] p-6 hover:border-fire-red transition-all duration-300 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-300">{brand}</span>
                    </Card>
                  ))}
                </div>
                <p className="text-center text-gray-400 mt-8">
                  и многие другие европейские и японские марки, представленные в Китае
                </p>
              </div>
            </section>
          </>
        )}

        {activeTab === 'catalog' && (
          <section className="py-32 min-h-screen">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-12 text-center">
                Каталог <span className="text-fire-red">автомобилей</span>
              </h2>

              <div className="mb-12 bg-[#1a3248] border border-[#2a4258] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Filter" size={20} className="text-fire-red" />
                  Фильтры
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <Label className="text-gray-300 mb-2 block">Бренд</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger className="bg-[#102335] border-[#2a4258]">
                        <SelectValue placeholder="Все бренды" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все бренды</SelectItem>
                        {brands.map(brand => (
                          <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-2 block">Год выпуска</Label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="bg-[#102335] border-[#2a4258]">
                        <SelectValue placeholder="Все годы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все годы</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-2 block">Тип КПП</Label>
                    <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                      <SelectTrigger className="bg-[#102335] border-[#2a4258]">
                        <SelectValue placeholder="Все типы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все типы</SelectItem>
                        <SelectItem value="Автомат">Автомат</SelectItem>
                        <SelectItem value="Механика">Механика</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-2 block">Цена: ${priceRange[0]} - ${priceRange[1]}</Label>
                    <Slider
                      min={0}
                      max={100000}
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="mt-4 text-fire-red hover:text-[#a51920]"
                  onClick={() => {
                    setSelectedBrand('');
                    setSelectedYear('');
                    setSelectedTransmission('');
                    setPriceRange([0, 100000]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {filteredCars.map(car => (
                  <Card key={car.id} className="bg-[#1a3248] border-[#2a4258] overflow-hidden hover:border-fire-red transition-all duration-300 group">
                    <div className="aspect-video bg-[#102335] relative overflow-hidden">
                      <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <Badge className="absolute top-4 right-4 bg-fire-red text-white font-semibold">
                        {car.type}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold">{car.brand} {car.model}</h4>
                          <p className="text-gray-400">{car.year} год</p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-fire-red">${car.price.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Icon name="Gauge" size={16} />
                          <span>Двигатель: {car.engineVolume > 0 ? `${car.engineVolume}L` : 'Электро'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Icon name="Settings" size={16} />
                          <span>КПП: {car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Icon name="Palette" size={16} />
                          <span>Цвет: {car.color}</span>
                        </div>
                        {car.range > 0 && (
                          <div className="flex items-center gap-2 text-gray-400">
                            <Icon name="Battery" size={16} />
                            <span>Запас хода: {car.range} км</span>
                          </div>
                        )}
                      </div>

                      <Button className="w-full bg-fire-red hover:bg-[#a51920] text-white font-semibold">
                        Подробнее
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredCars.length === 0 && (
                <div className="text-center py-20">
                  <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-500" />
                  <p className="text-xl text-gray-400">По вашему запросу ничего не найдено</p>
                  <p className="text-gray-500 mt-2">Попробуйте изменить параметры фильтра</p>
                </div>
              )}
            </div>
          </section>
        )}



        {activeTab === 'promo' && (
          <section className="py-32 min-h-screen">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-12 text-center">
                Акции и <span className="text-fire-red">специальные предложения</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-gradient-to-br from-fire-red to-[#a51920] border-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Percent" size={32} />
                    <h3 className="text-2xl font-bold">Первый автомобиль</h3>
                  </div>
                  <p className="text-lg mb-6">
                    Скидка 5% на услуги при первом заказе автомобиля из Китая через AVM Motors
                  </p>
                  <Badge className="bg-white/20 text-white border-0">До конца месяца</Badge>
                </Card>

                <Card className="bg-[#1a3248] border-fire-red p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Users" size={32} className="text-fire-red" />
                    <h3 className="text-2xl font-bold">Приведи друга</h3>
                  </div>
                  <p className="text-lg mb-6 text-gray-300">
                    Получите бонус $500 за каждого приведённого клиента, купившего автомобиль
                  </p>
                  <Badge className="bg-fire-red/20 text-fire-red border-fire-red/50">Постоянная акция</Badge>
                </Card>

                <Card className="bg-[#1a3248] border-[#2a4258] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Zap" size={32} className="text-fire-red" />
                    <h3 className="text-2xl font-bold">Электромобили</h3>
                  </div>
                  <p className="text-lg mb-6 text-gray-300">
                    Специальные условия на пригон электромобилей — бесплатная консультация по зарядным станциям
                  </p>
                  <Badge className="bg-fire-red/20 text-fire-red border-fire-red/50">Актуально</Badge>
                </Card>

                <Card className="bg-[#1a3248] border-[#2a4258] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="CreditCard" size={32} className="text-fire-red" />
                    <h3 className="text-2xl font-bold">Кредит 0%</h3>
                  </div>
                  <p className="text-lg mb-6 text-gray-300">
                    Возможность оформления кредита под 0% годовых на 6 месяцев от банков-партнёров
                  </p>
                  <Badge className="bg-fire-red/20 text-fire-red border-fire-red/50">Условия банка</Badge>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#102335] border-t border-[#2a4258] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-fire-red">AVM Motors</h4>
              <p className="text-gray-400 text-sm">
                Профильное подразделение Avtovelomoto.by по пригону автомобилей из Китая
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пригон новых авто</li>
                <li>Пригон авто с пробегом</li>
                <li>Электромобили</li>
                <li>Кредит и лизинг</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Условия оплаты</li>
                <li>Условия доставки</li>
                <li>Гарантии</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-3 text-sm">
                <p className="text-fire-red font-semibold">+375 (29) 639-73-78</p>
                <p className="text-gray-400">Беларусь, Минск</p>
                <div className="flex gap-3 mt-4">
                  <Icon name="Facebook" size={20} className="text-gray-400 hover:text-fire-red cursor-pointer transition-colors" />
                  <Icon name="Instagram" size={20} className="text-gray-400 hover:text-fire-red cursor-pointer transition-colors" />
                  <Icon name="Youtube" size={20} className="text-gray-400 hover:text-fire-red cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2a4258] pt-8 text-center text-sm text-gray-500">
            <p>© 2024 AVM Motors. Все права защищены. Часть компании Avtovelomoto.by</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;