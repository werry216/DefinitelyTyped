import Email = require('email-templates');
import { createTransport } from 'nodemailer';
import path = require('path');

const locals = {
    locale: 'en',
    name: 'Elon',
};

let email = new Email();

email = new Email({
    message: {
      from: 'Test@testing.com'
    },
    transport: {
        jsonTransport: true
    },
    getPath: (type, template, locales) => {
        const locale = locales.locale;
        return path.join(template, locale, type);
    },
});

const emailNoTransporter = new Email({
    message: {
      from: 'test@testing.com'
    },
});

email.juiceResources('<p>bob</p><style>div{color:red;}</style><div/>');
email.render('mars/html.pug');
email.render('mars/html.pug', locals);
const sendPromise: Promise<any> = email.send({template: 'mars', message: {to: 'elon@spacex.com'}, locals});
email.send({template: 'mars', message: {to: 'elon@spacex.com'}, locals})
.then(res => {
    console.log('res.originalMessage', res.originalMessage);
})
.catch(console.error);
emailNoTransporter.render('mars/html.pug', locals);

interface Locals {
    firstName: string;
}

const withTransportInstance = new Email<Locals>({
    message: {
        from: 'definitelytyped@example.org'
    },
    transport: createTransport({
        jsonTransport: true
    })
});

withTransportInstance.render('tmpl', { firstName: 'TypeScript' });

const emailOptions: Email.EmailOptions<Locals> = {
    template: 'tmpl',
    locals: {
        firstName: 'TypeScript'
    },
    message: {
        to: 'recipient@example.org',
        attachments: [{
            filename: 'hello.txt',
            content: 'an attachment'
        }]
    }
};

withTransportInstance.send(emailOptions);

email.renderAll('mars');
const promise = email.renderAll('mars', locals);
promise.then(value => {
    const subject: string | undefined = value.subject;
    const html: string | undefined = value.html;
    const text: string | undefined = value.text;
});

email = new Email({
    message: {
        from: 'definitelytyped@example.org',
    },
    juice: true,
    juiceSettings: {
        tableElements: ['TABLE'],
    },
    juiceResources: {
        preserveImportant: true,
        webResources: {
            relativeTo: path.resolve('build'),
        },
    },
});

email = new Email({
    views: {
        locals: {
            cache: true,
            pretty: true,
            foo: 'bar'
        }
    },
    message: {
        from: 'definitelytyped@example.org'
    }
});
