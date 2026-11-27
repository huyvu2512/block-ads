# Security Policy

## Privacy & Trust Model

**Huyvu2512 Block Ads** is designed strictly as a DNS-layer filter (`DNS-over-HTTPS`):

- **No Root CA (`com.apple.security.root`):** The provided `.mobileconfig` profile (`profiles/huyvu2512.mobileconfig`) **never** installs any Root CA certificate.
- **No MITM / HTTPS Interception:** Traffic payloads, credentials, banking sessions, and HTTPS headers remain end-to-end encrypted between your device and the destination server.
- **DNS-Only Scope:** Only DNS hostname lookups are routed through Cloudflare Zero Trust Gateway (`com.apple.dnsSettings.managed`).

## Reporting a Vulnerability

If you discover a security issue, misconfiguration, or false-positive domain in this repository, please open an issue on [GitHub Issues](https://github.com/huyvu2512/block-ads/issues) or reach out via [huyvu2512.io.vn](https://huyvu2512.io.vn/).
