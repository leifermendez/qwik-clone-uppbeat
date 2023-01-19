import { expressAdaptor } from '@builder.io/qwik-city/adaptors/express/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: false,
      rollupOptions: {
        input: ['src/entry.express.tsx', '@qwik-city-plan'],
      },
    },
    plugins: [
      expressAdaptor({
        staticGenerate: true,
      }),
    ],
  };
});
