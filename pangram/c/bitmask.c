// compile using gcc -Wall -O2 -o pangram-c-bitmask bitmask.c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int createBitmaskFromString(char* string, int len) {
	int bitmask = 0;
	for(int i = 0; i < len; i++) {
		char bit = (string[i] & 0xDF) - 65;
		if (bit < 0 || bit > 26) {
			continue;
		}
		bitmask |= 0x01 << bit;
	}

	return bitmask;
}

int isPangramBitmask(int bitmaskAlphabet, char* string, int len) {
	return createBitmaskFromString(string, len) == bitmaskAlphabet
		? 1
		: 0;
}

int main(int argc, char** argv) {
	if (argc != 3) {
		printf("Error: missing alphabet or string\n");
		printf("\n");
		printf("Example:\n");
		printf("%s ABCDEFGHIJKLMNOPQRSTUVWXYZ \"The quick brown fox jumps over the lazy dog\"\n", argv[0]);
		return -1;
	}

	char *alphabet = argv[1];
	char *string = argv[2];
	int alphabetLen = strlen(alphabet);
	int stringLen = strlen(string);

	int bitmaskAlphabet = createBitmaskFromString(alphabet, alphabetLen);
	printf("Is Pangram: %s\n", isPangramBitmask(bitmaskAlphabet, string, stringLen) ? "yes" : "no");

	return 0;
}
