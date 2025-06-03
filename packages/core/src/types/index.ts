export type MetadataViewerStyle = {
  border: {
    color: string;
    opacity: number;
    hover: {
      color: string;
      opacity: number;
    };
  };
};

export type IdentityCardStyle = {
  border: {
    color: string;
    opacity: number;
    hover: {
      color: string;
      opacity: number;
    };
  };
  background: {
    color: string;
    opacity: number;
    hover: {
      color: string;
      opacity: number;
    };
  };
};

export type FingerprintStyle = {
  gradient: {
    color: {
      start: string;
      end: string;
    };
  };
};

export type PaginationStyle = {
  border: {
    active: {
      color: string;
    };
    inactive: {
      color: string;
      hover: {
        color: string;
      };
    };
  };
  text: {
    active: {
      color: string;
      hover: {
        color: string;
      };
    };
    inactive: {
      color: string;
      hover: {
        color: string;
      };
    };
  };
  background: {
    active: {
      color: string;
    };
    inactive: {
      color: string;
      hover: {
        color: string;
      };
    };
  };
};

export type Shades =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export type Colors = {
  ice?: Partial<{
    [key in Shades]: string;
  }>;
  green?: Partial<{
    [key in Shades]: string;
  }>;
  cyan?: Partial<{ [key in Shades]: string }>;
  red?: Partial<{ [key in Shades]: string }>;
  blue?: Partial<{ [key in Shades]: string }>;
  pink?: Partial<{ [key in Shades]: string }>;
};

export type Components = Partial<{
  pagination: PaginationStyle;
  identityCard: IdentityCardStyle;
  metadataViewer: MetadataViewerStyle;
  fingerprint: FingerprintStyle;
}>;

export type ThemeSettings = {
  background: string;
  colors: Colors;
  components: Components;
  footer: {
    hide: boolean;
  };
};

export type UVerifyCertificateExtraData = {
  hashedMultipleTimes: boolean;
  firstDateTime: string;
  issuer: string;
  serverError: boolean;
  isLoading: boolean;
};

export declare interface Field {
  key: string;
  value: string;
  placeholder?: string;
  layoutProp?: boolean;
}

export declare interface UVerifyCertificate {
  hash: string;
  address: string;
  blockHash: string;
  blockNumber: number;
  transactionHash: string;
  slot: number;
  creationTime: number;
  metadata: string;
  issuer: string;
}

export type UVerifyMetadata = Record<string, string | number | boolean | null>;
