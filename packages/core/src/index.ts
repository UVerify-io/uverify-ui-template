import { JSX } from 'react';
import {
  BuildTransactionParams,
  ThemeSettings,
  UVerifyCertificate,
  UVerifyCertificateExtraData,
  UVerifyConfig,
  UVerifyMetadata,
  UpdatePolicy,
} from './types/index.js';

export const UVERIFY_CORE_VERSION = '0.1.0';
export * from './types/index.js';

export abstract class Template {
  protected whitelist: string[] | '*';
  public theme: Partial<ThemeSettings>;
  public layoutMetadata: { [key: string]: string };
  public name: string;
  public uverifyConfig?: UVerifyConfig;

  /**
   * Default update policy applied when no on-chain `uverify_update_policy`
   * metadata key is present. Defaults to `'append'` when not set.
   */
  public defaultUpdatePolicy?: UpdatePolicy;

  /**
   * List of backend extension names that must be reachable for this template
   * to appear in the template selector.
   * Each entry is checked via `GET /api/v1/extension/{name}` — a 200 response
   * means the extension is enabled.
   */
  public requiredBackendExtensions?: string[];

  /**
   * Optional custom transaction builder. When defined, the Creation page calls
   * this method instead of the standard `/api/v1/transaction/build` endpoint.
   * The method must resolve to the unsigned transaction CBOR hex string, or
   * throw an error on failure.
   */
  public buildTransaction?: (params: BuildTransactionParams) => Promise<string>;

  constructor(uverifyConfig?: UVerifyConfig) {
    this.whitelist = '*';
    this.theme = {
      background: 'bg-main-gradient',
    };
    this.layoutMetadata = {};
    this.name = 'Default';
    this.uverifyConfig = uverifyConfig;
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
    extra: UVerifyCertificateExtraData,
  ): JSX.Element;
}
