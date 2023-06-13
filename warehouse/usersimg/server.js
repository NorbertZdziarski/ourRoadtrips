const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Dodajemy niestandardowy endpoint do obsługi zapisu obrazów
server.post('/images', (req, res) => {
    const { image } = req.files;

    if (!image) {
        return res.status(400).json({ error: 'Nie znaleziono pliku obrazu.' });
    }

    // Wykonujemy logikę zapisu obrazu do bazy danych, np. dodawanie do tablicy "images"

    res.json({ success: true });
});

server.use(router);
server.listen(3000, () => {
    console.log('Serwer JSON jest uruchomiony na porcie 3000');
});