import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [selectedNpa, setSelectedNpa] = useState<number | null>(null);
  const { toast } = useToast();

  const npaData = [
    { 
      id: 1, 
      title: 'ТК РФ Глава 34. Охрана труда', 
      date: '01.01.2024', 
      category: 'Законы', 
      status: 'active',
      content: `Трудовой кодекс Российской Федерации
Глава 34. ОХРАНА ТРУДА

Статья 209. Основные понятия

Охрана труда - система сохранения жизни и здоровья работников в процессе трудовой деятельности, включающая в себя правовые, социально-экономические, организационно-технические, санитарно-гигиенические, лечебно-профилактические, реабилитационные и иные мероприятия.

Условия труда - совокупность факторов производственной среды и трудового процесса, оказывающих влияние на работоспособность и здоровье работника.

Вредный производственный фактор - производственный фактор, воздействие которого на работника может привести к его заболеванию.

Опасный производственный фактор - производственный фактор, воздействие которого на работника может привести к его травме.

Безопасные условия труда - условия труда, при которых воздействие на работающих вредных и (или) опасных производственных факторов исключено либо уровни их воздействия не превышают установленных нормативов.

Статья 210. Основные направления государственной политики в области охраны труда

Основными направлениями государственной политики в области охраны труда являются:

- обеспечение приоритета сохранения жизни и здоровья работников;
- принятие и реализация федеральных законов и иных нормативных правовых актов Российской Федерации, законов и иных нормативных правовых актов субъектов Российской Федерации в области охраны труда;
- государственное управление охраной труда;
- федеральный государственный надзор за соблюдением трудового законодательства и иных нормативных правовых актов, содержащих нормы трудового права;
- содействие общественному контролю за соблюдением прав и законных интересов работников в области охраны труда;
- расследование и учет несчастных случаев на производстве и профессиональных заболеваний;
- защита законных интересов работников, пострадавших от несчастных случаев на производстве и профессиональных заболеваний;
- установление компенсаций за тяжелую работу и работу с вредными и (или) опасными условиями труда;
- координация деятельности в области охраны труда;
- распространение передового отечественного и зарубежного опыта работы по улучшению условий и охраны труда;
- участие государства в финансировании мероприятий по охране труда;
- подготовка специалистов по охране труда и повышение их квалификации;
- организация государственной статистической отчетности об условиях труда, а также о производственном травматизме, профессиональной заболеваемости и об их материальных последствиях;
- обеспечение функционирования единой информационной системы охраны труда;
- международное сотрудничество в области охраны труда;
- проведение эффективной налоговой политики, стимулирующей создание безопасных условий труда;
- установление порядка обеспечения работников средствами индивидуальной и коллективной защиты;
- оптимизация режимов труда и отдыха работников;
- гарантии права работников на охрану труда.

Статья 211. Государственные нормативные требования охраны труда

Государственные нормативные требования охраны труда обязательны для исполнения юридическими и физическими лицами при осуществлении ими любых видов деятельности.

Государственные нормативные требования охраны труда устанавливаются в порядке, определяемом Правительством Российской Федерации.

Статья 212. Обязанности работодателя по обеспечению безопасных условий и охраны труда

Обязанности по обеспечению безопасных условий и охраны труда возлагаются на работодателя.

Работодатель обязан обеспечить:

- безопасность работников при эксплуатации зданий, сооружений, оборудования;
- создание и функционирование системы управления охраной труда;
- применение прошедших обязательную сертификацию или декларирование соответствия средств индивидуальной и коллективной защиты работников;
- соответствующие требованиям охраны труда условия труда на каждом рабочем месте;
- режим труда и отдыха работников в соответствии с трудовым законодательством;
- приобретение и выдачу за счет собственных средств специальной одежды, специальной обуви и других средств индивидуальной защиты;
- обучение безопасным методам и приемам выполнения работ и оказанию первой помощи пострадавшим на производстве, проведение инструктажа по охране труда;
- недопущение к работе лиц, не прошедших обучение и инструктаж по охране труда;
- организацию контроля за состоянием условий труда на рабочих местах;
- проведение специальной оценки условий труда;
- в случаях, предусмотренных трудовым законодательством, организацию обязательных предварительных и периодических медицинских осмотров;
- недопущение работников к исполнению ими трудовых обязанностей без прохождения медицинских осмотров;
- информирование работников об условиях и охране труда на рабочих местах, о риске повреждения здоровья;
- предоставление федеральным органам исполнительной власти информации и документов, необходимых для осуществления ими своих полномочий;
- принятие мер по предотвращению аварийных ситуаций, сохранению жизни и здоровья работников;
- расследование и учет несчастных случаев на производстве и профессиональных заболеваний;
- санитарно-бытовое обслуживание и медицинское обеспечение работников;
- обязательное социальное страхование работников от несчастных случаев на производстве и профессиональных заболеваний;
- ознакомление работников с требованиями охраны труда;
- разработку и утверждение правил и инструкций по охране труда для работников;
- наличие комплекта нормативных правовых актов, содержащих требования охраны труда.

Статья 214. Обязанности работника в области охраны труда

Работник обязан:

- соблюдать требования охраны труда;
- правильно применять средства индивидуальной и коллективной защиты;
- проходить обучение безопасным методам и приемам выполнения работ и оказанию первой помощи пострадавшим на производстве;
- проходить обязательные предварительные и периодические медицинские осмотры;
- извещать немедленно своего непосредственного или вышестоящего руководителя о любой ситуации, угрожающей жизни и здоровью людей;
- проходить обязательное психиатрическое освидетельствование по решению работодателя.`
    },
    { id: 2, title: 'Приказ Минтруда России от 29.10.2021 N 774н', date: '15.12.2023', category: 'Приказы', status: 'active', content: 'Содержание приказа будет добавлено позже...' },
    { id: 3, title: 'ГОСТ 12.0.004-2015 ССБТ', date: '20.11.2023', category: 'ГОСТы', status: 'active', content: 'Содержание ГОСТа будет добавлено позже...' },
    { id: 4, title: 'СП 2.2.3670-20 Санитарные правила', date: '10.10.2023', category: 'СанПиН', status: 'active', content: 'Содержание санитарных правил будет добавлено позже...' },
  ];

  const trainingData = [
    { id: 1, name: 'Иванов И.И.', position: 'Менеджер', lastTest: '15.01.2024', score: 95, status: 'Пройдено' },
    { id: 2, name: 'Петров П.П.', position: 'Специалист', lastTest: '10.01.2024', score: 82, status: 'Пройдено' },
    { id: 3, name: 'Сидорова С.С.', position: 'Инженер', lastTest: '20.12.2023', score: 78, status: 'Требует повтор' },
    { id: 4, name: 'Козлов К.К.', position: 'Техник', lastTest: '-', score: 0, status: 'Не пройдено' },
  ];

  const handleGenerateDocument = (docType: string) => {
    toast({
      title: "Документ сформирован",
      description: `${docType} успешно создан и готов к скачиванию`,
    });
  };

  const handleStartTest = () => {
    toast({
      title: "Тестирование запущено",
      description: "Сотрудник получит уведомление с ссылкой на тест",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Icon name="Shield" className="text-primary" size={32} />
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">ОТ Система</h1>
              <p className="text-xs text-sidebar-foreground/60">Охрана труда</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('main')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'main' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name="Home" size={20} />
              <span className="font-medium">Главная</span>
            </button>

            <button
              onClick={() => setActiveSection('npa')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'npa' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name="BookOpen" size={20} />
              <span className="font-medium">НПА</span>
            </button>

            <button
              onClick={() => setActiveSection('training')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'training' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name="GraduationCap" size={20} />
              <span className="font-medium">Обучение</span>
            </button>

            <button
              onClick={() => setActiveSection('documents')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'documents' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name="FileText" size={20} />
              <span className="font-medium">Документы</span>
            </button>

            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'profile' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name="User" size={20} />
              <span className="font-medium">Профиль</span>
            </button>
          </nav>
        </div>
      </aside>

      <main className="ml-64 p-8">
        {activeSection === 'main' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Панель управления</h2>
              <p className="text-muted-foreground">Система управления охраной труда</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="hover-scale cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Всего НПА</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">247</div>
                    <Icon name="BookOpen" className="text-primary" size={32} />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Обучено сотрудников</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">182</div>
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Документов создано</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">156</div>
                    <Icon name="FileText" className="text-primary" size={32} />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Требуют внимания</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-destructive">12</div>
                    <Icon name="AlertCircle" className="text-destructive" size={32} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Последние обновления НПА</CardTitle>
                  <CardDescription>Актуальные изменения в нормативной базе</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {npaData.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                        </div>
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Статистика обучения</CardTitle>
                  <CardDescription>Результаты за последний месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Успешно пройдено</span>
                      <span className="text-2xl font-bold text-primary">87%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">45</p>
                        <p className="text-xs text-muted-foreground">Тестов пройдено</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-xs text-muted-foreground">Ожидают проверки</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'npa' && !selectedNpa && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Нормативно-правовые акты</h2>
              <p className="text-muted-foreground">База актуальных документов по охране труда</p>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input placeholder="Поиск по названию, номеру или тексту документа..." />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Все категории" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      <SelectItem value="laws">Законы</SelectItem>
                      <SelectItem value="orders">Приказы</SelectItem>
                      <SelectItem value="gost">ГОСТы</SelectItem>
                      <SelectItem value="sanpin">СанПиН</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Icon name="Search" size={16} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {npaData.map((item) => (
                <Card key={item.id} className="hover-scale cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge>{item.category}</Badge>
                          <Badge variant="outline" className="text-xs">Актуально</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Дата последнего обновления: {item.date}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setSelectedNpa(item.id)}>
                            <Icon name="Eye" size={16} className="mr-2" />
                            Просмотреть
                          </Button>
                          <Button size="sm" variant="outline">
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать PDF
                          </Button>
                          <Button size="sm" variant="outline">
                            <Icon name="Share2" size={16} className="mr-2" />
                            Поделиться
                          </Button>
                        </div>
                      </div>
                      <Icon name="FileText" className="text-muted-foreground" size={48} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'npa' && selectedNpa && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedNpa(null)}
                className="mb-4"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад к списку НПА
              </Button>
              
              {npaData.filter(item => item.id === selectedNpa).map((item) => (
                <div key={item.id}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge>{item.category}</Badge>
                        <Badge variant="outline">Актуально</Badge>
                        <span className="text-sm text-muted-foreground">Обновлено: {item.date}</span>
                      </div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">{item.title}</h1>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Printer" size={16} className="mr-2" />
                        Печать
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Share2" size={16} className="mr-2" />
                        Поделиться
                      </Button>
                    </div>
                  </div>

                  <Card>
                    <CardContent className="pt-6">
                      <ScrollArea className="h-[calc(100vh-300px)]">
                        <div className="prose prose-sm max-w-none">
                          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
                            {item.content}
                          </pre>
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'training' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Обучение и проверка знаний</h2>
              <p className="text-muted-foreground">Управление обучением персонала по охране труда</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="hover-scale cursor-pointer border-2 border-primary/20 hover:border-primary transition-colors">
                    <CardContent className="pt-6 text-center">
                      <Icon name="Plus" className="mx-auto mb-3 text-primary" size={48} />
                      <h3 className="font-semibold text-lg mb-2">Назначить тест</h3>
                      <p className="text-sm text-muted-foreground">Создать и назначить новый тест сотруднику</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Назначить тест сотруднику</DialogTitle>
                    <DialogDescription>
                      Выберите сотрудника и тему для проверки знаний
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>ФИО сотрудника</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите сотрудника" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emp1">Иванов Иван Иванович</SelectItem>
                          <SelectItem value="emp2">Петров Петр Петрович</SelectItem>
                          <SelectItem value="emp3">Сидорова Светлана Сергеевна</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Тема тестирования</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="safety">Общие вопросы охраны труда</SelectItem>
                          <SelectItem value="fire">Пожарная безопасность</SelectItem>
                          <SelectItem value="electric">Электробезопасность</SelectItem>
                          <SelectItem value="first-aid">Первая помощь</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Срок выполнения</Label>
                      <Input type="date" />
                    </div>
                    <Button onClick={handleStartTest} className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Назначить тест
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Card className="hover-scale cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Icon name="BarChart3" className="mx-auto mb-3 text-primary" size={48} />
                  <h3 className="font-semibold text-lg mb-2">Статистика</h3>
                  <p className="text-sm text-muted-foreground">Отчеты и аналитика по обучению</p>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Icon name="Settings" className="mx-auto mb-3 text-primary" size={48} />
                  <h3 className="font-semibold text-lg mb-2">Настройки</h3>
                  <p className="text-sm text-muted-foreground">Темы и параметры тестирования</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Список сотрудников</CardTitle>
                <CardDescription>Результаты обучения и проверки знаний</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {trainingData.map((employee) => (
                      <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon name="User" className="text-primary" size={24} />
                          </div>
                          <div>
                            <p className="font-semibold">{employee.name}</p>
                            <p className="text-sm text-muted-foreground">{employee.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Последний тест</p>
                            <p className="font-medium">{employee.lastTest}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Результат</p>
                            <p className="font-bold text-lg">{employee.score > 0 ? `${employee.score}%` : '-'}</p>
                          </div>
                          <Badge variant={employee.status === 'Пройдено' ? 'default' : employee.status === 'Требует повтор' ? 'secondary' : 'destructive'}>
                            {employee.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Icon name="FileText" size={16} className="mr-2" />
                            Детали
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Генерация документов</h2>
              <p className="text-muted-foreground">Создание приказов, актов и направлений в режиме online</p>
            </div>

            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="orders">Приказы</TabsTrigger>
                <TabsTrigger value="acts">Акты Н-1</TabsTrigger>
                <TabsTrigger value="medical">Направления на МО</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-colors">
                        <CardContent className="pt-6">
                          <Icon name="FileSignature" className="mb-3 text-primary" size={36} />
                          <h3 className="font-semibold text-lg mb-2">Приказ о назначении ответственного</h3>
                          <p className="text-sm text-muted-foreground mb-4">Назначение ответственного за охрану труда</p>
                          <Button className="w-full">Создать приказ</Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Приказ о назначении ответственного за охрану труда</DialogTitle>
                        <DialogDescription>Заполните данные для формирования приказа</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Номер приказа</Label>
                            <Input placeholder="№ 45-ОТ" />
                          </div>
                          <div>
                            <Label>Дата</Label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div>
                          <Label>ФИО назначаемого</Label>
                          <Input placeholder="Иванов Иван Иванович" />
                        </div>
                        <div>
                          <Label>Должность</Label>
                          <Input placeholder="Инженер по охране труда" />
                        </div>
                        <div>
                          <Label>Основание</Label>
                          <Textarea placeholder="В соответствии с требованиями..." rows={3} />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => handleGenerateDocument('Приказ о назначении')} className="flex-1">
                            <Icon name="FileCheck" size={16} className="mr-2" />
                            Сформировать
                          </Button>
                          <Button variant="outline">
                            <Icon name="Eye" size={16} className="mr-2" />
                            Предпросмотр
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-colors">
                        <CardContent className="pt-6">
                          <Icon name="ClipboardList" className="mb-3 text-primary" size={36} />
                          <h3 className="font-semibold text-lg mb-2">Приказ о проведении инструктажа</h3>
                          <p className="text-sm text-muted-foreground mb-4">Назначение инструктажа по охране труда</p>
                          <Button className="w-full">Создать приказ</Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Приказ о проведении инструктажа</DialogTitle>
                        <DialogDescription>Укажите параметры инструктажа</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Номер приказа</Label>
                            <Input placeholder="№ 46-ОТ" />
                          </div>
                          <div>
                            <Label>Дата</Label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div>
                          <Label>Вид инструктажа</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите вид" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="initial">Вводный</SelectItem>
                              <SelectItem value="primary">Первичный</SelectItem>
                              <SelectItem value="repeat">Повторный</SelectItem>
                              <SelectItem value="unscheduled">Внеплановый</SelectItem>
                              <SelectItem value="target">Целевой</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Сотрудники (через запятую)</Label>
                          <Textarea placeholder="Иванов И.И., Петров П.П., Сидорова С.С." rows={2} />
                        </div>
                        <div>
                          <Label>Ответственный за проведение</Label>
                          <Input placeholder="ФИО и должность" />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => handleGenerateDocument('Приказ о проведении инструктажа')} className="flex-1">
                            <Icon name="FileCheck" size={16} className="mr-2" />
                            Сформировать
                          </Button>
                          <Button variant="outline">
                            <Icon name="Eye" size={16} className="mr-2" />
                            Предпросмотр
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TabsContent>

              <TabsContent value="acts">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-colors">
                      <CardContent className="pt-6">
                        <Icon name="AlertTriangle" className="mb-3 text-destructive" size={36} />
                        <h3 className="font-semibold text-lg mb-2">Акт о несчастном случае на производстве (Н-1)</h3>
                        <p className="text-sm text-muted-foreground mb-4">Оформление несчастного случая по форме Н-1</p>
                        <Button className="w-full">Создать акт Н-1</Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Акт о несчастном случае на производстве по форме Н-1</DialogTitle>
                      <DialogDescription>Заполните все обязательные поля для оформления акта</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Дата несчастного случая</Label>
                          <Input type="date" />
                        </div>
                        <div>
                          <Label>Время</Label>
                          <Input type="time" />
                        </div>
                      </div>
                      <Separator />
                      <h4 className="font-semibold">Сведения о пострадавшем</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>ФИО пострадавшего</Label>
                          <Input placeholder="Полностью" />
                        </div>
                        <div>
                          <Label>Дата рождения</Label>
                          <Input type="date" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Должность</Label>
                          <Input placeholder="Должность пострадавшего" />
                        </div>
                        <div>
                          <Label>Стаж работы</Label>
                          <Input placeholder="Лет/месяцев" />
                        </div>
                      </div>
                      <Separator />
                      <h4 className="font-semibold">Обстоятельства несчастного случая</h4>
                      <div>
                        <Label>Место происшествия</Label>
                        <Input placeholder="Точное место происшествия" />
                      </div>
                      <div>
                        <Label>Описание обстоятельств</Label>
                        <Textarea placeholder="Подробное описание произошедшего..." rows={4} />
                      </div>
                      <div>
                        <Label>Характер полученных повреждений</Label>
                        <Textarea placeholder="Описание травм и повреждений..." rows={2} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Причины несчастного случая</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Основная причина" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="equipment">Неисправность оборудования</SelectItem>
                              <SelectItem value="violation">Нарушение инструкций</SelectItem>
                              <SelectItem value="absence">Отсутствие инструктажа</SelectItem>
                              <SelectItem value="other">Другое</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Виновные лица</Label>
                          <Input placeholder="ФИО (если установлены)" />
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <Label>Меры по предотвращению подобных случаев</Label>
                        <Textarea placeholder="Предложения и рекомендации..." rows={3} />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => handleGenerateDocument('Акт Н-1')} className="flex-1">
                          <Icon name="FileCheck" size={16} className="mr-2" />
                          Сформировать акт
                        </Button>
                        <Button variant="outline">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Предпросмотр
                        </Button>
                        <Button variant="outline">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TabsContent>

              <TabsContent value="medical">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-colors">
                      <CardContent className="pt-6">
                        <Icon name="Stethoscope" className="mb-3 text-primary" size={36} />
                        <h3 className="font-semibold text-lg mb-2">Направление на медицинский осмотр</h3>
                        <p className="text-sm text-muted-foreground mb-4">Оформление направления на предварительный или периодический осмотр</p>
                        <Button className="w-full">Создать направление</Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Направление на медицинский осмотр</DialogTitle>
                      <DialogDescription>Заполните данные для направления сотрудника на медосмотр</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Вид медосмотра</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите вид" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="preliminary">Предварительный (при приеме на работу)</SelectItem>
                            <SelectItem value="periodic">Периодический</SelectItem>
                            <SelectItem value="extraordinary">Внеочередной</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Separator />
                      <h4 className="font-semibold">Сведения о сотруднике</h4>
                      <div>
                        <Label>ФИО сотрудника</Label>
                        <Input placeholder="Полностью" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Дата рождения</Label>
                          <Input type="date" />
                        </div>
                        <div>
                          <Label>Пол</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Мужской</SelectItem>
                              <SelectItem value="female">Женский</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label>Должность (профессия)</Label>
                        <Input placeholder="Должность для медосмотра" />
                      </div>
                      <Separator />
                      <div>
                        <Label>Вредные и опасные факторы</Label>
                        <Textarea placeholder="Перечислите факторы (например: шум, вибрация, химические вещества...)" rows={2} />
                      </div>
                      <div>
                        <Label>Наименование медицинской организации</Label>
                        <Input placeholder="Название МО с лицензией" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Номер направления</Label>
                          <Input placeholder="№ 001" />
                        </div>
                        <div>
                          <Label>Дата направления</Label>
                          <Input type="date" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => handleGenerateDocument('Направление на медосмотр')} className="flex-1">
                          <Icon name="FileCheck" size={16} className="mr-2" />
                          Сформировать
                        </Button>
                        <Button variant="outline">
                          <Icon name="Printer" size={16} className="mr-2" />
                          Печать
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Профиль пользователя</h2>
              <p className="text-muted-foreground">Управление личными данными и настройками</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-primary" size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Специалист по ОТ</h3>
                  <p className="text-sm text-muted-foreground mb-4">specialist@company.ru</p>
                  <Badge>Администратор</Badge>
                  <Separator className="my-6" />
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Сотрудников:</span>
                      <span className="font-medium">182</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Документов:</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Регистрация:</span>
                      <span className="font-medium">01.2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                  <CardDescription>Обновите свои данные</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Фамилия</Label>
                      <Input placeholder="Иванов" />
                    </div>
                    <div>
                      <Label>Имя</Label>
                      <Input placeholder="Иван" />
                    </div>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="specialist@company.ru" />
                  </div>
                  <div>
                    <Label>Телефон</Label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label>Должность</Label>
                    <Input placeholder="Инженер по охране труда" />
                  </div>
                  <div>
                    <Label>Организация</Label>
                    <Input placeholder="ООО 'Компания'" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Настройки безопасности</CardTitle>
                <CardDescription>Управление паролем и безопасностью аккаунта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Текущий пароль</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Новый пароль</Label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <Label>Подтвердите пароль</Label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                </div>
                <Button>
                  <Icon name="Lock" size={16} className="mr-2" />
                  Изменить пароль
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;