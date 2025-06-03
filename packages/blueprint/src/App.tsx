import type { UVerifyCertificate } from '@uverify/core';
import Certificate from './Certificate';

/**
 * This is the main application component that renders the certificate.
 * It will not be used in production, but it is useful for local development and testing.
 *
 * UVerify will just import the Certificate class and use it to render the certificate.
 * You can adjust the metadata and other parameters as needed for your testing purposes.
 */
function App() {
  const certificate = new Certificate();
  const hash =
    'aecfb5054637aef7551cc388255515399183e3b2fe37b07398a9769dd18f709a';

  const metadata = {
    issuer: 'Meaningful University',
    issuedAt: '2023-10-01T12:00:00Z',
    studentName: 'John Doe',
    degree: 'Bachelor of Science in Computer Science',
    graduationDate: '2023-06-15',
  };

  const uVerifyCertificate: UVerifyCertificate = {
    hash: hash,
    metadata: JSON.stringify(metadata),
    blockHash:
      '16e061b5f3de8b966f5f64fe4b2dada37f0a06c209f31ab538f250a997211c93',
    blockNumber: 11936558,
    transactionHash:
      '44268fa73efee7767c6f36434cb4392f446a8bb274da32d9c32657503192df32',
    address: 'addr1vqqj4545qe59w2jkaa6gf5xq00vu8kk2989553fk5qh4orcamfqq5',
    slot: 157145300,
    creationTime: 1748711772720,
    issuer: 'addr1vqqj4545qe59w2jkaa6gf5xq00vu8kk2989553fk5qh4orcamfqq5',
  };

  const background = certificate.theme.background || 'bg-main-gradient';

  return (
    <div
      className={`min-h-screen ${background} flex items-center justify-center`}
    >
      {certificate.render(hash, metadata, uVerifyCertificate, <></>, {
        hashedMultipleTimes: false,
        firstDateTime: new Date(1748711772720).toDateString(),
        issuer: 'addr1vqqj4545qe59w2jkaa6gf5xq00vu8kk2989553fk5qh4orcamfqq5',
        serverError: false,
        isLoading: false,
      })}
    </div>
  );
}

export default App;
