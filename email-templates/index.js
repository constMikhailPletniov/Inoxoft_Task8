const { GOODBYE,
    REGISTRATION,
    WELCOME } = require('../config/emailAction.enum');

module.exports = {
    [GOODBYE]: {
        templateName: 'goodbye',
        subject: 'Have a nice day. We will cry'
    },
    [REGISTRATION]: {
        templateName: 'registration',
        subject: 'Thank for Your cooperation'
    },
    [WELCOME]: {
        templateName: 'welcome',
        subject: 'Welocme on board'
    }
};
