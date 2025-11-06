var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  res.render('index', { title: 'Mi Álbum con Bootstrap' });
});

router.get('/photos', async (req, res, next) => {
  try {
    const URL = 'https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json';

    const { data } = await axios.get(URL);

    const fotos = Array.isArray(data) ? data.filter(Boolean) : Object.values(data || {});
    res.render('fotos', { title: 'Fotos', fotos });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
