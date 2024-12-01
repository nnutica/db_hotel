/**
 * member router
 */


export default {
    routes: [
        {
            method: 'POST',
            path: '/members/login',
            handler: 'api::member.member.login',
            config: {
                auth: false, // เปิดให้ public user ใช้ route นี้
            },
        },
    ],
};
module.exports = {
    routes: [
        {
            method: 'POST', // ตรวจสอบว่ามี POST อยู่
            path: '/members', // Endpoint สำหรับสร้าง member
            handler: 'api::member.member.create', // ชื่อ handler
        },
    ],
};
