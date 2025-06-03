import {
  Template,
  type ThemeSettings,
  type UVerifyCertificate,
  type UVerifyCertificateExtraData,
  type UVerifyMetadata,
} from '@uverify/core';
import type { JSX } from 'react';

/**
 * This is a custom certificate template for UVerify.
 *
 * It just showcases how to create a certificate with a specific layout and theme.
 * TODO: Customize the layout, business logic and theme to fit your needs and remove all these comments.
 */
class Certificate extends Template {
  public name = 'Example University Certificate';
  public theme: Partial<ThemeSettings> = {
    background:
      'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
  };

  /**
   * Layout-related metadata will appear as predefined fields in the metadata editor when
   * using app.uverify.io/create to generate a new certificate.
   *
   * These fields can be used to provide additional context or instructions for the user.
   *
   * For example, a field like studentName will be displayed in the metadata editor as a predefined input
   * and later rendered in the certificate.
   *
   * In production, it’s important to avoid asking users for personal data, as such information cannot be removed from the blockchain.
   * To ensure GDPR compliance, UVerify offers a specific design pattern. For more details, please visit docs.uverify.io.
   */
  public layoutMetadata = {
    issuer: 'The issuer name',
    issuedAt: 'The date when the certificate was issued',
    studentName: 'The name of the student',
    degree: 'The degree or course completed',
    graduationDate: 'The date of graduation',
  };

  /**
   * @param hash string
   * @description The hash of the data stored on the blockchain.
   * @param metadata UVerifyMetadata
   * @description The metadata associated with the certificate, provided by the issuer.
   * @param certificate UVerifyCertificate | undefined
   * @description The certificate data retrieved from the blockchain, which includes transaction details.
   * @param pagination JSX.Element
   * @description The pagination component for navigating through multiple certificates, if applicable.
   * @param extra UVerifyCertificateExtraData
   * @description Additional data related to the certificate, such as loading state and server errors.
   * @returns the rendered certificate component as a JSX element.
   */
  public render(
    hash: string,
    metadata: UVerifyMetadata,
    certificate: UVerifyCertificate | undefined,
    pagination: JSX.Element,
    extra: UVerifyCertificateExtraData
  ): JSX.Element {
    if (extra.isLoading) {
      return (
        <div className="flex items-center justify-center h-full text-lg font-semibold">
          Loading certificate...
        </div>
      );
    }

    if (extra.serverError) {
      return (
        <div className="flex items-center justify-center h-full text-lg font-semibold text-red-600">
          Error loading certificate. Please try again later.
        </div>
      );
    }

    // TODO: You can also make use of useEffect's to fetch additional data or perform side effects if needed.

    return (
      <div className="max-w-3xl mx-auto p-6 text-white bg-white/30 shadow-lg rounded-lg border border-white mt-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Certificate of Achievement</h1>
          <p>Issued by: {metadata.issuer}</p>
        </div>

        <div className="mb-6">
          <p className="text-lg">
            Awarded to:{' '}
            <span className="font-semibold">{metadata.studentName}</span>
          </p>
          <p className="text-lg">
            For completing:{' '}
            <span className="font-semibold">{metadata.degree}</span>
          </p>
          <p>
            Graduation Date:{' '}
            <span className="font-semibold">
              {new Date(metadata.graduationDate + '').toDateString()}
            </span>
          </p>
          <p>
            Issued At:{' '}
            <span className="font-semibold">
              {new Date(metadata.issuedAt + '').toDateString()}
            </span>
          </p>
        </div>

        {certificate && (
          <div className="mt-6 border-t border-white pt-4">
            <p>
              Certificate Hash:{' '}
              <span className="font-mono text-xs">{hash}</span>
            </p>
            <p>
              Block Hash:{' '}
              <span className="font-mono text-xs">{certificate.blockHash}</span>
            </p>
            <p>
              Transaction Hash:{' '}
              <span className="font-mono text-xs">
                {certificate.transactionHash}
              </span>
            </p>
            <p>
              Issuer Address:{' '}
              <span className="font-mono text-xs">{certificate.issuer}</span>
            </p>
          </div>
        )}

        <div className="mt-6">{pagination}</div>
        <div className="mt-8 mb-2 text-center">
          <a
            href={`https://cexplorer.io/tx/${certificate?.transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white rounded p-3 hover:bg-blue-200/30 transition duration-200"
          >
            View on Block Explorer
          </a>
        </div>
        {/* 
          You can add more components here, such as a button to download the certificate,
          or any other relevant information.

          E.g. a username / password field to get access to the full certificate stored in a non-blockchain environment for auditing purposes.
        */}
      </div>
    );
  }
}

export default Certificate;
