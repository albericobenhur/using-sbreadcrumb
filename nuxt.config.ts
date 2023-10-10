export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxtseo/module'
  ],
   
  nitro: {
    preset: 'cloudflare-pages',
},
  site: {
    identity: {
        type: 'Organization'
    },
    url: 'https://example.com',
    name: 'My website', 
    separator: '-',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en',
    
},
typescript: {
    strict: false,
},
app: {
    head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        templateParams: {
            titleTemplate: '%s %separator %siteName'
        }
    }
},
vuetify: {
    vuetifyOptions: {
        labComponents: true,
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        background: '#ffffff',
                        primary: '#222222',
                        secondary: '#333333',
                        accent: '#111111',
                        neutral: '#444444',
                        surface: '#FFFFFF',
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        background: '#ffffff',
                        primary: '#222222',
                        secondary: '#333333',
                        accent: '#111111',
                        neutral: '#444444',
                        surface: '#FFFFFF',
                    },
                },
            },
        },
    },
},
})
