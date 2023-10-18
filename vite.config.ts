import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import dts from 'vite-plugin-dts';
import {resolve} from 'path'

export default defineConfig({
    plugins: [
        dts({
            include: [
                resolve(__dirname, 'src/main.ts')
            ]
        }),
        checker({
            typescript: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            fileName: 'main',
            formats: ['es']
        }
    }
});
