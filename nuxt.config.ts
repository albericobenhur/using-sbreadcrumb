import { existsSync, readFileSync } from "node:fs";
export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module', '@nuxtseo/module'],
   
  nitro: {
    preset: 'cloudflare-pages',
},
  site: {
    identity: {
        type: 'Person'
    },
    url: 'http://localhost:3000',
    name: 'My website',
    twitter: '@',
    trailingSlash: true, 
    description: 'Welcome to my awesome site!',
    defaultLocale: 'pt-BR',
},
typescript: {
    strict: false,
},
app: {
    head: {
        titleTemplate: '%s %separator %siteName',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        templateParams: {
            separator: '-',
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
vite: {
    vue: {
      script: {
        fs: {
          fileExists(file: string) {
            return existsSync(file);
          },
          readFile(file: string) {
            return readFileSync(file, "utf-8");
          },
        },
      },
    },
  },
})
