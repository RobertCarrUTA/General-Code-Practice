# JavaScript

## Typed Arrays
| Type | Range | Size (bytes) | Description | Web IDL Type | Equivalent C Type
| :---: | :---: | :---: | :---: | :---: | :---: 
| Int8Array | -128 to 127	| 1	| 8-bit two's complement signed integer |	byte | int8_t
| Uint8Array | 0 to 255 |	1 |	8-bit unsigned integer | octet | uint8_t
| Uint8ClampedArray | 0 to 255 | 1 | 8-bit unsigned integer (clamped) | octet | uint8_t
| Int16Array | -32,768 to 32,767 | 2 | 16-bit two's complement signed integer |	short |	int16_t
| Uint16Array	| 0 to 65,535 | 2 | 16-bit | unsigned integer	unsigned short | uint16_t
| Int32Array | -2,147,483,648 to 2,147,483,647 |	4	| 32-bit two's complement signed integer | long | int32_t
| Uint32Array |	0 to 4,294,967,295 | 4 |	32-bit unsigned integer |	unsigned long |	uint32_t
| Float32Array | 1.2E-38 to 3.4E38 | 4 | 32-bit IEEE floating point number (7 significant digits e.g., 1.1234567) |	unrestricted float | float
| Float64Array | 5E-324 to 1.8E308 | 8 | 64-bit IEEE floating point number (16 significant digits e.g., 1.123...15)	| unrestricted double |	double
| BigInt64Array |	-2^63 to 2^63 - 1 |	8 |	64-bit two's complement signed integer | bigint | int64_t (signed long long)
| BigUint64Array | 0 to 2^64 - 1 | 8 | 64-bit unsigned integer | bigint |	uint64_t (unsigned long long)



Data from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
