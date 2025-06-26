export default function Download() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Получить исходный код
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Инструкции по получению полного кода проекта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Через GitHub (рекомендуется)
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>1. Создайте новый репозиторий на GitHub</p>
              <p>2. В Replit перейдите в Shell и выполните:</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-xs">
                <div>git remote add origin https://github.com/username/repo.git</div>
                <div>git branch -M main</div>
                <div>git push -u origin main</div>
              </div>
              <p>3. Затем клонируйте к себе:</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-xs">
                git clone https://github.com/username/repo.git
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Копирование файлов
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>Создайте папку проекта и скопируйте файлы:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>package.json</li>
                <li>client/ (вся папка)</li>
                <li>server/ (вся папка)</li>
                <li>shared/ (вся папка)</li>
                <li>tailwind.config.ts</li>
                <li>vite.config.ts</li>
                <li>tsconfig.json</li>
                <li>README.md</li>
              </ul>
              <p>Затем выполните:</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded font-mono text-xs">
                npm install && npm run dev
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Структура проекта
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Основные файлы:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>package.json - зависимости</li>
                <li>client/src/pages/home.tsx - главная страница</li>
                <li>server/routes.ts - API endpoints</li>
                <li>server/email.ts - система сбора email</li>
                <li>shared/schema.ts - схемы данных</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Компоненты UI:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>client/src/components/sections/ - секции сайта</li>
                <li>client/src/components/ui/ - UI компоненты</li>
                <li>tailwind.config.ts - стили</li>
                <li>vite.config.ts - конфигурация сборки</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}