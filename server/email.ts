import { promises as fs } from 'fs';
import path from 'path';

// Простое логирование заявок без внешних сервисов
export async function logNewSubmission(submissionData: any): Promise<boolean> {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      name: `${submissionData.firstName} ${submissionData.lastName}`,
      email: submissionData.email,
      company: submissionData.company,
      role: submissionData.role,
      message: submissionData.message || '',
    };

    // Логируем в консоль
    console.log('\n=== НОВАЯ ЗАЯВКА НА AURORIX MVP ===');
    console.log(`Время: ${new Date().toLocaleString('ru-RU')}`);
    console.log(`Имя: ${logEntry.name}`);
    console.log(`Email: ${logEntry.email}`);
    console.log(`Компания: ${logEntry.company}`);
    console.log(`Роль: ${logEntry.role}`);
    if (logEntry.message) {
      console.log(`Сообщение: ${logEntry.message}`);
    }
    console.log('=====================================\n');

    // Сохраняем в файл
    const logFile = path.join(process.cwd(), 'email-submissions.json');
    let submissions = [];
    
    try {
      const existingData = await fs.readFile(logFile, 'utf-8');
      submissions = JSON.parse(existingData);
    } catch (error) {
      // Файл не существует или пустой - создаем новый массив
      submissions = [];
    }

    submissions.push(logEntry);
    await fs.writeFile(logFile, JSON.stringify(submissions, null, 2));

    // Также сохраняем читаемую версию
    const readableLogFile = path.join(process.cwd(), 'email-submissions.txt');
    const readableEntry = `
${timestamp}
Имя: ${logEntry.name}
Email: ${logEntry.email}
Компания: ${logEntry.company}
Роль: ${logEntry.role}
${logEntry.message ? `Сообщение: ${logEntry.message}` : ''}
----------------------------------------
`;
    
    await fs.appendFile(readableLogFile, readableEntry);
    
    return true;
  } catch (error) {
    console.error('Ошибка при сохранении заявки:', error);
    return false;
  }
}