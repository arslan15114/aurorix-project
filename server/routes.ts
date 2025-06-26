import { sendMail } from "./mail.js"; // Обязательно с .js, если type: "module"
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { logNewSubmission } from "./email";
import { z } from "zod";


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
		try {
			const validatedData = insertContactSubmissionSchema.parse(req.body)
			const submission = await storage.createContactSubmission(validatedData)

			// Логируем заявку в файлы и консоль
			await logNewSubmission(validatedData)

			// ✉️ Отправляем письмо
			await sendMail({
				name: `${validatedData.firstName} ${validatedData.lastName}`,
				email: validatedData.email,
				company: validatedData.company,
				role: validatedData.role,
				message: validatedData.message || '',
			})

			res.json({
				success: true,
				message:
					"Thank you for your interest! We'll be in touch within 24 hours.",
				id: submission.id,
			})
		} catch (error) {
			if (error instanceof z.ZodError) {
				res.status(400).json({
					success: false,
					message: 'Please check your form for errors',
					errors: error.errors,
				})
			} else {
				console.error('Contact form error:', error)
				res.status(500).json({
					success: false,
					message: 'Something went wrong. Please try again later.',
				})
			}
		}
	})
  

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch submissions"
      });
    }
  });

  // Download project source code
  app.get("/download-source", async (req, res) => {
    try {
      const path = require('path');
      const archivePath = path.join(process.cwd(), 'aurorix-landing-page.tar.gz');
      
      res.download(archivePath, 'aurorix-landing-page.tar.gz', (err) => {
        if (err) {
          console.error('Download error:', err);
          res.status(500).send('Error downloading file');
        }
      });
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).send('Error downloading file');
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
