const path = require('path');

const projectRoot = process.cwd();

module.exports = (env) => ({
    mode: "development",
    devtool: "inline-source-map",
    plugins: [],
    infrastructureLogging: {
        debug: [name => name.includes('webpack-dev-server')],
    },
    devServer: {
        static: {
            directory: path.join(projectRoot, 'src/assets'),
            publicPath: '/assets',
        },
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: '/index.html'
        },
        proxy: {
            '/lk/api': {
                target: 'http://localhost:9000',
                pathRewrite: { '^/lk/api': '' },
                router: {
                    '/user-authentificate': 'http://oauth-idp.apps.yd-kt05.vimpelcom.ru/api/v2',
                    '/oauth-idp': 'http://proxy-back.apps.yd-kt05.vimpelcom.ru/lkb2b',
                    '/ul-profile': 'http://ul-client-profile-test-lkb2b.apps.mn-kp01.vimpelcom.ru/api/v1',
                    '/user-settings': 'http://user-settings.apps.yd-kt05.vimpelcom.ru/api',
                    '/payments': 'https://user-data.apps.yd-kt05.vimpelcom.ru',
                    '/invoices': 'https://user-data.apps.yd-kt05.vimpelcom.ru',
                    '/orders': 'http://order-history.apps.yd-kt05.vimpelcom.ru',
                    '/legal': 'http://ul-client-profile-test-vitrina.apps.yd-kt05.vimpelcom.ru',
                    '/individual': 'https://unified-client-profile.apps.yd-kt05.vimpelcom.ru',
                    '/contract-info': 'http://trouble-tickets.apps.yd-kt05.vimpelcom.ru/api/v1',
                    '/ttms-dictionaries': 'http://trouble-tickets.apps.yd-kt05.vimpelcom.ru/api/v1',
                    '/contracts': 'https://user-data.apps.yd-kt05.vimpelcom.ru',
                    '/tickets': 'http://trouble-tickets.apps.yd-kt05.vimpelcom.ru/api/v1',
                    '/user-notifications-info': 'http://notifier-producer-test-lkb2b.apps.mn-kp01.vimpelcom.ru',
                    '/services': 'https://user-data.apps.yd-kt05.vimpelcom.ru',
                },
                changeOrigin: true,
                logLevel: 'debug',
                secure: false,
            }
        },
    }
});
