# Certificate formats

Two major encoding schemes for X.509 certificates and keys: 

    PEM (Base64 ASCII)
    DER (binary)

As you work with digital certificates, you may find yourself with the need to convert between PEM and DER files, view their contents as human-readable text, or combine them into common container formats like PKCS#12 or PKCS#7. 

## Certificates

    x509
    PEM
    DER
    P7B
    PKCS7
    PFX
    PKCS#8


The PKCS#12 or PFX format is a binary format for storing the server certificate, intermediate certificates, and the private key in one encryptable file. 
PFX files usually have extensions such as .pfx and .p12. PFX files are typically used on Windows machines to import and export certificates and private keys.


The PKCS#7 or P7B format is stored in Base64 ASCII format and has a file extension of .p7b or .p7c.
A P7B file only contains certificates and chain certificates (Intermediate CAs), not the private key. The most common platforms that support P7B files are Microsoft Windows and Java Tomcat.


The .cer or .crt extension
.cer just stands for certificate. It is normally DER encoded data, but Windows may also accept PEM encoded data. You need to take a look at the content (e.g. using the file utility on posix systems) to see what is within the file to be 100% sure.


PKCS#1, SEC1, and PKCS#8 type keys can be encrypted by using a combination of the cipher and format options. 
The PKCS#8 type can be used with any format to encrypt any key algorithm (RSA, EC, or DH) by specifying a cipher. 
PKCS#1 and SEC1 can only be encrypted by specifying a cipher when the PEM format is used. 
For maximum compatibility, use PKCS#8 for encrypted private keys. 
Since PKCS#8 defines its own encryption mechanism, PEM-level encryption is not supported when encrypting a PKCS#8 key. See RFC 5208 for PKCS#8 encryption and RFC 1421 for PKCS#1 and SEC1 encryption.


### PEM (originally "Privacy Enhanced Mail") 

Base-64 encoded ASCII files. 

Extensions used for PEM certificates are:

    .crt
    .pem
    .cer
    .key (for private keys)

### DER (Distinguished Encoding Rules)

The DER format is the binary encoding form of X.509 certificates and private key

Common extensions are:

    .der
    .cer.


# Reference

https://knowledge.digicert.com/solution/SO26449.html
https://www.sslshopper.com/ssl-converter.html

