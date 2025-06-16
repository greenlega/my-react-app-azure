import React, { useState, useEffect } from 'react';

// Головний компонент програми
const App = () => {




const App = () => {
  // Стан для зберігання даних, що завантажуються
  const [data, setData] = useState([]);
  // Стан для індикатора завантаження
  const [loading, setLoading] = useState(true);
  // Стан для повідомлень про помилки
  const [error, setError] = useState(null);

  // useEffect спрацьовує після рендерингу компонента
  useEffect(() => {
    // Функція для імітації отримання даних з бекенду
    const fetchData = async () => {
      setLoading(true); // Встановлюємо стан завантаження на true
      setError(null);   // Скидаємо будь-які попередні помилки

      try {
        // Імітуємо затримку мережі, щоб показати індикатор завантаження
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Імітуємо дані, які могли б бути отримані з API або бази даних
        const simulatedData = [
          { id: 1, name: 'Елемент 1', description: 'Це опис першого тестового елемента з нашого списку.' },
          { id: 2, name: 'Елемент 2', description: 'Це детальний опис другого елемента, який може бути довшим.' },
          { id: 3, name: 'Елемент 3', description: 'Короткий опис третього елемента.' },
          { id: 4, name: 'Елемент 4', description: 'Четвертий елемент, що демонструє роботу програми.' },
        ];

        setData(simulatedData); // Оновлюємо стан даних успішно отриманими даними
      } catch (err) {
        // Обробка помилок під час завантаження даних
        setError('Помилка завантаження даних. Спробуйте оновити сторінку.');
        console.error("Error fetching data:", err); // Логуємо помилку для налагодження
      } finally {
        setLoading(false); // Завершуємо завантаження, незалежно від результату
      }
    };

    fetchData(); // Викликаємо функцію отримання даних при першому рендерингу компонента
  }, []); // Пустий масив залежностей означає, що цей ефект запускається лише один раз (при монтуванні компонента)

  return (
    // Головний контейнер програми зі стилізацією фону
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
          Моя Перша Веб-Програма в Azure
        </h1>

        {/* Умовне відображення індикатора завантаження */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="mt-4 text-lg text-gray-600">Завантаження даних...</p>
          </div>
        )}

        {/* Умовне відображення повідомлення про помилку */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md mb-6 text-center text-lg font-medium">
            {error}
          </div>
        )}

        {/* Умовне відображення даних після завантаження, якщо немає помилок */}
        {!loading && !error && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-200 pb-2">
              Отримані елементи:
            </h2>
            {data.length > 0 ? (
              <ul className="space-y-4">
                {data.map(item => (
                  <li key={item.id} className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-100 transition-transform transform hover:scale-[1.01]">
                    <h3 className="text-xl font-bold text-blue-800 mb-1">{item.name}</h3>
                    <p className="text-gray-700 text-base">{item.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              // Повідомлення, якщо дані відсутні
              <p className="text-center text-gray-500 py-8 text-lg">Немає даних для відображення після завантаження.</p>
            )}

            {/* Нижня секція з інформацією про додаток */}
            <div className="mt-10 text-center text-gray-500 text-sm border-t pt-4 border-gray-200">
              <p>Ця програма створена за допомогою React та Tailwind CSS.</p>
              <p>Вона демонструє імітацію завантаження даних.</p>
              <p className="font-medium mt-1">Розгорнуто на **Microsoft Azure App Service**.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

};

export default App;