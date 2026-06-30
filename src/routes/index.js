// URL 라우팅
// 어떤 URL이 어떤 Controller로 연결되는지 정의합니다.
const express = require('express');
const router = express.Router();

const authController = require('../controllers');

// DB 연결 테스트
router.get('/db-test', authController.dbTest);

// 회원가입
router.post('/auth/register', authController.register);

// 로그인
router.post('/auth/login', authController.login);

module.exports = router;