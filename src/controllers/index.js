// 요청/응답 처리
//req, res를 받아서 Service를 호출하고 응답을 반환합니다. 로직은 최대한 Service에 위임합니다.
const authService = require('../services');

const dbTest = async (req, res) => {
    try {
        const result = await authService.dbTest();

        res.json({
            message: 'DB 연결 성공',
            result,
        });
    } catch (error) {
        res.status(500).json({
            message: 'DB 연결 실패',
            error: error.message,
        });
    }
};

const register = async (req, res) => {
    try {
        const { userId, password, name } = req.body;

        const result = await authService.register(userId, password, name);

        res.status(201).json({
            message: '회원가입 성공',
            user: result,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { userId, password } = req.body;

        const result = await authService.login(userId, password);

        res.json({
            message: '로그인 성공',
            user: result,
        });
    } catch (error) {
        res.status(401).json({
            message: error.message,
        });
    }
};

module.exports = {
    dbTest,
    register,
    login,
};