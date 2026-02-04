import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

  const [carPrice, setCarPrice] = useState(50000);
  const [engineVolume, setEngineVolume] = useState(2.0);

  const calculateCustoms = () => {
    const rate = 0.3;
    const logistics = 3500;
    const customs = carPrice * rate;
    const total = carPrice + customs + logistics;
    return { customs, logistics, total };
  };

  const filteredCars = cars.filter(car => {
    if (selectedBrand && car.brand !== selectedBrand) return false;
    if (selectedYear && car.year.toString() !== selectedYear) return false;
    if (selectedTransmission && car.transmission !== selectedTransmission) return false;
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AVM Motors</h1>
                <p className="text-xs text-[#D4AF37]">Пригон авто из Китая</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'home' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveTab('catalog')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'catalog' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveTab('calculator')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'calculator' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Калькулятор
              </button>
              <button
                onClick={() => setActiveTab('promo')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'promo' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Акции
              </button>
            </nav>
            <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold">
              +375 (29) 639-73-78
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {activeTab === 'home' && (
          <>
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
              <div className="container mx-auto px-4 relative z-10 text-center">
                <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50 text-sm px-4 py-1">
                  25 лет опыта работы с Китаем
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent leading-tight">
                  Пригон автомобилей<br />из Китая в Беларусь
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Новые и с пробегом. Официально, прозрачно, с фиксированной ценой.<br />
                  Кредит и лизинг доступны.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold text-lg px-8 py-6"
                    onClick={() => setActiveTab('catalog')}
                  >
                    <Icon name="Car" className="mr-2" size={20} />
                    Подобрать автомобиль
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8 py-6"
                    onClick={() => setActiveTab('calculator')}
                  >
                    <Icon name="Calculator" className="mr-2" size={20} />
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-16">
                  Почему выбирают <span className="text-[#D4AF37]">AVM Motors</span>
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
                    <Card key={idx} className="bg-[#1A1A1A] border-[#2A2A2A] p-8 hover:border-[#D4AF37] transition-all duration-300 group">
                      <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                        <Icon name={feature.icon as any} size={32} className="text-[#D4AF37]" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-[#1A1A1A]">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-16">
                  Работаем с <span className="text-[#D4AF37]">популярными брендами</span>
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  {brands.map((brand, idx) => (
                    <Card key={idx} className="bg-[#0A0A0A] border-[#2A2A2A] p-6 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center">
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
                Каталог <span className="text-[#D4AF37]">автомобилей</span>
              </h2>

              <div className="mb-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Filter" size={20} className="text-[#D4AF37]" />
                  Фильтры
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <Label className="text-gray-300 mb-2 block">Бренд</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger className="bg-[#0A0A0A] border-[#2A2A2A]">
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
                      <SelectTrigger className="bg-[#0A0A0A] border-[#2A2A2A]">
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
                      <SelectTrigger className="bg-[#0A0A0A] border-[#2A2A2A]">
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
                  className="mt-4 text-[#D4AF37] hover:text-[#B8941F]"
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
                  <Card key={car.id} className="bg-[#1A1A1A] border-[#2A2A2A] overflow-hidden hover:border-[#D4AF37] transition-all duration-300 group">
                    <div className="aspect-video bg-[#0A0A0A] relative overflow-hidden">
                      <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black font-semibold">
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
                          <p className="text-3xl font-bold text-[#D4AF37]">${car.price.toLocaleString()}</p>
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

                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold">
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

        {activeTab === 'calculator' && (
          <section className="py-32 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-5xl font-bold mb-12 text-center">
                Калькулятор <span className="text-[#D4AF37]">стоимости</span>
              </h2>

              <Card className="bg-[#1A1A1A] border-[#2A2A2A] p-8">
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg mb-4 block">Стоимость автомобиля в Китае ($)</Label>
                    <Input
                      type="number"
                      value={carPrice}
                      onChange={(e) => setCarPrice(Number(e.target.value))}
                      className="bg-[#0A0A0A] border-[#2A2A2A] text-2xl h-16"
                    />
                    <Slider
                      min={10000}
                      max={150000}
                      step={1000}
                      value={[carPrice]}
                      onValueChange={(val) => setCarPrice(val[0])}
                      className="mt-4"
                    />
                  </div>

                  <div>
                    <Label className="text-lg mb-4 block">Объём двигателя (L)</Label>
                    <Select value={engineVolume.toString()} onValueChange={(val) => setEngineVolume(Number(val))}>
                      <SelectTrigger className="bg-[#0A0A0A] border-[#2A2A2A] h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Электро</SelectItem>
                        <SelectItem value="1.5">1.5L</SelectItem>
                        <SelectItem value="2.0">2.0L</SelectItem>
                        <SelectItem value="2.5">2.5L</SelectItem>
                        <SelectItem value="3.0">3.0L</SelectItem>
                        <SelectItem value="3.5">3.5L</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-lg p-6 border border-[#D4AF37]/30">
                    <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">Детализация стоимости</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A]">
                        <span className="text-gray-400">Стоимость автомобиля</span>
                        <span className="text-xl font-semibold">${carPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A]">
                        <span className="text-gray-400">Таможенные платежи (≈30%)</span>
                        <span className="text-xl font-semibold">${calculateCustoms().customs.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A]">
                        <span className="text-gray-400">Логистика и доставка</span>
                        <span className="text-xl font-semibold">${calculateCustoms().logistics.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-xl font-bold">Итоговая стоимость</span>
                        <span className="text-3xl font-bold text-[#D4AF37]">${calculateCustoms().total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    * Расчёт является ориентировочным. Точная стоимость рассчитывается индивидуально.
                  </p>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold h-14 text-lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Получить точный расчёт
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        )}

        {activeTab === 'promo' && (
          <section className="py-32 min-h-screen">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-12 text-center">
                Акции и <span className="text-[#D4AF37]">специальные предложения</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] border-0 p-8 text-black">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Percent" size={32} />
                    <h3 className="text-2xl font-bold">Первый автомобиль</h3>
                  </div>
                  <p className="text-lg mb-6">
                    Скидка 5% на услуги при первом заказе автомобиля из Китая через AVM Motors
                  </p>
                  <Badge className="bg-black/20 text-black border-0">До конца месяца</Badge>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#D4AF37] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Users" size={32} className="text-[#D4AF37]" />
                    <h3 className="text-2xl font-bold">Приведи друга</h3>
                  </div>
                  <p className="text-lg mb-6 text-gray-300">
                    Получите бонус $500 за каждого приведённого клиента, купившего автомобиль
                  </p>
                  <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50">Постоянная акция</Badge>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#2A2A2A] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Zap" size={32} className="text-[#D4AF37]" />
                    <h3 className="text-2xl font-bold">Электромобили</h3>
                  </div>
                  <p className="text-lg mb-6 text-gray-300">
                    Специальные условия на пригон электромобилей — бесплатная консультация по зарядным станциям
                  </p>
                  <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50">Актуально</Badge>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#2A2A2A] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="CreditCard" size={32} className="text-[#D4AF37]" />
                    <h3 className="text-2xl font-bold">Кредит 0%</h3>
                  </div>
                  <p className="text-lg mb-6 text-gray-300">
                    Возможность оформления кредита под 0% годовых на 6 месяцев от банков-партнёров
                  </p>
                  <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50">Условия банка</Badge>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">AVM Motors</h4>
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
                <p className="text-[#D4AF37] font-semibold">+375 (29) 639-73-78</p>
                <p className="text-gray-400">Беларусь, Минск</p>
                <div className="flex gap-3 mt-4">
                  <Icon name="Facebook" size={20} className="text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                  <Icon name="Instagram" size={20} className="text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                  <Icon name="Youtube" size={20} className="text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2A2A2A] pt-8 text-center text-sm text-gray-500">
            <p>© 2024 AVM Motors. Все права защищены. Часть компании Avtovelomoto.by</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
