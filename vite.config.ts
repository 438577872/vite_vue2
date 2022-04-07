import path from 'path'
import {createVuePlugin} from 'vite-plugin-vue2'
import {VuetifyResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'


export default {
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
        extensions: ['.mjs', '.ts', '.tsx', '.vue', '.js', '.jsx', '.json']
    },
    plugins: [createVuePlugin({target: "esnext"}), Components({
        dts: true,
        // auto import for directives
        directives: false,
        // resolvers for custom components
        resolvers: [
            // Vuetify
            VuetifyResolver(),
        ],
    })]

}
