### compile using gcc -Wall -O2 -o pangram-c-strchr strchr.c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int isPangramStrpos(char* alphabet, int alphabetLen, char* string) {
	for(int i = 0; i < alphabetLen; i++) {
		char bit = string[i] & 0xDF;
		if (strchr(alphabet, bit) == NULL) {
			return 0;
		}
	}

	return 1;
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

	printf("Is Pangram: %s\n", isPangramStrpos(alphabet, alphabetLen, string) ? "yes" : "no");

	return 0;
}
