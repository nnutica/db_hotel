/**
 * member controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::member.member', ({ strapi }) => ({
    async login(ctx) {
        const { email } = ctx.request.body;

        if (!email) {
            return ctx.badRequest('Email is required');
        }

        // ค้นหา Email ใน Model
        const member = await strapi.db.query('api::member.member').findOne({
            where: { Email: email },
        });

        if (!member) {
            return ctx.notFound('Email not found');
        }

        // ส่งข้อมูลกลับไปยัง Client
        return ctx.send({ name: member.Name, lastName: member.lastName });
    },
}));
