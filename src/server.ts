import app from './app';

const PORT = 9090;
app.listen(PORT, () => {
    console.log('App running');
    console.log(`On: http://localhost:${PORT}`);
});