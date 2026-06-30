// 데이터 구조 정의
// DB 스키마와 모델을 정의합니다. 데이터가 어떻게 생겼는지 명세하는 곳입니다.
const pool = require('../../config/db');

const dbTest = async () => {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    return rows[0].result;
};

const findByUserId = async (userId) => {
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE user_id = ?',
        [userId]
    );

    return rows[0];
};

const createUser = async (userId, password, name) => {
    const [result] = await pool.query(
        'INSERT INTO users (user_id, password, name) VALUES (?, ?, ?)',
        [userId, password, name]
    );

    return {
        id: result.insertId,
    };
};

module.exports = {
    dbTest,
    findByUserId,
    createUser,
};