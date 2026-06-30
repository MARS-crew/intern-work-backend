// 비즈니스 로직
// 실제 데이터 처리 로직이 담깁니다. Controller는 얇게 유지하고, 핵심 로직은 여기에 작성합니다.
const bcrypt = require('bcrypt');
const userModel = require('../models');

const dbTest = async () => {
    return await userModel.dbTest();
};

const register = async (userId, password, name) => {
    if (!userId || !password || !name) {
        throw new Error('아이디, 비밀번호, 이름을 모두 입력하세요.');
    }

    const existingUser = await userModel.findByUserId(userId);

    if (existingUser) {
        throw new Error('이미 사용 중인 아이디입니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.createUser(userId, hashedPassword, name);

    return {
        id: newUser.id,
        userId,
        name,
    };
};

const login = async (userId, password) => {
    if (!userId || !password) {
        throw new Error('아이디와 비밀번호를 입력하세요.');
    }

    const user = await userModel.findByUserId(userId);

    if (!user) {
        throw new Error('존재하지 않는 아이디입니다.');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error('비밀번호가 일치하지 않습니다.');
    }

    return {
        id: user.id,
        userId: user.user_id,
        name: user.name,
    };
};

module.exports = {
    dbTest,
    register,
    login,
};