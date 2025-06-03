import { JSX } from 'react';
import {
  ThemeSettings,
  UVerifyCertificate,
  UVerifyCertificateExtraData,
  UVerifyMetadata,
} from './types/index.js';

export const UVERIFY_CORE_VERSION = '0.1.0';
export * from './types/index.js';

export abstract class Template {
  protected whitelist: string[] | '*';
  public theme: Partial<ThemeSettings>;
  public layoutMetadata: { [key: string]: string };
  public name: string;

  constructor() {
    this.whitelist = '*';
    this.theme = {
      background: 'bg-main-gradient',
    };
    this.layoutMetadata = {};
    this.name = 'Default';
  }

  public isWhitelisted(address?: string) {
    if (this.whitelist === '*') {
      return true;
    }

    if (typeof address !== 'undefined' && this.whitelist.includes(address)) {
      return true;
    }

    return false;
  }

  public validate(payment_credential: string) {
    if (this.whitelist === '*') {
      return true;
    }

    return this.whitelist.includes(payment_credential);
  }

  public abstract render(
    hash: string,
    metadata: UVerifyMetadata,
    certificate: UVerifyCertificate | undefined,
    pagination: JSX.Element,
    extra: UVerifyCertificateExtraData
  ): JSX.Element;
}
