import type { PluginOption } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export const BasicSslPluginConfig: PluginOption = basicSsl({
  /** name of certification */
  name: 'oidc-web-base',
  /** custom trust domains */
  domains: [],
  /** custom certification directory */
  certDir: '',
});
