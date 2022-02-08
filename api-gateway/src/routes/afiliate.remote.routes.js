import { Router } from "express";
const router = Router();
import apiAdapter from './apiAdapter';
import { authJwt } from "../middlewares";

const BASE_URL = 'http://localhost:8000';
const api = apiAdapter(BASE_URL);


router.get('/',[authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
});

router.get('/products/',[authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
});

router.get('/products/:productId',[authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
});

router.post('/products/',[authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
});

router.put('/products/:productId',[authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
});

router.delete('/products/:productId',[authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
});

module.exports = router;