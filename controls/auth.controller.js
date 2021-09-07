/* eslint-disable no-underscore-dangle */
const { constants, statusEnum } = require('../config');
const { Action, OAuth, User } = require('../database');
const { pasService, jwtService } = require('../services');
const { userNormalize } = require('../utils/user.util');

const forgotPass = async (req, res, next) => {
    try {
        const { email } = req;
        const token = jwtService.generateActionToken();

        const { _id } = await User.findOne(email);

        await Action.create({
            token,
            user: _id
        });

    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const { user, body: { password } } = req;

        await pasService.compare(password, user.password);

        const tokens = jwtService.generateTokens();

        await OAuth.create({
            ...tokens,
            user: user._id
        });
        res.json({
            ...tokens,
            user: userNormalize(user)
        });
    } catch (err) {
        next(err);
    }
};

const logout = async (req, res, next) => {
    try {
        const token = req.get(constants.AUTHORIZATION);

        await OAuth.deleteOne({
            accessToken: token
        });

        res.status(statusEnum.NO_CONTENT);
    } catch (err) {
        next(err);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        const token = req.get(constants.AUTHORIZATION);

        const tokens = jwtService.generateTokens();

        await OAuth.findOneAndUpdate({ refreshToken: token }, { ...tokens });

        res.status(statusEnum.NO_CONTENT);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    forgotPass,
    login,
    logout,
    refreshToken
}
