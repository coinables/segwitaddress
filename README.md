# SegWitAddress.org

This is a simple bitcoin paper wallet generator that utilizes Segregated Witness (SegWit) Pay To Witness Public Key Hash (P2WPKH) addresses and transactions. This repo uses 
the BitcoinJS library and was built from BIP32JP's SegWit repo (https://github.com/bip32JP/bip32JP.github.io/tree/master/segwit). 

=======

1. Features

 * Keypair generation with QR Codes
 * Bulk address generator
 * Key Sweeping Tool with custom fee to move all funds belonging to a single SegWit private key. 
 * Details section to validate private keys and to view corresponding segwit address, public key and redeem script.
 * Segwit brain wallet
 
2. Testnet
 
 * The same features listed above are also available for testnet. 
 * You can enable testnet mode by adding  ?testnet=true  to the end of the url.
     Example: https://segwitaddress.org/?testnet=true
     Or locally: localhost/segwitaddress/?testnet=true
    
3. External Support

 * Samourai Wallet can sweep funds from private keys and QR codes generated with segwitaddress.org 
 * Electrum can import private keys using the console and the `importprivkey()` command.
   Import as P2SH segwit:  
 	`importprivkey('p2wpkh-p2sh:L5eaxGKPZZMnanjxDzBd82VaxnHAE6MmBojiEFAVTM9mWZEhMMqG')`
   Import as native(bech32) segwit:  
 	`importprivkey('p2wpkh:L5eaxGKPZZMnanjxDzBd82VaxnHAE6MmBojiEFAVTM9mWZEhMMqG')`
  
4. Troubleshooting

 * If your webcam QR code scanner is not working when using an offline version it is recommended to try running the page from a local XAMPP server.
 
 
Please feel encouraged to contribute. 	
		
=======
		
