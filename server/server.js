const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();
const port = 8080;

const allowedOrigins = [
	  'http://34.16.152.36:8000'
];

app.use(express.json());

app.use((req, res, next) => {
	  const origin = req.headers.origin;
	  if (allowedOrigins.includes(origin)) {
		      res.setHeader('Access-Control-Allow-Origin', origin);
		    }
	  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	  next();
});

app.post('/capture', async (req, res) => {
	  const { url } = req.body;

	  try {
		      const browser = await puppeteer.launch();
		      const page = await browser.newPage();
		      await page.goto(url);
		      
		      await page.waitForTimeout(2000);

		      const screenshotBuffer = await page.screenshot();
		      await browser.close();

		      res.set('Content-Type', 'image/png');
		      res.send(screenshotBuffer);
		    } catch (err) {
			        console.error(err);
			        res.status(500).send('Error capturing screenshot');
			      }
});

app.listen(port, '0.0.0.0', () => {
	  console.log(`Server running on http://0.0.0.0:${port}`);
});

